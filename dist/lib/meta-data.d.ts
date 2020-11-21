/**
 * Metadata of the messages sent through the events bus.
 *
 * @author Cristiam Mercado
 * @since 2.0.0
 * @version 2.0.0
 */
export declare class MetaData {
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
    private readonly _data;
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
    constructor(key: string, data?: any);
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
    get data(): any;
    /**
     * Gets the time in milliseconds in which the message was generated.
     */
    get timestamp(): number;
}
