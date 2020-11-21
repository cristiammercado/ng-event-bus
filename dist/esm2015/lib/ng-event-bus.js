import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
/**
 * Main library class.
 *
 * @author Cristiam Mercado
 * @since 2.0.0
 * @version 2.0.0
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
     * @param  key Key to identify the message/event.
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
        if (!key.length) {
            throw new Error('key parameter must be a string and must not be empty');
        }
        this.eventBus.next({ key, data });
    }
    /**
     * Returns an observable you can subscribe to listen messages/events.
     *
     * @param key Key to identify the message/event.
     *
     * @return Observable you can subscribe to listen messages/events.
     */
    on(key) {
        return this.eventBus.asObservable().pipe(filter((event) => this.keyMatch(event.key, key)), map((event) => event.data));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZXZlbnQtYnVzLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9uZy1ldmVudC1idXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTdDOzs7Ozs7R0FNRztBQUNILE1BQU0sT0FBTyxVQUFVO0lBV3JCOztPQUVHO0lBQ0g7UUFSQTs7V0FFRztRQUNLLGNBQVMsR0FBRyxHQUFHLENBQUM7UUFNdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBb0IsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLFFBQVEsQ0FBQyxHQUFXLEVBQUUsUUFBZ0I7UUFDM0MsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ2QsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBRWhCLE1BQU0sU0FBUyxHQUFHLENBQUMsRUFBVSxFQUFFLENBQVMsRUFBVyxFQUFFO1lBQ25ELE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQztRQUVGLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDM0IsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWpDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN6QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVqQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFbkIsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLE9BQU8sRUFBRSxLQUFLLFdBQVcsRUFBRTtnQkFDMUMsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUVELElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO2dCQUN0QixPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxJQUFJLENBQUMsR0FBVyxFQUFFLElBQVU7UUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7U0FDekU7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxFQUFFLENBQUksR0FBVztRQUN0QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUN0QyxNQUFNLENBQUMsQ0FBQyxLQUF1QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDbEUsR0FBRyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBUyxDQUFDLENBQ3JDLENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgSUV2ZW50QnVzTWVzc2FnZSB9IGZyb20gJy4vaS1ldmVudC1idXMtbWVzc2FnZSc7XG5cbi8qKlxuICogTWFpbiBsaWJyYXJ5IGNsYXNzLlxuICpcbiAqIEBhdXRob3IgQ3Jpc3RpYW0gTWVyY2Fkb1xuICogQHNpbmNlIDIuMC4wXG4gKiBAdmVyc2lvbiAyLjAuMFxuICovXG5leHBvcnQgY2xhc3MgTmdFdmVudEJ1cyB7XG4gIC8qKlxuICAgKiBNYWluIG9ic2VydmFibGUgdG8gbXVsdGljYXN0IHRvIGFsbCBvYnNlcnZlcnMuXG4gICAqL1xuICBwcml2YXRlIGV2ZW50QnVzOiBTdWJqZWN0PElFdmVudEJ1c01lc3NhZ2U+O1xuXG4gIC8qKlxuICAgKiBLZXkgbWVzc2FnZSBzZXBhcmF0b3IuXG4gICAqL1xuICBwcml2YXRlIHNlcGFyYXRvciA9ICc6JztcblxuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIHRoaXMgY2xhc3M6IEluaXRpYWxpemVzIGV2ZW50IGJ1cy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZXZlbnRCdXMgPSBuZXcgU3ViamVjdDxJRXZlbnRCdXNNZXNzYWdlPigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBrZXkgbWF0Y2hpbmcuXG4gICAqXG4gICAqIEBwYXJhbSAga2V5IEtleSB0byBpZGVudGlmeSB0aGUgbWVzc2FnZS9ldmVudC5cbiAgICogQHBhcmFtIHdpbGRjYXJkIFdpbGRjYXJkIHJlY2VpdmVkIGZyb20gb24gbWV0aG9kLlxuICAgKlxuICAgKiBAcmV0dXJuIHRydWUgaWYga2V5IG1hdGNoZXMsIGZhbHNlIG90aGVyd2lzZS5cbiAgICovXG4gIHB1YmxpYyBrZXlNYXRjaChrZXk6IHN0cmluZywgd2lsZGNhcmQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHcgPSAnKic7XG4gICAgY29uc3Qgd3cgPSAnKionO1xuXG4gICAgY29uc3QgcGFydE1hdGNoID0gKHdsOiBzdHJpbmcsIGs6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgICAgcmV0dXJuIHdsID09PSB3IHx8IHdsID09PSBrO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXAgPSB0aGlzLnNlcGFyYXRvcjtcbiAgICBjb25zdCBrQXJyID0ga2V5LnNwbGl0KHNlcCk7XG4gICAgY29uc3Qgd0FyciA9IHdpbGRjYXJkLnNwbGl0KHNlcCk7XG5cbiAgICBjb25zdCBrTGVuID0ga0Fyci5sZW5ndGg7XG4gICAgY29uc3Qgd0xlbiA9IHdBcnIubGVuZ3RoO1xuICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KGtMZW4sIHdMZW4pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXg7IGkrKykge1xuICAgICAgY29uc3QgY0sgPSBrQXJyW2ldO1xuICAgICAgY29uc3QgY1cgPSB3QXJyW2ldO1xuXG4gICAgICBpZiAoY1cgPT09IHd3ICYmIHR5cGVvZiBjSyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghcGFydE1hdGNoKGNXLCBjSykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1Ymxpc2ggYSBtZXNzYWdlL2V2ZW50IHRvIGV2ZW50IGJ1cy5cbiAgICpcbiAgICogQHBhcmFtICBrZXkgS2V5IHRvIGlkZW50aWZ5IHRoZSBtZXNzYWdlL2V2ZW50LlxuICAgKiBAcGFyYW0gIFtkYXRhXSBPcHRpb25hbDogQWRkaXRpb25hbCBkYXRhIHNlbnQgd2l0aCB0aGUgbWVzc2FnZS9ldmVudC5cbiAgICogQHRocm93cyB7RXJyb3J9IGtleSBwYXJhbWV0ZXIgbXVzdCBiZSBhIHN0cmluZyBhbmQgbXVzdCBub3QgYmUgZW1wdHkuXG4gICAqL1xuICBwdWJsaWMgY2FzdChrZXk6IHN0cmluZywgZGF0YT86IGFueSk6IHZvaWQge1xuICAgIGlmICgha2V5Lmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdrZXkgcGFyYW1ldGVyIG11c3QgYmUgYSBzdHJpbmcgYW5kIG11c3Qgbm90IGJlIGVtcHR5Jyk7XG4gICAgfVxuXG4gICAgdGhpcy5ldmVudEJ1cy5uZXh0KHsga2V5LCBkYXRhIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSB5b3UgY2FuIHN1YnNjcmliZSB0byBsaXN0ZW4gbWVzc2FnZXMvZXZlbnRzLlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IEtleSB0byBpZGVudGlmeSB0aGUgbWVzc2FnZS9ldmVudC5cbiAgICpcbiAgICogQHJldHVybiBPYnNlcnZhYmxlIHlvdSBjYW4gc3Vic2NyaWJlIHRvIGxpc3RlbiBtZXNzYWdlcy9ldmVudHMuXG4gICAqL1xuICBwdWJsaWMgb248VD4oa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5ldmVudEJ1cy5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgZmlsdGVyKChldmVudDogSUV2ZW50QnVzTWVzc2FnZSkgPT4gdGhpcy5rZXlNYXRjaChldmVudC5rZXksIGtleSkpLFxuICAgICAgbWFwKChldmVudDogYW55KSA9PiBldmVudC5kYXRhIGFzIFQpXG4gICAgKTtcbiAgfVxufVxuIl19