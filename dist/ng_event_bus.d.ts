import { Observable } from 'rxjs';
/**
 * Main library class.
 *
 * @since 0.0.1
 * @version 1.0.4
 */
export declare class NgEventBus {
    private _eventBus;
    private separator;
    /**
     * Constructor for this class: Initializes event bus.
     */
    constructor();
    /**
     * Validates key matching.
     *
     * @param {string} key Key to identify the message/event.
     * @param {string} wildcard Wilcard received from on method.
     */
    keyMatch(key: string, wildcard: string): boolean;
    /**
     * Publish a message/event to event bus.
     *
     * @param {string} key Key to identify the message/event.
     * @param {any} [data] Optional: Additional data sent with the message/event.
     */
    cast(key: string, data?: any): void;
    /**
     * Returns an observable you can subscribe to listen messages/events.
     *
     * @param {string} key Key to identify the message/event.
     */
    on<T>(key: string): Observable<T>;
}
