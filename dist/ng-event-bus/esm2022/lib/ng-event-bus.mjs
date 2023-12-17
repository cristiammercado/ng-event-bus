import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { MetaData } from './meta-data';
/**
 * Main library class.
 *
 * @author Cristiam Mercado
 * @since 2.0.0
 * @version 6.0.0
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
        const partMatch = (wl, k) => wl === w || wl === k;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZXZlbnQtYnVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZXZlbnQtYnVzL3NyYy9saWIvbmctZXZlbnQtYnVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXZDOzs7Ozs7R0FNRztBQUNILE1BQU0sT0FBTyxVQUFVO0lBV3JCOztPQUVHO0lBQ0g7UUFSQTs7V0FFRztRQUNLLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFNOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBb0IsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLFFBQVEsQ0FBQyxHQUFXLEVBQUUsUUFBZ0I7UUFDM0MsTUFBTSxDQUFDLEdBQVcsR0FBRyxDQUFDO1FBQ3RCLE1BQU0sRUFBRSxHQUFXLElBQUksQ0FBQztRQUV4QixNQUFNLFNBQVMsR0FBRyxDQUFDLEVBQVUsRUFBRSxDQUFTLEVBQVcsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUUzRSxNQUFNLEdBQUcsR0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ25DLE1BQU0sSUFBSSxHQUFhLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsTUFBTSxJQUFJLEdBQWEsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUzQyxNQUFNLElBQUksR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2pDLE1BQU0sSUFBSSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDakMsTUFBTSxHQUFHLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFekMsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxNQUFNLEVBQUUsR0FBVyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsTUFBTSxFQUFFLEdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTNCLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxPQUFPLEVBQUUsS0FBSyxXQUFXLEVBQUU7Z0JBQzFDLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtnQkFDdEIsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksSUFBSSxDQUFJLEdBQVcsRUFBRSxJQUFRO1FBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQztTQUN6RTtRQUVELE1BQU0sUUFBUSxHQUFnQixJQUFJLFFBQVEsQ0FBSSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksRUFBRSxDQUFJLEdBQVc7UUFDdEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDdEMsTUFBTSxDQUFDLENBQUMsS0FBdUIsRUFBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQzNFLEdBQUcsQ0FBQyxDQUFDLEtBQXVCLEVBQWUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FDOUQsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBJRXZlbnRCdXNNZXNzYWdlIH0gZnJvbSAnLi9pLWV2ZW50LWJ1cy1tZXNzYWdlJztcbmltcG9ydCB7IE1ldGFEYXRhIH0gZnJvbSAnLi9tZXRhLWRhdGEnO1xuXG4vKipcbiAqIE1haW4gbGlicmFyeSBjbGFzcy5cbiAqXG4gKiBAYXV0aG9yIENyaXN0aWFtIE1lcmNhZG9cbiAqIEBzaW5jZSAyLjAuMFxuICogQHZlcnNpb24gNi4wLjBcbiAqL1xuZXhwb3J0IGNsYXNzIE5nRXZlbnRCdXMge1xuICAvKipcbiAgICogTWFpbiBvYnNlcnZhYmxlIHRvIG11bHRpY2FzdCB0byBhbGwgb2JzZXJ2ZXJzLlxuICAgKi9cbiAgcHJpdmF0ZSBldmVudEJ1czogU3ViamVjdDxJRXZlbnRCdXNNZXNzYWdlPjtcblxuICAvKipcbiAgICogS2V5IG1lc3NhZ2Ugc2VwYXJhdG9yLlxuICAgKi9cbiAgcHJpdmF0ZSBzZXBhcmF0b3I6IHN0cmluZyA9ICc6JztcblxuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIHRoaXMgY2xhc3M6IEluaXRpYWxpemVzIGV2ZW50IGJ1cy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZXZlbnRCdXMgPSBuZXcgU3ViamVjdDxJRXZlbnRCdXNNZXNzYWdlPigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBrZXkgbWF0Y2hpbmcuXG4gICAqXG4gICAqIEBwYXJhbSBrZXkgS2V5IHRvIGlkZW50aWZ5IHRoZSBtZXNzYWdlL2V2ZW50LlxuICAgKiBAcGFyYW0gd2lsZGNhcmQgV2lsZGNhcmQgcmVjZWl2ZWQgZnJvbSBvbiBtZXRob2QuXG4gICAqXG4gICAqIEByZXR1cm4gdHJ1ZSBpZiBrZXkgbWF0Y2hlcywgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKi9cbiAgcHVibGljIGtleU1hdGNoKGtleTogc3RyaW5nLCB3aWxkY2FyZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3Qgdzogc3RyaW5nID0gJyonO1xuICAgIGNvbnN0IHd3OiBzdHJpbmcgPSAnKionO1xuXG4gICAgY29uc3QgcGFydE1hdGNoID0gKHdsOiBzdHJpbmcsIGs6IHN0cmluZyk6IGJvb2xlYW4gPT4gd2wgPT09IHcgfHwgd2wgPT09IGs7XG5cbiAgICBjb25zdCBzZXA6IHN0cmluZyA9IHRoaXMuc2VwYXJhdG9yO1xuICAgIGNvbnN0IGtBcnI6IHN0cmluZ1tdID0ga2V5LnNwbGl0KHNlcCk7XG4gICAgY29uc3Qgd0Fycjogc3RyaW5nW10gPSB3aWxkY2FyZC5zcGxpdChzZXApO1xuXG4gICAgY29uc3Qga0xlbjogbnVtYmVyID0ga0Fyci5sZW5ndGg7XG4gICAgY29uc3Qgd0xlbjogbnVtYmVyID0gd0Fyci5sZW5ndGg7XG4gICAgY29uc3QgbWF4OiBudW1iZXIgPSBNYXRoLm1heChrTGVuLCB3TGVuKTtcblxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBtYXg7IGkrKykge1xuICAgICAgY29uc3QgY0s6IHN0cmluZyA9IGtBcnJbaV07XG4gICAgICBjb25zdCBjVzogc3RyaW5nID0gd0FycltpXTtcblxuICAgICAgaWYgKGNXID09PSB3dyAmJiB0eXBlb2YgY0sgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXBhcnRNYXRjaChjVywgY0spKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaXNoIGEgbWVzc2FnZS9ldmVudCB0byBldmVudCBidXMuXG4gICAqXG4gICAqIEBwYXJhbSAga2V5IEtleSB0byBpZGVudGlmeSB0aGUgbWVzc2FnZS9ldmVudC5cbiAgICogQHBhcmFtICBbZGF0YV0gT3B0aW9uYWw6IEFkZGl0aW9uYWwgZGF0YSBzZW50IHdpdGggdGhlIG1lc3NhZ2UvZXZlbnQuXG4gICAqIEB0aHJvd3Mge0Vycm9yfSBrZXkgcGFyYW1ldGVyIG11c3QgYmUgYSBzdHJpbmcgYW5kIG11c3Qgbm90IGJlIGVtcHR5LlxuICAgKi9cbiAgcHVibGljIGNhc3Q8VD4oa2V5OiBzdHJpbmcsIGRhdGE/OiBUKTogdm9pZCB7XG4gICAgaWYgKCFrZXkudHJpbSgpLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdrZXkgcGFyYW1ldGVyIG11c3QgYmUgYSBzdHJpbmcgYW5kIG11c3Qgbm90IGJlIGVtcHR5Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgbWV0YWRhdGE6IE1ldGFEYXRhPFQ+ID0gbmV3IE1ldGFEYXRhPFQ+KGtleSwgZGF0YSk7XG5cbiAgICB0aGlzLmV2ZW50QnVzLm5leHQoeyBrZXksIG1ldGFkYXRhIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSB5b3UgY2FuIHN1YnNjcmliZSB0byBsaXN0ZW4gbWVzc2FnZXMvZXZlbnRzLlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IEtleSB0byBpZGVudGlmeSB0aGUgbWVzc2FnZS9ldmVudC5cbiAgICpcbiAgICogQHJldHVybiBPYnNlcnZhYmxlIHlvdSBjYW4gc3Vic2NyaWJlIHRvIGxpc3RlbiBtZXNzYWdlcy9ldmVudHMuXG4gICAqL1xuICBwdWJsaWMgb248VD4oa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPE1ldGFEYXRhPFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRCdXMuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIGZpbHRlcigoZXZlbnQ6IElFdmVudEJ1c01lc3NhZ2UpOiBib29sZWFuID0+IHRoaXMua2V5TWF0Y2goZXZlbnQua2V5LCBrZXkpKSxcbiAgICAgIG1hcCgoZXZlbnQ6IElFdmVudEJ1c01lc3NhZ2UpOiBNZXRhRGF0YTxUPiA9PiBldmVudC5tZXRhZGF0YSlcbiAgICApO1xuICB9XG59XG4iXX0=