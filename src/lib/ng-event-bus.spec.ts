import { NgEventBus } from './ng-event-bus';

const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: string) => {
    // tslint:disable-next-line:no-bitwise
    const r = (Math.random() * 16) | 0;
    // tslint:disable-next-line:no-bitwise
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

describe('ng-event-bus works as expected', () => {
  it('should create an instance', () => {
    expect(new NgEventBus()).toBeTruthy();
  });

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

  it('Submit to channel', () => {
    const eventBus: NgEventBus = new NgEventBus();
    const channelMessages: any = generateMessages();

    // subscribe to message
    Object.keys(channelMessages).forEach((channel) => {
      eventBus.on(channel).subscribe((data: any) => {
        expect(data).toEqual(channelMessages[channel]);
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
      let cast = pair[0];
      let wild = pair[1];
      expect(eventBus.keyMatch(cast, wild)).toEqual(true);
    });

    dontMatchPairs.forEach((pair) => {
      let cast = pair[0];
      let wild = pair[1];
      expect(eventBus.keyMatch(cast, wild)).toEqual(false);
    });
  });

  it('Submit to wildcard', () => {
    const eventBus: NgEventBus = new NgEventBus();
    const values: any = {};

    matchPairs.forEach((pair) => {
      let cast = pair[0];
      let wild = pair[1];
      values[cast] = uuid();

      eventBus.cast(cast, values[cast]);
      eventBus.on(wild).subscribe((receivedValue: any) => {
        expect(receivedValue).toEqual(values[cast]);
      });
    });
  });

  it('Cast invalid', () => {
    const eventBus: NgEventBus = new NgEventBus();
    let key = '';

    expect(() => eventBus.cast(key)).toThrowError('key parameter must be a string and must not be empty');
  });
});
