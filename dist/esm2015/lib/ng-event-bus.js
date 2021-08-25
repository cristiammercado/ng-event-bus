import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { MetaData } from './meta-data';
/**
 * Main library class.
 *
 * @author Cristiam Mercado
 * @since 2.0.0
 * @version 3.0.0
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
        if (!key.trim().length) {
            throw new Error('key parameter must be a string and must not be empty');
        }
        const metadata = new MetaData(key, data);
        this.eventBus.next({ key, data, metadata });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZXZlbnQtYnVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9uZy1ldmVudC1idXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFdkM7Ozs7OztHQU1HO0FBQ0gsTUFBTSxPQUFPLFVBQVU7SUFXckI7O09BRUc7SUFDSDtRQVJBOztXQUVHO1FBQ0ssY0FBUyxHQUFHLEdBQUcsQ0FBQztRQU10QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxFQUFvQixDQUFDO0lBQ2xELENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksUUFBUSxDQUFDLEdBQVcsRUFBRSxRQUFnQjtRQUMzQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDZCxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFFaEIsTUFBTSxTQUFTLEdBQUcsQ0FBQyxFQUFVLEVBQUUsQ0FBUyxFQUFXLEVBQUU7WUFDbkQsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDO1FBRUYsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMzQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFakMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN6QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3pCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWpDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVuQixJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksT0FBTyxFQUFFLEtBQUssV0FBVyxFQUFFO2dCQUMxQyxPQUFPLElBQUksQ0FBQzthQUNiO1lBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQ3RCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLElBQUksQ0FBQyxHQUFXLEVBQUUsSUFBVTtRQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7U0FDekU7UUFFRCxNQUFNLFFBQVEsR0FBYSxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLEVBQUUsQ0FBSSxHQUFXO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ3RDLE1BQU0sQ0FBQyxDQUFDLEtBQXVCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUNsRSxHQUFHLENBQUMsQ0FBQyxLQUF1QixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQ2pELENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgSUV2ZW50QnVzTWVzc2FnZSB9IGZyb20gJy4vaS1ldmVudC1idXMtbWVzc2FnZSc7XG5pbXBvcnQgeyBNZXRhRGF0YSB9IGZyb20gJy4vbWV0YS1kYXRhJztcblxuLyoqXG4gKiBNYWluIGxpYnJhcnkgY2xhc3MuXG4gKlxuICogQGF1dGhvciBDcmlzdGlhbSBNZXJjYWRvXG4gKiBAc2luY2UgMi4wLjBcbiAqIEB2ZXJzaW9uIDMuMC4wXG4gKi9cbmV4cG9ydCBjbGFzcyBOZ0V2ZW50QnVzIHtcbiAgLyoqXG4gICAqIE1haW4gb2JzZXJ2YWJsZSB0byBtdWx0aWNhc3QgdG8gYWxsIG9ic2VydmVycy5cbiAgICovXG4gIHByaXZhdGUgZXZlbnRCdXM6IFN1YmplY3Q8SUV2ZW50QnVzTWVzc2FnZT47XG5cbiAgLyoqXG4gICAqIEtleSBtZXNzYWdlIHNlcGFyYXRvci5cbiAgICovXG4gIHByaXZhdGUgc2VwYXJhdG9yID0gJzonO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgdGhpcyBjbGFzczogSW5pdGlhbGl6ZXMgZXZlbnQgYnVzLlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ldmVudEJ1cyA9IG5ldyBTdWJqZWN0PElFdmVudEJ1c01lc3NhZ2U+KCk7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGtleSBtYXRjaGluZy5cbiAgICpcbiAgICogQHBhcmFtICBrZXkgS2V5IHRvIGlkZW50aWZ5IHRoZSBtZXNzYWdlL2V2ZW50LlxuICAgKiBAcGFyYW0gd2lsZGNhcmQgV2lsZGNhcmQgcmVjZWl2ZWQgZnJvbSBvbiBtZXRob2QuXG4gICAqXG4gICAqIEByZXR1cm4gdHJ1ZSBpZiBrZXkgbWF0Y2hlcywgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKi9cbiAgcHVibGljIGtleU1hdGNoKGtleTogc3RyaW5nLCB3aWxkY2FyZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdyA9ICcqJztcbiAgICBjb25zdCB3dyA9ICcqKic7XG5cbiAgICBjb25zdCBwYXJ0TWF0Y2ggPSAod2w6IHN0cmluZywgazogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgICByZXR1cm4gd2wgPT09IHcgfHwgd2wgPT09IGs7XG4gICAgfTtcblxuICAgIGNvbnN0IHNlcCA9IHRoaXMuc2VwYXJhdG9yO1xuICAgIGNvbnN0IGtBcnIgPSBrZXkuc3BsaXQoc2VwKTtcbiAgICBjb25zdCB3QXJyID0gd2lsZGNhcmQuc3BsaXQoc2VwKTtcblxuICAgIGNvbnN0IGtMZW4gPSBrQXJyLmxlbmd0aDtcbiAgICBjb25zdCB3TGVuID0gd0Fyci5sZW5ndGg7XG4gICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoa0xlbiwgd0xlbik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICBjb25zdCBjSyA9IGtBcnJbaV07XG4gICAgICBjb25zdCBjVyA9IHdBcnJbaV07XG5cbiAgICAgIGlmIChjVyA9PT0gd3cgJiYgdHlwZW9mIGNLICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFwYXJ0TWF0Y2goY1csIGNLKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogUHVibGlzaCBhIG1lc3NhZ2UvZXZlbnQgdG8gZXZlbnQgYnVzLlxuICAgKlxuICAgKiBAcGFyYW0gIGtleSBLZXkgdG8gaWRlbnRpZnkgdGhlIG1lc3NhZ2UvZXZlbnQuXG4gICAqIEBwYXJhbSAgW2RhdGFdIE9wdGlvbmFsOiBBZGRpdGlvbmFsIGRhdGEgc2VudCB3aXRoIHRoZSBtZXNzYWdlL2V2ZW50LlxuICAgKiBAdGhyb3dzIHtFcnJvcn0ga2V5IHBhcmFtZXRlciBtdXN0IGJlIGEgc3RyaW5nIGFuZCBtdXN0IG5vdCBiZSBlbXB0eS5cbiAgICovXG4gIHB1YmxpYyBjYXN0KGtleTogc3RyaW5nLCBkYXRhPzogYW55KTogdm9pZCB7XG4gICAgaWYgKCFrZXkudHJpbSgpLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdrZXkgcGFyYW1ldGVyIG11c3QgYmUgYSBzdHJpbmcgYW5kIG11c3Qgbm90IGJlIGVtcHR5Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgbWV0YWRhdGE6IE1ldGFEYXRhID0gbmV3IE1ldGFEYXRhKGtleSwgZGF0YSk7XG5cbiAgICB0aGlzLmV2ZW50QnVzLm5leHQoeyBrZXksIGRhdGEsIG1ldGFkYXRhIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSB5b3UgY2FuIHN1YnNjcmliZSB0byBsaXN0ZW4gbWVzc2FnZXMvZXZlbnRzLlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IEtleSB0byBpZGVudGlmeSB0aGUgbWVzc2FnZS9ldmVudC5cbiAgICpcbiAgICogQHJldHVybiBPYnNlcnZhYmxlIHlvdSBjYW4gc3Vic2NyaWJlIHRvIGxpc3RlbiBtZXNzYWdlcy9ldmVudHMuXG4gICAqL1xuICBwdWJsaWMgb248VD4oa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPE1ldGFEYXRhPiB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRCdXMuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIGZpbHRlcigoZXZlbnQ6IElFdmVudEJ1c01lc3NhZ2UpID0+IHRoaXMua2V5TWF0Y2goZXZlbnQua2V5LCBrZXkpKSxcbiAgICAgIG1hcCgoZXZlbnQ6IElFdmVudEJ1c01lc3NhZ2UpID0+IGV2ZW50Lm1ldGFkYXRhKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==