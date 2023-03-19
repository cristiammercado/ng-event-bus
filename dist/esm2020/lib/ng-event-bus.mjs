import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { MetaData } from './meta-data';
/**
 * Main library class.
 *
 * @author Cristiam Mercado
 * @since 2.0.0
 * @version 5.2.0
 */
export class NgEventBus {
    /**
     * Constructor for this class: Initializes event bus.
     */
    constructor() {
        /**
         * Key message separator.
         */
        this.separator = ':';
        this.eventBus = new Subject();
    }
    /**
     * Validates key matching.
     *
     * @param key Key to identify the message/event.
     * @param wildcard Wildcard received from on method.
     *
     * @return true if key matches, false otherwise.
     */
    keyMatch(key, wildcard) {
        const w = '*';
        const ww = '**';
        const partMatch = (wl, k) => {
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
     * Publish a message/event to event bus.
     *
     * @param  key Key to identify the message/event.
     * @param  [data] Optional: Additional data sent with the message/event.
     * @throws {Error} key parameter must be a string and must not be empty.
     */
    cast(key, data) {
        if (!key.trim().length) {
            throw new Error('key parameter must be a string and must not be empty');
        }
        const metadata = new MetaData(key, data);
        this.eventBus.next({ key, metadata });
    }
    /**
     * Returns an observable you can subscribe to listen messages/events.
     *
     * @param key Key to identify the message/event.
     *
     * @return Observable you can subscribe to listen messages/events.
     */
    on(key) {
        return this.eventBus.asObservable().pipe(filter((event) => this.keyMatch(event.key, key)), map((event) => event.metadata));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZXZlbnQtYnVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9uZy1ldmVudC1idXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFdkM7Ozs7OztHQU1HO0FBQ0gsTUFBTSxPQUFPLFVBQVU7SUFXckI7O09BRUc7SUFDSDtRQVJBOztXQUVHO1FBQ0ssY0FBUyxHQUFHLEdBQUcsQ0FBQztRQU10QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxFQUFvQixDQUFDO0lBQ2xELENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksUUFBUSxDQUFDLEdBQVcsRUFBRSxRQUFnQjtRQUMzQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDZCxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFFaEIsTUFBTSxTQUFTLEdBQUcsQ0FBQyxFQUFVLEVBQUUsQ0FBUyxFQUFXLEVBQUU7WUFDbkQsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDO1FBRUYsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMzQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFakMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN6QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3pCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWpDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVuQixJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksT0FBTyxFQUFFLEtBQUssV0FBVyxFQUFFO2dCQUMxQyxPQUFPLElBQUksQ0FBQzthQUNiO1lBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQ3RCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLElBQUksQ0FBSSxHQUFXLEVBQUUsSUFBUTtRQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7U0FDekU7UUFFRCxNQUFNLFFBQVEsR0FBZ0IsSUFBSSxRQUFRLENBQUksR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLEVBQUUsQ0FBSSxHQUFXO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ3RDLE1BQU0sQ0FBQyxDQUFDLEtBQXVCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUNsRSxHQUFHLENBQUMsQ0FBQyxLQUF1QixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQ2pELENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgSUV2ZW50QnVzTWVzc2FnZSB9IGZyb20gJy4vaS1ldmVudC1idXMtbWVzc2FnZSc7XG5pbXBvcnQgeyBNZXRhRGF0YSB9IGZyb20gJy4vbWV0YS1kYXRhJztcblxuLyoqXG4gKiBNYWluIGxpYnJhcnkgY2xhc3MuXG4gKlxuICogQGF1dGhvciBDcmlzdGlhbSBNZXJjYWRvXG4gKiBAc2luY2UgMi4wLjBcbiAqIEB2ZXJzaW9uIDUuMi4wXG4gKi9cbmV4cG9ydCBjbGFzcyBOZ0V2ZW50QnVzIHtcbiAgLyoqXG4gICAqIE1haW4gb2JzZXJ2YWJsZSB0byBtdWx0aWNhc3QgdG8gYWxsIG9ic2VydmVycy5cbiAgICovXG4gIHByaXZhdGUgZXZlbnRCdXM6IFN1YmplY3Q8SUV2ZW50QnVzTWVzc2FnZT47XG5cbiAgLyoqXG4gICAqIEtleSBtZXNzYWdlIHNlcGFyYXRvci5cbiAgICovXG4gIHByaXZhdGUgc2VwYXJhdG9yID0gJzonO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgdGhpcyBjbGFzczogSW5pdGlhbGl6ZXMgZXZlbnQgYnVzLlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ldmVudEJ1cyA9IG5ldyBTdWJqZWN0PElFdmVudEJ1c01lc3NhZ2U+KCk7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGtleSBtYXRjaGluZy5cbiAgICpcbiAgICogQHBhcmFtIGtleSBLZXkgdG8gaWRlbnRpZnkgdGhlIG1lc3NhZ2UvZXZlbnQuXG4gICAqIEBwYXJhbSB3aWxkY2FyZCBXaWxkY2FyZCByZWNlaXZlZCBmcm9tIG9uIG1ldGhvZC5cbiAgICpcbiAgICogQHJldHVybiB0cnVlIGlmIGtleSBtYXRjaGVzLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqL1xuICBwdWJsaWMga2V5TWF0Y2goa2V5OiBzdHJpbmcsIHdpbGRjYXJkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCB3ID0gJyonO1xuICAgIGNvbnN0IHd3ID0gJyoqJztcblxuICAgIGNvbnN0IHBhcnRNYXRjaCA9ICh3bDogc3RyaW5nLCBrOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgICAgIHJldHVybiB3bCA9PT0gdyB8fCB3bCA9PT0gaztcbiAgICB9O1xuXG4gICAgY29uc3Qgc2VwID0gdGhpcy5zZXBhcmF0b3I7XG4gICAgY29uc3Qga0FyciA9IGtleS5zcGxpdChzZXApO1xuICAgIGNvbnN0IHdBcnIgPSB3aWxkY2FyZC5zcGxpdChzZXApO1xuXG4gICAgY29uc3Qga0xlbiA9IGtBcnIubGVuZ3RoO1xuICAgIGNvbnN0IHdMZW4gPSB3QXJyLmxlbmd0aDtcbiAgICBjb25zdCBtYXggPSBNYXRoLm1heChrTGVuLCB3TGVuKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgIGNvbnN0IGNLID0ga0FycltpXTtcbiAgICAgIGNvbnN0IGNXID0gd0FycltpXTtcblxuICAgICAgaWYgKGNXID09PSB3dyAmJiB0eXBlb2YgY0sgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXBhcnRNYXRjaChjVywgY0spKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaXNoIGEgbWVzc2FnZS9ldmVudCB0byBldmVudCBidXMuXG4gICAqXG4gICAqIEBwYXJhbSAga2V5IEtleSB0byBpZGVudGlmeSB0aGUgbWVzc2FnZS9ldmVudC5cbiAgICogQHBhcmFtICBbZGF0YV0gT3B0aW9uYWw6IEFkZGl0aW9uYWwgZGF0YSBzZW50IHdpdGggdGhlIG1lc3NhZ2UvZXZlbnQuXG4gICAqIEB0aHJvd3Mge0Vycm9yfSBrZXkgcGFyYW1ldGVyIG11c3QgYmUgYSBzdHJpbmcgYW5kIG11c3Qgbm90IGJlIGVtcHR5LlxuICAgKi9cbiAgcHVibGljIGNhc3Q8VD4oa2V5OiBzdHJpbmcsIGRhdGE/OiBUKTogdm9pZCB7XG4gICAgaWYgKCFrZXkudHJpbSgpLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdrZXkgcGFyYW1ldGVyIG11c3QgYmUgYSBzdHJpbmcgYW5kIG11c3Qgbm90IGJlIGVtcHR5Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgbWV0YWRhdGE6IE1ldGFEYXRhPFQ+ID0gbmV3IE1ldGFEYXRhPFQ+KGtleSwgZGF0YSk7XG5cbiAgICB0aGlzLmV2ZW50QnVzLm5leHQoeyBrZXksIG1ldGFkYXRhIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSB5b3UgY2FuIHN1YnNjcmliZSB0byBsaXN0ZW4gbWVzc2FnZXMvZXZlbnRzLlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IEtleSB0byBpZGVudGlmeSB0aGUgbWVzc2FnZS9ldmVudC5cbiAgICpcbiAgICogQHJldHVybiBPYnNlcnZhYmxlIHlvdSBjYW4gc3Vic2NyaWJlIHRvIGxpc3RlbiBtZXNzYWdlcy9ldmVudHMuXG4gICAqL1xuICBwdWJsaWMgb248VD4oa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPE1ldGFEYXRhPFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRCdXMuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIGZpbHRlcigoZXZlbnQ6IElFdmVudEJ1c01lc3NhZ2UpID0+IHRoaXMua2V5TWF0Y2goZXZlbnQua2V5LCBrZXkpKSxcbiAgICAgIG1hcCgoZXZlbnQ6IElFdmVudEJ1c01lc3NhZ2UpID0+IGV2ZW50Lm1ldGFkYXRhKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==