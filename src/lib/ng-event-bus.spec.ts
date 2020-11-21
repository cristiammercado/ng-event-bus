import { NgEventBus } from './ng-event-bus';
import { Utils } from './utils';
import { MetaData } from './meta-data';

const generateMessages = () => {
  return {
    ch1: Utils.uuid(),
    ch2: Utils.uuid(),
    ch3: Utils.uuid(),
    ch4: Utils.uuid(),
    ch5: Utils.uuid(),
    ch6: Utils.uuid(),
    ch7: Utils.uuid(),
    ch8: Utils.uuid(),
    ch9: Utils.uuid(),
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
      values[cast] = Utils.uuid();

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
