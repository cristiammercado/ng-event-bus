import { MetaData } from './meta-data';

/**
 * Interface of the messages sent through the events bus.
 *
 * @author Cristiam Mercado
 * @since 2.0.0
 * @version 9.0.0
 */
export interface IEventBusMessage {
  /**
   * Key to identify a message.
   */
  key: string;

  /**
   * Full message metadata.
   */
  metadata: MetaData;
}
