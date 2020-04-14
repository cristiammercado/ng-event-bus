/**
 * Interface of the messages sent through the events bus.
 *
 * @author Cristiam Mercado
 * @since 1.0.5
 * @version 1.1.1
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
