/* tslint:disable:variable-name */
/**
 * Metadata of the messages sent through the events bus.
 *
 * @author Cristiam Mercado
 * @since 2.0.0
 * @version 5.2.0
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YS1kYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9tZXRhLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDO0FBRWxDOzs7Ozs7R0FNRztBQUNILE1BQU0sT0FBTyxRQUFRO0lBeUJuQjs7Ozs7T0FLRztJQUNILFlBQVksR0FBVyxFQUFFLElBQVE7UUFDL0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ssSUFBSTtRQUNWLE9BQU8sc0NBQXNDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQVMsRUFBRSxFQUFFO1lBQzNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUMxQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTp2YXJpYWJsZS1uYW1lICovXG5cbi8qKlxuICogTWV0YWRhdGEgb2YgdGhlIG1lc3NhZ2VzIHNlbnQgdGhyb3VnaCB0aGUgZXZlbnRzIGJ1cy5cbiAqXG4gKiBAYXV0aG9yIENyaXN0aWFtIE1lcmNhZG9cbiAqIEBzaW5jZSAyLjAuMFxuICogQHZlcnNpb24gNS4yLjBcbiAqL1xuZXhwb3J0IGNsYXNzIE1ldGFEYXRhPFQgPSBhbnk+IHtcbiAgLyoqXG4gICAqIEEgdW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIG1lc3NhZ2Ugc2VudCB0aHJvdWdoIHRoZSBldmVudHMgYnVzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfaWQ6IHN0cmluZztcblxuICAvKipcbiAgICogT3JpZ2luYWwga2V5IGFzc29jaWF0ZWQgdG8gdGhlIG1lc3NhZ2UuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9rZXk6IHN0cmluZztcblxuICAvKipcbiAgICogRGF0YSBhc3NvY2lhdGVkIHRvIG1lc3NhZ2UuIEl0J3Mgb3B0aW9uYWwuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9kYXRhPzogVDtcblxuICAvKipcbiAgICogVGltZSBpbiBtaWxsaXNlY29uZHMgaW4gd2hpY2ggdGhlIG1lc3NhZ2Ugd2FzIGdlbmVyYXRlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX3RpbWVzdGFtcDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgdGhpcyBjbGFzcy5cbiAgICpcbiAgICogQHBhcmFtIGtleSBPcmlnaW5hbCBrZXkgYXNzb2NpYXRlZCB0byB0aGUgbWVzc2FnZSBzZW50IHRocm91Z2ggdGhlIGV2ZW50cyBidXMuXG4gICAqIEBwYXJhbSBbZGF0YV0gT3B0aW9uYWw6IEFkZGl0aW9uYWwgZGF0YSBzZW50IHdpdGggdGhlIG1lc3NhZ2UuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgZGF0YT86IFQpIHtcbiAgICB0aGlzLl9pZCA9IHRoaXMudXVpZCgpO1xuICAgIHRoaXMuX2tleSA9IGtleTtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB0aGlzLl90aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBtZXNzYWdlIHNlbnQgdGhyb3VnaCB0aGUgZXZlbnRzIGJ1cy5cbiAgICovXG4gIHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICAvKipcbiAgICogT3JpZ2luYWwga2V5IGFzc29jaWF0ZWQgdG8gdGhlIG1lc3NhZ2UuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGtleSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9rZXk7XG4gIH1cblxuICAvKipcbiAgICogRGF0YSBhc3NvY2lhdGVkIHRvIG1lc3NhZ2UuIEl0J3Mgb3B0aW9uYWwuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGRhdGEoKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgdGltZSBpbiBtaWxsaXNlY29uZHMgaW4gd2hpY2ggdGhlIG1lc3NhZ2Ugd2FzIGdlbmVyYXRlZC5cbiAgICovXG4gIHB1YmxpYyBnZXQgdGltZXN0YW1wKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVzdGFtcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgVVVJRCB2ZXJzaW9uIDQuIFRoZSBzb2x1dGlvbiBhYm92ZSB1c2VzIE1hdGgucmFuZG9tKCkgZm9yIGJyZXZpdHksIGhvd2V2ZXIgTWF0aC5yYW5kb20oKSBpcyBub3RcbiAgICogZ3VhcmFudGVlZCB0byBiZSBhIGhpZ2gtcXVhbGl0eSBSTkcuXG4gICAqXG4gICAqIEByZXR1cm4gVVVJRCB2ZXJzaW9uIDQuXG4gICAqL1xuICBwcml2YXRlIHV1aWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCAoYzogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCByID0gKE1hdGgucmFuZG9tKCkgKiAxNikgfCAwO1xuICAgICAgY29uc3QgdiA9IGMgPT09ICd4JyA/IHIgOiAociAmIDB4MykgfCAweDg7XG4gICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==