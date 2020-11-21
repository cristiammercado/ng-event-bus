/* tslint:disable:variable-name */
import { Utils } from './utils';

/**
 * Metadata of the messages sent through the events bus.
 *
 * @author Cristiam Mercado
 * @since 2.0.0
 * @version 2.0.0
 */
export class MetaData {

  /**
   * A unique identifier of the message sent through the events bus.
   * @private
   */
  private readonly _id: string;

  /**
   * Original key associated to the message.
   * @private
   */
  private readonly _key: string;

  /**
   * Data associated to message. It's optional.
   * @private
   */
  private readonly _data: any;

  /**
   * Time in milliseconds in which the message was generated.
   * @private
   */
  private readonly _timestamp: number;

  /**
   * Constructor for this class.
   *
   * @param key Original key associated to the message sent through the events bus.
   * @param [data] Optional: Additional data sent with the message.
   */
  constructor(key: string, data?: any) {
    this._id = Utils.uuid();
    this._key = key;
    this._data = data;
    this._timestamp = new Date().getTime();
  }

  /**
   * Gets unique identifier of the message sent through the events bus.
   */
  public get id(): string {
    return this._id;
  }

  /**
   * Original key associated to the message.
   */
  public get key(): string {
    return this._key;
  }

  /**
   * Data associated to message. It's optional.
   */
  public get data(): any {
    return this._data;
  }

  /**
   * Gets the time in milliseconds in which the message was generated.
   */
  public get timestamp(): number {
    return this._timestamp;
  }

}
