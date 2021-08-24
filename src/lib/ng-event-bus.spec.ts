import { NgEventBus } from './ng-event-bus';
import { MetaData } from './meta-data';

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: string) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const generateMessages = () => {
  return {
    ch1: uuid(),
    ch2: uuid(),
    ch3: uuid(),
    ch4: uuid(),
    ch5: uuid(),
    ch6: uuid(),
    ch7: uuid(),
    ch8: uuid(),
    ch9: uuid(),
  };
};

describe('ng-event-bus', () => {
  it('should create an instance', () => {
    expect(new NgEventBus()).toBeTruthy();
  });

  it('Submit to channel', () => {
    const eventBus: NgEventBus = new NgEventBus();
    const channelMessages: any = generateMessages();

    // subscribe to message
    Object.keys(channelMessages).forEach((channel: string) => {
      eventBus.on(channel).subscribe((data: MetaData) => {
        expect(data.data).toEqual(channelMessages[channel]);
      });
    });

    // cast something
    Object.keys(channelMessages).forEach((channel) => {
      eventBus.cast(channel, channelMessages[channel]);
    });
  });

  const matchPairs = [
    ['a', 'a'],
    ['a:b', 'a:b'],
    ['a:b:c', 'a:b:c'],
    ['a:b:c', '**'],
    ['a:b:c', 'a:**'],
    ['a:b:c', 'a:b:*'],
    ['a:b:c', 'a:b:**'],
    ['a:b:c', '*:b:*'],
    ['a:b:c', 'a:*:*'],
  ];

  const dontMatchPairs = [
    ['a', 'b'],
    ['a:b:c', 'a:*'],
    ['a:b:c', 'a:b'],
    ['a:b:c', 'a:b:c:**'],
    ['a:b:c', 'b:c:*'],
    ['a:b:c', 'c'],
    ['a:b:c', 'b'],
    ['a:b:c', 'a:b:c:d'],
  ];

  it('keyMatch works as expected', () => {
    const eventBus: NgEventBus = new NgEventBus();

    matchPairs.forEach((pair) => {
      const cast = pair[0];
      const wild = pair[1];
      expect(eventBus.keyMatch(cast, wild)).toEqual(true);
    });

    dontMatchPairs.forEach((pair) => {
      const cast = pair[0];
      const wild = pair[1];
      expect(eventBus.keyMatch(cast, wild)).toEqual(false);
    });
  });

  it('Submit to wildcard', () => {
    const eventBus: NgEventBus = new NgEventBus();
    const values: any = {};

    matchPairs.forEach((pair: Array<string>) => {
      const cast = pair[0];
      const wild = pair[1];
      values[cast] = uuid();

      eventBus.cast(cast, values[cast]);
      eventBus.on(wild).subscribe((receivedValue: MetaData) => {
        expect(receivedValue.data).toEqual(values[cast]);
      });
    });
  });

  it('Cast invalid', () => {
    const eventBus: NgEventBus = new NgEventBus();
    const key = '';

    expect(() => eventBus.cast(key)).toThrowError('key parameter must be a string and must not be empty');
  });
});
