/**
 * Interface of the messages sent through the events bus.
 *
 * @since 1.0.5
 * @version 1.0.5
 */
export interface IEventBusMessage {
    /**
     * Key to identify message.
     */
    key: string;
    /**
     * Data associated to message.
     */
    data?: any;
}
