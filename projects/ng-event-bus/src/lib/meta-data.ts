/* tslint:disable:variable-name */

/**
 * Metadata of the messages sent through the events bus.
 *
 * @typeParam T Payload type. Defaults to `undefined` when no payload is declared.
 * @author Cristiam Mercado
 * @since 2.0.0
 * @version 11.0.0
 */
export class MetaData<T = undefined> {
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
   * Payload associated with the message.
   * @private
   */
  private readonly _data: T;

  /**
   * Time in milliseconds in which the message was generated.
   * @private
   */
  private readonly _timestamp: number;

  /**
   * Constructor for this class.
   *
   * @param key Original key associated to the message sent through the events bus.
   * @param [data] Optional payload sent with the message. Its type is preserved as `T`.
   */
  constructor(key: string, data?: T) {
    this._id = this.uuid();
    this._key = key;
    this._data = data as T;
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
   * Gets the payload associated with the message.
   */
  public get data(): T {
    return this._data;
  }

  /**
   * Gets the time in milliseconds in which the message was generated.
   */
  public get timestamp(): number {
    return this._timestamp;
  }

  /**
   * Generates UUID version 4. The solution above uses Math.random() for brevity, however, Math.random() is not
   * guaranteed to be a high-quality RNG.
   *
   * @return UUID version 4.
   */
  private uuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: string): string => {
      const r: number = (Math.random() * 16) | 0;
      const v: number = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
