import { Observable } from 'rxjs';
import { MetaData } from './meta-data';
/**
 * Main library class.
 *
 * @author Cristiam Mercado
 * @since 2.0.0
 * @version 2.0.0
 */
export declare class NgEventBus {
    /**
     * Main observable to multicast to all observers.
     */
    private eventBus;
    /**
     * Key message separator.
     */
    private separator;
    /**
     * Constructor for this class: Initializes event bus.
     */
    constructor();
    /**
     * Validates key matching.
     *
     * @param  key Key to identify the message/event.
     * @param wildcard Wildcard received from on method.
     *
     * @return true if key matches, false otherwise.
     */
    keyMatch(key: string, wildcard: string): boolean;
    /**
     * Publish a message/event to event bus.
     *
     * @param  key Key to identify the message/event.
     * @param  [data] Optional: Additional data sent with the message/event.
     * @throws {Error} key parameter must be a string and must not be empty.
     */
    cast(key: string, data?: any): void;
    /**
     * Returns an observable you can subscribe to listen messages/events.
     *
     * @param key Key to identify the message/event.
     *
     * @return Observable you can subscribe to listen messages/events.
     */
    on<T>(key: string): Observable<MetaData>;
}
