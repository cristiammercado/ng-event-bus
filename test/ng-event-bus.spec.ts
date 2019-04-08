import {v4 as uuid} from 'uuid';
import {NgEventBus} from '../src/ng_event_bus';

describe('NgEventBus works as expected', () => {

    const generateMessages = () => {
        return {
            ch1: uuid.v4(),
            ch2: uuid.v4(),
            ch3: uuid.v4(),
            ch4: uuid.v4(),
            ch5: uuid.v4(),
            ch6: uuid.v4(),
            ch7: uuid.v4(),
            ch8: uuid.v4(),
            ch9: uuid.v4(),
        };
    };

    it('Submit to channel', () => {

        let radio = new NgEventBus();
        let channelMessages = generateMessages();

        //subscribe to message
        Object.keys(channelMessages).forEach((channel) => {
            radio.on(channel).subscribe((data) => {
                expect(data).toEqual(channelMessages[channel]);
            });
        });


        //cast something
        Object.keys(channelMessages).forEach((channel) => {
            radio.cast(channel, channelMessages[channel]);
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

        let radio = new NgEventBus();

        matchPairs.forEach((pair) => {
            let cast = pair[0];
            let wild = pair[1];
            expect(radio.keyMatch(cast, wild)).toEqual(true);
        });

        dontMatchPairs.forEach((pair) => {
            let cast = pair[0];
            let wild = pair[1];
            expect(radio.keyMatch(cast, wild)).toEqual(false);
        });
    });

    it('Submit to wildcard', () => {
        let radio = new NgEventBus();
        let values = {};

        matchPairs.forEach((pair) => {
            let cast = pair[0];
            let wild = pair[1];
            values[cast] = uuid.v4();

            radio.cast(cast, values[cast]);
            radio.on(wild).subscribe((receivedValue) => {
                expect(receivedValue).toEqual(values[cast]);
            });
        });
    });

});
