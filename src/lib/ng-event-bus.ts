import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { IEventBusMessage } from './i-event-bus-message';
import { MetaData } from './meta-data';

/**
 * Main library class.
 *
 * @author Cristiam Mercado
 * @since 2.0.0
 * @version 5.1.0
 */
export class NgEventBus {
  /**
   * Main observable to multicast to all observers.
   */
  private eventBus: Subject<IEventBusMessage>;
  
  /**
   * Map of cached data.
   */
  private values: Map<string, any>;

  /**
   * Key message separator.
   */
  private separator = ':';

  /**
   * Constructor for this class: Initializes event bus.
   */
  constructor() {
    this.eventBus = new Subject<IEventBusMessage>();
    this.values = new Map<string, any>();
  }

  /**
   * Validates key matching.
   *
   * @param  key Key to identify the message/event.
   * @param wildcard Wildcard received from on method.
   *
   * @return true if key matches, false otherwise.
   */
  public keyMatch(key: string, wildcard: string): boolean {
    const w = '*';
    const ww = '**';

    const partMatch = (wl: string, k: string): boolean => {
      return wl === w || wl === k;
    };

    const sep = this.separator;
    const kArr = key.split(sep);
    const wArr = wildcard.split(sep);

    const kLen = kArr.length;
    const wLen = wArr.length;
    const max = Math.max(kLen, wLen);

    for (let i = 0; i < max; i++) {
      const cK = kArr[i];
      const cW = wArr[i];

      if (cW === ww && typeof cK !== 'undefined') {
        return true;
      }

      if (!partMatch(cW, cK)) {
        return false;
      }
    }

    return true;
  }

  /**
   * function to run after observable is subscribe to
   */
  private after_on(key: string) {
    this.values.forEach((data, k) => {
      if (this.keyMatch(k, key)) {
        const metadata: MetaData = new MetaData(k, data);
        this.eventBus.next({ key, data, metadata });
      }
    });
  }

  /**
   * Get cached data by key.
   *
   * @param  key Key to identify the message/event.
   */
  public getValue(key: string) {
    if (this.values.has(key)) return this.values.get(key);
  }

  /**
   * Publish a message/event to event bus.
   *
   * @param  key Key to identify the message/event.
   * @param  [data] Optional: Additional data sent with the message/event.
   * @param  boolean Optional: If true the date will be cached.
   * @throws {Error} key parameter must be a string and must not be empty.
   */
  public cast(key: string, data?: any, cache: boolean = false): void {
    if (!key.trim().length) {
      throw new Error('key parameter must be a string and must not be empty');
    }

    if (cache) {
      this.values.set(key, data);
    }

    const metadata: MetaData = new MetaData(key, data);

    this.eventBus.next({ key, data, metadata });
  }

  /**
   * Returns an observable you can subscribe to listen messages/events.
   *
   * @param key Key to identify the message/event.
   *
   * @return Observable you can subscribe to listen messages/events.
   */
  public on<T>(key: string): Observable<MetaData> {
    setTimeout(() => this.after_on(key), 0, key);

    return this.eventBus.asObservable().pipe(
      filter((event: IEventBusMessage) => this.keyMatch(event.key, key)),
      map((event: IEventBusMessage) => event.metadata)
    );
  }
}
