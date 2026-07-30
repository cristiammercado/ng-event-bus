import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { MetaData } from './meta-data';
import { IEventBusMessage } from './i-event-bus-message';

/**
 * Main library class.
 *
 * @author Cristiam Mercado
 * @since 2.0.0
 * @version 11.0.0
 */
export class NgEventBus {
  /**
   * Main observable to multicast to all observers.
   */
  private eventBus: Subject<IEventBusMessage<unknown>>;

  /**
   * Key message separator.
   */
  private separator: string = ':';

  /**
   * Constructor for this class: Initializes event bus.
   */
  constructor() {
    this.eventBus = new Subject<IEventBusMessage<unknown>>();
  }

  /**
   * Validates key matching.
   *
   * @param key Key to identify the message/event.
   * @param wildcard Wildcard received from on method.
   *
   * @return true if key matches, false otherwise.
   */
  public keyMatch(key: string, wildcard: string): boolean {
    const w: string = '*';
    const ww: string = '**';

    const partMatch = (wl: string, k: string): boolean => wl === w || wl === k;

    const sep: string = this.separator;
    const kArr: string[] = key.split(sep);
    const wArr: string[] = wildcard.split(sep);

    const kLen: number = kArr.length;
    const wLen: number = wArr.length;
    const max: number = Math.max(kLen, wLen);

    for (let i: number = 0; i < max; i++) {
      const cK: string = kArr[i];
      const cW: string = wArr[i];

      if (cW === ww && typeof cK !== 'undefined') return true;

      if (!partMatch(cW, cK)) return false;
    }

    return true;
  }

  /**
   * Publish a message/event to event bus.
   *
   * @param  key Key to identify the message/event.
   * @param [data] Optional payload sent with the message/event.
   * @throws {Error} key parameter must be a string and must not be empty.
   */
  public cast(key: string): void;
  public cast<T>(key: string, data: T): void;
  public cast<T = undefined>(key: string, data?: T): void {
    if (!key.trim().length) throw new Error('key parameter must be a string and must not be empty');

    const metadata: MetaData<T> = new MetaData<T>(key, data);

    this.eventBus.next({ key, metadata });
  }

  /**
   * Returns an observable you can subscribe to listen messages/events.
   *
   * @typeParam T Expected payload type. Defaults to `undefined` when omitted.
   * @param key Key or wildcard pattern used to identify messages/events.
   *
   * @return Observable you can subscribe to listen messages/events.
   */
  public on<T = undefined>(key: string): Observable<MetaData<T>> {
    return this.eventBus.asObservable().pipe(
      filter((event: IEventBusMessage<unknown>): boolean => this.keyMatch(event.key, key)),
      map((event: IEventBusMessage<unknown>): MetaData<T> => event.metadata as MetaData<T>)
    );
  }
}
