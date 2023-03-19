import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

/* tslint:disable:variable-name */
/**
 * Metadata of the messages sent through the events bus.
 *
 * @author Cristiam Mercado
 * @since 2.0.0
 * @version 5.2.0
 */
class MetaData {
    /**
     * Constructor for this class.
     *
     * @param key Original key associated to the message sent through the events bus.
     * @param [data] Optional: Additional data sent with the message.
     */
    constructor(key, data) {
        this._id = this.uuid();
        this._key = key;
        this._data = data;
        this._timestamp = new Date().getTime();
    }
    /**
     * Gets unique identifier of the message sent through the events bus.
     */
    get id() {
        return this._id;
    }
    /**
     * Original key associated to the message.
     */
    get key() {
        return this._key;
    }
    /**
     * Data associated to message. It's optional.
     */
    get data() {
        return this._data;
    }
    /**
     * Gets the time in milliseconds in which the message was generated.
     */
    get timestamp() {
        return this._timestamp;
    }
    /**
     * Generates UUID version 4. The solution above uses Math.random() for brevity, however Math.random() is not
     * guaranteed to be a high-quality RNG.
     *
     * @return UUID version 4.
     */
    uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = (Math.random() * 16) | 0;
            const v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
}

/**
 * Main library class.
 *
 * @author Cristiam Mercado
 * @since 2.0.0
 * @version 5.2.0
 */
class NgEventBus {
    /**
     * Constructor for this class: Initializes event bus.
     */
    constructor() {
        /**
         * Key message separator.
         */
        this.separator = ':';
        this.eventBus = new Subject();
    }
    /**
     * Validates key matching.
     *
     * @param key Key to identify the message/event.
     * @param wildcard Wildcard received from on method.
     *
     * @return true if key matches, false otherwise.
     */
    keyMatch(key, wildcard) {
        const w = '*';
        const ww = '**';
        const partMatch = (wl, k) => {
            return wl === w || wl === k;
        };
        const sep = this.separator;
        const kArr = key.split(sep);
        const wArr = wildcard.split(sep);
        const kLen = kArr.length;
        const wLen = wArr.length;
        const max = Math.max(kLen, wLen);
        for (let i = 0; i < max; i++) {
            const cK = kArr[i];
            const cW = wArr[i];
            if (cW === ww && typeof cK !== 'undefined') {
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
     * @param  key Key to identify the message/event.
     * @param  [data] Optional: Additional data sent with the message/event.
     * @throws {Error} key parameter must be a string and must not be empty.
     */
    cast(key, data) {
        if (!key.trim().length) {
            throw new Error('key parameter must be a string and must not be empty');
        }
        const metadata = new MetaData(key, data);
        this.eventBus.next({ key, metadata });
    }
    /**
     * Returns an observable you can subscribe to listen messages/events.
     *
     * @param key Key to identify the message/event.
     *
     * @return Observable you can subscribe to listen messages/events.
     */
    on(key) {
        return this.eventBus.asObservable().pipe(filter((event) => this.keyMatch(event.key, key)), map((event) => event.metadata));
    }
}

/*
 * Public API Surface of ng-event-bus
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MetaData, NgEventBus };
//# sourceMappingURL=ng-event-bus.mjs.map
