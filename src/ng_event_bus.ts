import {Observable, Subject} from 'rxjs';
import {filter, map} from 'rxjs/operators';

interface EventBusMessage {
    key: string;
    data?: any;
}

/**
 * Main library class.
 *
 * @since 0.0.1
 * @version 1.0.3
 */
export class NgEventBus {

    private _eventBus: Subject<EventBusMessage>;
    private separator = ':';

    /**
     * Constructor for this class: Initializes event bus.
     */
    constructor() {
        this._eventBus = new Subject<EventBusMessage>();
    }

    /**
     * Validates key matching.
     *
     * @param {string} key Key to identify the message/event.
     * @param {string} wildcard Wilcard received from on method.
     */
    public keyMatch(key: string, wildcard: string) {

        let w = '*';
        let ww = '**';

        let partMatch = (wl, k) => {
            return (wl === w) || (wl === k);
        };

        let sep = this.separator;
        let kArr = key.split(sep);
        let wArr = wildcard.split(sep);

        let kLen = kArr.length;
        let wLen = wArr.length;
        let max = Math.max(kLen, wLen);

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
     */
    public cast(key: string, data?: any) {

        if (typeof key !== 'string' || !key.length) {
            throw 'key must be a string and mustn\'t be empty.';
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
