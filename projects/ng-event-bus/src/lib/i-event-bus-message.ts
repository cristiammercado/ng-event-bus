import { MetaData } from './meta-data';

/**
 * Interface of the messages sent through the events bus.
 *
 * @typeParam T Message payload type.
 * @author Cristiam Mercado
 * @since 2.0.0
 * @version 11.0.0
 */
export interface IEventBusMessage<T = unknown> {
  /**
   * Key to identify a message.
   */
  key: string;

  /**
   * Full message metadata with its payload type preserved.
   */
  metadata: MetaData<T>;
}
