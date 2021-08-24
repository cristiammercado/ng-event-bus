import { MetaData } from './meta-data';
/**
 * Interface of the messages sent through the events bus.
 *
 * @author Cristiam Mercado
 * @since 2.0.0
 * @version 2.0.0
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
    /**
     * Full message metadata.
     */
    metadata: MetaData;
}
