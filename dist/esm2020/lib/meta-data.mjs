/* tslint:disable:variable-name */
/**
 * Metadata of the messages sent through the events bus.
 *
 * @author Cristiam Mercado
 * @since 2.0.0
 * @version 5.0.1
 */
export class MetaData {
    /**
     * Constructor for this class.
     *
     * @param key Original key associated to the message sent through the events bus.
     * @param [data] Optional: Additional data sent with the message.
     */
    constructor(key, data) {
        this._id = this.uuid();
        this._key = key;
        this._data = data;
        this._timestamp = new Date().getTime();
    }
    /**
     * Gets unique identifier of the message sent through the events bus.
     */
    get id() {
        return this._id;
    }
    /**
     * Original key associated to the message.
     */
    get key() {
        return this._key;
    }
    /**
     * Data associated to message. It's optional.
     */
    get data() {
        return this._data;
    }
    /**
     * Gets the time in milliseconds in which the message was generated.
     */
    get timestamp() {
        return this._timestamp;
    }
    /**
     * Generates UUID version 4. The solution above uses Math.random() for brevity, however Math.random() is not
     * guaranteed to be a high-quality RNG.
     *
     * @return UUID version 4.
     */
    uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = (Math.random() * 16) | 0;
            const v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YS1kYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9tZXRhLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDO0FBRWxDOzs7Ozs7R0FNRztBQUNILE1BQU0sT0FBTyxRQUFRO0lBeUJuQjs7Ozs7T0FLRztJQUNILFlBQVksR0FBVyxFQUFFLElBQVU7UUFDakMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ssSUFBSTtRQUNWLE9BQU8sc0NBQXNDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQVMsRUFBRSxFQUFFO1lBQzNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUMxQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTp2YXJpYWJsZS1uYW1lICovXG5cbi8qKlxuICogTWV0YWRhdGEgb2YgdGhlIG1lc3NhZ2VzIHNlbnQgdGhyb3VnaCB0aGUgZXZlbnRzIGJ1cy5cbiAqXG4gKiBAYXV0aG9yIENyaXN0aWFtIE1lcmNhZG9cbiAqIEBzaW5jZSAyLjAuMFxuICogQHZlcnNpb24gNS4wLjFcbiAqL1xuZXhwb3J0IGNsYXNzIE1ldGFEYXRhIHtcbiAgLyoqXG4gICAqIEEgdW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIG1lc3NhZ2Ugc2VudCB0aHJvdWdoIHRoZSBldmVudHMgYnVzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfaWQ6IHN0cmluZztcblxuICAvKipcbiAgICogT3JpZ2luYWwga2V5IGFzc29jaWF0ZWQgdG8gdGhlIG1lc3NhZ2UuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9rZXk6IHN0cmluZztcblxuICAvKipcbiAgICogRGF0YSBhc3NvY2lhdGVkIHRvIG1lc3NhZ2UuIEl0J3Mgb3B0aW9uYWwuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9kYXRhOiBhbnk7XG5cbiAgLyoqXG4gICAqIFRpbWUgaW4gbWlsbGlzZWNvbmRzIGluIHdoaWNoIHRoZSBtZXNzYWdlIHdhcyBnZW5lcmF0ZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF90aW1lc3RhbXA6IG51bWJlcjtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIHRoaXMgY2xhc3MuXG4gICAqXG4gICAqIEBwYXJhbSBrZXkgT3JpZ2luYWwga2V5IGFzc29jaWF0ZWQgdG8gdGhlIG1lc3NhZ2Ugc2VudCB0aHJvdWdoIHRoZSBldmVudHMgYnVzLlxuICAgKiBAcGFyYW0gW2RhdGFdIE9wdGlvbmFsOiBBZGRpdGlvbmFsIGRhdGEgc2VudCB3aXRoIHRoZSBtZXNzYWdlLlxuICAgKi9cbiAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIGRhdGE/OiBhbnkpIHtcbiAgICB0aGlzLl9pZCA9IHRoaXMudXVpZCgpO1xuICAgIHRoaXMuX2tleSA9IGtleTtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB0aGlzLl90aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBtZXNzYWdlIHNlbnQgdGhyb3VnaCB0aGUgZXZlbnRzIGJ1cy5cbiAgICovXG4gIHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICAvKipcbiAgICogT3JpZ2luYWwga2V5IGFzc29jaWF0ZWQgdG8gdGhlIG1lc3NhZ2UuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGtleSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9rZXk7XG4gIH1cblxuICAvKipcbiAgICogRGF0YSBhc3NvY2lhdGVkIHRvIG1lc3NhZ2UuIEl0J3Mgb3B0aW9uYWwuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGRhdGEoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSB0aW1lIGluIG1pbGxpc2Vjb25kcyBpbiB3aGljaCB0aGUgbWVzc2FnZSB3YXMgZ2VuZXJhdGVkLlxuICAgKi9cbiAgcHVibGljIGdldCB0aW1lc3RhbXAoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZXN0YW1wO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBVVUlEIHZlcnNpb24gNC4gVGhlIHNvbHV0aW9uIGFib3ZlIHVzZXMgTWF0aC5yYW5kb20oKSBmb3IgYnJldml0eSwgaG93ZXZlciBNYXRoLnJhbmRvbSgpIGlzIG5vdFxuICAgKiBndWFyYW50ZWVkIHRvIGJlIGEgaGlnaC1xdWFsaXR5IFJORy5cbiAgICpcbiAgICogQHJldHVybiBVVUlEIHZlcnNpb24gNC5cbiAgICovXG4gIHByaXZhdGUgdXVpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIChjOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDA7XG4gICAgICBjb25zdCB2ID0gYyA9PT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4ODtcbiAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgICB9KTtcbiAgfVxufVxuIl19