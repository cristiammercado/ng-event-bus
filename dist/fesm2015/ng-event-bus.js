import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

/**
 * Main library class.
 *
 * @author Cristiam Mercado
 * @since 2.0.0
 * @version 2.0.0
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
     * @param  key Key to identify the message/event.
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
        if (!key.length) {
            throw new Error('key parameter must be a string and must not be empty');
        }
        this.eventBus.next({ key, data });
    }
    /**
     * Returns an observable you can subscribe to listen messages/events.
     *
     * @param key Key to identify the message/event.
     *
     * @return Observable you can subscribe to listen messages/events.
     */
    on(key) {
        return this.eventBus.asObservable().pipe(filter((event) => this.keyMatch(event.key, key)), map((event) => event.data));
    }
}

/*
 * Public API Surface of ng-event-bus
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgEventBus };
//# sourceMappingURL=ng-event-bus.js.map
