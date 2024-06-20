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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZXZlbnQtYnVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZXZlbnQtYnVzL3NyYy9saWIvbmctZXZlbnQtYnVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXZDOzs7Ozs7R0FNRztBQUNILE1BQU0sT0FBTyxVQUFVO0lBV3JCOztPQUVHO0lBQ0g7UUFSQTs7V0FFRztRQUNLLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFNOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBb0IsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLFFBQVEsQ0FBQyxHQUFXLEVBQUUsUUFBZ0I7UUFDM0MsTUFBTSxDQUFDLEdBQVcsR0FBRyxDQUFDO1FBQ3RCLE1BQU0sRUFBRSxHQUFXLElBQUksQ0FBQztRQUV4QixNQUFNLFNBQVMsR0FBRyxDQUFDLEVBQVUsRUFBRSxDQUFTLEVBQVcsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUUzRSxNQUFNLEdBQUcsR0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ25DLE1BQU0sSUFBSSxHQUFhLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsTUFBTSxJQUFJLEdBQWEsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUzQyxNQUFNLElBQUksR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2pDLE1BQU0sSUFBSSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDakMsTUFBTSxHQUFHLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFekMsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3JDLE1BQU0sRUFBRSxHQUFXLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLEVBQUUsR0FBVyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFM0IsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLE9BQU8sRUFBRSxLQUFLLFdBQVcsRUFBRSxDQUFDO2dCQUMzQyxPQUFPLElBQUksQ0FBQztZQUNkLENBQUM7WUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUN2QixPQUFPLEtBQUssQ0FBQztZQUNmLENBQUM7UUFDSCxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksSUFBSSxDQUFJLEdBQVcsRUFBRSxJQUFRO1FBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO1FBQzFFLENBQUM7UUFFRCxNQUFNLFFBQVEsR0FBZ0IsSUFBSSxRQUFRLENBQUksR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLEVBQUUsQ0FBSSxHQUFXO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ3RDLE1BQU0sQ0FBQyxDQUFDLEtBQXVCLEVBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUMzRSxHQUFHLENBQUMsQ0FBQyxLQUF1QixFQUFlLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQzlELENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgSUV2ZW50QnVzTWVzc2FnZSB9IGZyb20gJy4vaS1ldmVudC1idXMtbWVzc2FnZSc7XG5pbXBvcnQgeyBNZXRhRGF0YSB9IGZyb20gJy4vbWV0YS1kYXRhJztcblxuLyoqXG4gKiBNYWluIGxpYnJhcnkgY2xhc3MuXG4gKlxuICogQGF1dGhvciBDcmlzdGlhbSBNZXJjYWRvXG4gKiBAc2luY2UgMi4wLjBcbiAqIEB2ZXJzaW9uIDYuMC4wXG4gKi9cbmV4cG9ydCBjbGFzcyBOZ0V2ZW50QnVzIHtcbiAgLyoqXG4gICAqIE1haW4gb2JzZXJ2YWJsZSB0byBtdWx0aWNhc3QgdG8gYWxsIG9ic2VydmVycy5cbiAgICovXG4gIHByaXZhdGUgZXZlbnRCdXM6IFN1YmplY3Q8SUV2ZW50QnVzTWVzc2FnZT47XG5cbiAgLyoqXG4gICAqIEtleSBtZXNzYWdlIHNlcGFyYXRvci5cbiAgICovXG4gIHByaXZhdGUgc2VwYXJhdG9yOiBzdHJpbmcgPSAnOic7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIGZvciB0aGlzIGNsYXNzOiBJbml0aWFsaXplcyBldmVudCBidXMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmV2ZW50QnVzID0gbmV3IFN1YmplY3Q8SUV2ZW50QnVzTWVzc2FnZT4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMga2V5IG1hdGNoaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IEtleSB0byBpZGVudGlmeSB0aGUgbWVzc2FnZS9ldmVudC5cbiAgICogQHBhcmFtIHdpbGRjYXJkIFdpbGRjYXJkIHJlY2VpdmVkIGZyb20gb24gbWV0aG9kLlxuICAgKlxuICAgKiBAcmV0dXJuIHRydWUgaWYga2V5IG1hdGNoZXMsIGZhbHNlIG90aGVyd2lzZS5cbiAgICovXG4gIHB1YmxpYyBrZXlNYXRjaChrZXk6IHN0cmluZywgd2lsZGNhcmQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHc6IHN0cmluZyA9ICcqJztcbiAgICBjb25zdCB3dzogc3RyaW5nID0gJyoqJztcblxuICAgIGNvbnN0IHBhcnRNYXRjaCA9ICh3bDogc3RyaW5nLCBrOiBzdHJpbmcpOiBib29sZWFuID0+IHdsID09PSB3IHx8IHdsID09PSBrO1xuXG4gICAgY29uc3Qgc2VwOiBzdHJpbmcgPSB0aGlzLnNlcGFyYXRvcjtcbiAgICBjb25zdCBrQXJyOiBzdHJpbmdbXSA9IGtleS5zcGxpdChzZXApO1xuICAgIGNvbnN0IHdBcnI6IHN0cmluZ1tdID0gd2lsZGNhcmQuc3BsaXQoc2VwKTtcblxuICAgIGNvbnN0IGtMZW46IG51bWJlciA9IGtBcnIubGVuZ3RoO1xuICAgIGNvbnN0IHdMZW46IG51bWJlciA9IHdBcnIubGVuZ3RoO1xuICAgIGNvbnN0IG1heDogbnVtYmVyID0gTWF0aC5tYXgoa0xlbiwgd0xlbik7XG5cbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgIGNvbnN0IGNLOiBzdHJpbmcgPSBrQXJyW2ldO1xuICAgICAgY29uc3QgY1c6IHN0cmluZyA9IHdBcnJbaV07XG5cbiAgICAgIGlmIChjVyA9PT0gd3cgJiYgdHlwZW9mIGNLICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFwYXJ0TWF0Y2goY1csIGNLKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogUHVibGlzaCBhIG1lc3NhZ2UvZXZlbnQgdG8gZXZlbnQgYnVzLlxuICAgKlxuICAgKiBAcGFyYW0gIGtleSBLZXkgdG8gaWRlbnRpZnkgdGhlIG1lc3NhZ2UvZXZlbnQuXG4gICAqIEBwYXJhbSAgW2RhdGFdIE9wdGlvbmFsOiBBZGRpdGlvbmFsIGRhdGEgc2VudCB3aXRoIHRoZSBtZXNzYWdlL2V2ZW50LlxuICAgKiBAdGhyb3dzIHtFcnJvcn0ga2V5IHBhcmFtZXRlciBtdXN0IGJlIGEgc3RyaW5nIGFuZCBtdXN0IG5vdCBiZSBlbXB0eS5cbiAgICovXG4gIHB1YmxpYyBjYXN0PFQ+KGtleTogc3RyaW5nLCBkYXRhPzogVCk6IHZvaWQge1xuICAgIGlmICgha2V5LnRyaW0oKS5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigna2V5IHBhcmFtZXRlciBtdXN0IGJlIGEgc3RyaW5nIGFuZCBtdXN0IG5vdCBiZSBlbXB0eScpO1xuICAgIH1cblxuICAgIGNvbnN0IG1ldGFkYXRhOiBNZXRhRGF0YTxUPiA9IG5ldyBNZXRhRGF0YTxUPihrZXksIGRhdGEpO1xuXG4gICAgdGhpcy5ldmVudEJ1cy5uZXh0KHsga2V5LCBtZXRhZGF0YSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgeW91IGNhbiBzdWJzY3JpYmUgdG8gbGlzdGVuIG1lc3NhZ2VzL2V2ZW50cy5cbiAgICpcbiAgICogQHBhcmFtIGtleSBLZXkgdG8gaWRlbnRpZnkgdGhlIG1lc3NhZ2UvZXZlbnQuXG4gICAqXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZSB5b3UgY2FuIHN1YnNjcmliZSB0byBsaXN0ZW4gbWVzc2FnZXMvZXZlbnRzLlxuICAgKi9cbiAgcHVibGljIG9uPFQ+KGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxNZXRhRGF0YTxUPj4ge1xuICAgIHJldHVybiB0aGlzLmV2ZW50QnVzLmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICBmaWx0ZXIoKGV2ZW50OiBJRXZlbnRCdXNNZXNzYWdlKTogYm9vbGVhbiA9PiB0aGlzLmtleU1hdGNoKGV2ZW50LmtleSwga2V5KSksXG4gICAgICBtYXAoKGV2ZW50OiBJRXZlbnRCdXNNZXNzYWdlKTogTWV0YURhdGE8VD4gPT4gZXZlbnQubWV0YWRhdGEpXG4gICAgKTtcbiAgfVxufVxuIl19