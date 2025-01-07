import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { IEventBusMessage } from './i-event-bus-message';
import { MetaData } from './meta-data';

/**
 * Main library class.
 *
 * @author Cristiam Mercado
 * @since 2.0.0
 * @version 8.0.0
 */
export class NgEventBus {
  /**
   * Main observable to multicast to all observers.
   */
  private eventBus: Subject<IEventBusMessage>;

  /**
   * Key message separator.
   */
  private separator: string = ':';

  /**
   * Constructor for this class: Initializes event bus.
   */
  constructor() {
    this.eventBus = new Subject<IEventBusMessage>();
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
   * @param  [data] Optional: Additional data sent with the message/event.
   * @throws {Error} key parameter must be a string and must not be empty.
   */
  public cast<T>(key: string, data?: T): void {
    if (!key.trim().length) throw new Error('key parameter must be a string and must not be empty');

    const metadata: MetaData<T> = new MetaData<T>(key, data);

    this.eventBus.next({ key, metadata });
  }

  /**
   * Returns an observable you can subscribe to listen messages/events.
   *
   * @param key Key to identify the message/event.
   *
   * @return Observable you can subscribe to listen messages/events.
   */
  public on<T>(key: string): Observable<MetaData<T>> {
    return this.eventBus.asObservable().pipe(
      filter((event: IEventBusMessage): boolean => this.keyMatch(event.key, key)),
      map((event: IEventBusMessage): MetaData<T> => event.metadata)
    );
  }
}
