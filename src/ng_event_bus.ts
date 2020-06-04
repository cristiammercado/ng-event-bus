import {Observable, Subject} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {IEventBusMessage} from './event_bus_message';

/**
 * Main library class.
 *
 * @author Cristiam Mercado
 * @since 0.0.1
 * @version 1.1.1
 */
export class NgEventBus {

    /**
     * Main observable to multicast to all observers.
     */
    private _eventBus: Subject<IEventBusMessage>;

    /**
     * Key message separator.
     */
    private separator = ':';

    /**
     * Constructor for this class: Initializes event bus.
     */
    constructor() {
        this._eventBus = new Subject<IEventBusMessage>();
    }

    /**
     * Validates key matching.
     *
     * @param {string} key Key to identify the message/event.
     * @param {string} wildcard Wildcard received from on method.
     */
    public keyMatch(key: string, wildcard: string) {

        const w = '*';
        const ww = '**';

        let partMatch = (wl, k) => {
            return (wl === w) || (wl === k);
        };

        const sep = this.separator;
        const kArr = key.split(sep);
        const wArr = wildcard.split(sep);

        const kLen = kArr.length;
        const wLen = wArr.length;
        const max = Math.max(kLen, wLen);

        for (let i = 0; i < max; i++) {
            let cK = kArr[i];
            let cW = wArr[i];

            if (cW === ww && (typeof cK !== 'undefined')) {
                return true;
            }

            if (!partMatch(cW, cK)) {
                return false;
            }
        }

        return true;
    }

    /**
     * Publish a message/event to event bus.
     *
     * @param {string} key Key to identify the message/event.
     * @param {any} [data] Optional: Additional data sent with the message/event.
     * @throws {Error} Argument key must be a string and must not be empty.
     */
    public cast(key: string, data?: any) {

        if (typeof key !== 'string' || !key.length) {
            throw new Error('key must be a string and must not be empty');
        }

        this._eventBus.next({key, data});
    }

    /**
     * Returns an observable you can subscribe to listen messages/events.
     *
     * @param {string} key Key to identify the message/event.
     */
    public on<T>(key: string): Observable<T> {

        return this._eventBus.asObservable().pipe(
            filter((event) => {
                return this.keyMatch(event.key, key);
            }),
            map(event => <T>event.data)
        );
    }
}
