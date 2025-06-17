import { Observable } from 'rxjs';

/**
 * Metadata of the messages sent through the events bus.
 *
 * @author Cristiam Mercado
 * @since 2.0.0
 * @version 9.0.0
 */
declare class MetaData<T = any> {
    /**
     * A unique identifier of the message sent through the events bus.
     * @private
     */
    private readonly _id;
    /**
     * Original key associated to the message.
     * @private
     */
    private readonly _key;
    /**
     * Data associated to message. It's optional.
     * @private
     */
    private readonly _data?;
    /**
     * Time in milliseconds in which the message was generated.
     * @private
     */
    private readonly _timestamp;
    /**
     * Constructor for this class.
     *
     * @param key Original key associated to the message sent through the events bus.
     * @param [data] Optional: Additional data sent with the message.
     */
    constructor(key: string, data?: T);
    /**
     * Gets unique identifier of the message sent through the events bus.
     */
    get id(): string;
    /**
     * Original key associated to the message.
     */
    get key(): string;
    /**
     * Data associated to message. It's optional.
     */
    get data(): T | undefined;
    /**
     * Gets the time in milliseconds in which the message was generated.
     */
    get timestamp(): number;
    /**
     * Generates UUID version 4. The solution above uses Math.random() for brevity, however, Math.random() is not
     * guaranteed to be a high-quality RNG.
     *
     * @return UUID version 4.
     */
    private uuid;
}

/**
 * Main library class.
 *
 * @author Cristiam Mercado
 * @since 2.0.0
 * @version 9.0.0
 */
declare class NgEventBus {
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
     * @param key Key to identify the message/event.
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
    cast<T>(key: string, data?: T): void;
    /**
     * Returns an observable you can subscribe to listen messages/events.
     *
     * @param key Key to identify the message/event.
     *
     * @return Observable you can subscribe to listen messages/events.
     */
    on<T>(key: string): Observable<MetaData<T>>;
}

/**
 * Interface of the messages sent through the events bus.
 *
 * @author Cristiam Mercado
 * @since 2.0.0
 * @version 9.0.0
 */
interface IEventBusMessage {
    /**
     * Key to identify a message.
     */
    key: string;
    /**
     * Full message metadata.
     */
    metadata: MetaData;
}

export { MetaData, NgEventBus };
export type { IEventBusMessage };
