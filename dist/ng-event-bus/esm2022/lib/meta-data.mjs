/* tslint:disable:variable-name */
/**
 * Metadata of the messages sent through the events bus.
 *
 * @author Cristiam Mercado
 * @since 2.0.0
 * @version 6.0.0
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YS1kYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZXZlbnQtYnVzL3NyYy9saWIvbWV0YS1kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFrQztBQUVsQzs7Ozs7O0dBTUc7QUFDSCxNQUFNLE9BQU8sUUFBUTtJQXlCbkI7Ozs7O09BS0c7SUFDSCxZQUFZLEdBQVcsRUFBRSxJQUFRO1FBQy9CLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLElBQUk7UUFDVixPQUFPLHNDQUFzQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFTLEVBQUUsRUFBRTtZQUMzRSxNQUFNLENBQUMsR0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0MsTUFBTSxDQUFDLEdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDbEQsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6dmFyaWFibGUtbmFtZSAqL1xuXG4vKipcbiAqIE1ldGFkYXRhIG9mIHRoZSBtZXNzYWdlcyBzZW50IHRocm91Z2ggdGhlIGV2ZW50cyBidXMuXG4gKlxuICogQGF1dGhvciBDcmlzdGlhbSBNZXJjYWRvXG4gKiBAc2luY2UgMi4wLjBcbiAqIEB2ZXJzaW9uIDYuMC4wXG4gKi9cbmV4cG9ydCBjbGFzcyBNZXRhRGF0YTxUID0gYW55PiB7XG4gIC8qKlxuICAgKiBBIHVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBtZXNzYWdlIHNlbnQgdGhyb3VnaCB0aGUgZXZlbnRzIGJ1cy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX2lkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE9yaWdpbmFsIGtleSBhc3NvY2lhdGVkIHRvIHRoZSBtZXNzYWdlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfa2V5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERhdGEgYXNzb2NpYXRlZCB0byBtZXNzYWdlLiBJdCdzIG9wdGlvbmFsLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfZGF0YT86IFQ7XG5cbiAgLyoqXG4gICAqIFRpbWUgaW4gbWlsbGlzZWNvbmRzIGluIHdoaWNoIHRoZSBtZXNzYWdlIHdhcyBnZW5lcmF0ZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF90aW1lc3RhbXA6IG51bWJlcjtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIHRoaXMgY2xhc3MuXG4gICAqXG4gICAqIEBwYXJhbSBrZXkgT3JpZ2luYWwga2V5IGFzc29jaWF0ZWQgdG8gdGhlIG1lc3NhZ2Ugc2VudCB0aHJvdWdoIHRoZSBldmVudHMgYnVzLlxuICAgKiBAcGFyYW0gW2RhdGFdIE9wdGlvbmFsOiBBZGRpdGlvbmFsIGRhdGEgc2VudCB3aXRoIHRoZSBtZXNzYWdlLlxuICAgKi9cbiAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIGRhdGE/OiBUKSB7XG4gICAgdGhpcy5faWQgPSB0aGlzLnV1aWQoKTtcbiAgICB0aGlzLl9rZXkgPSBrZXk7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5fdGltZXN0YW1wID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB1bmlxdWUgaWRlbnRpZmllciBvZiB0aGUgbWVzc2FnZSBzZW50IHRocm91Z2ggdGhlIGV2ZW50cyBidXMuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLyoqXG4gICAqIE9yaWdpbmFsIGtleSBhc3NvY2lhdGVkIHRvIHRoZSBtZXNzYWdlLlxuICAgKi9cbiAgcHVibGljIGdldCBrZXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5O1xuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgYXNzb2NpYXRlZCB0byBtZXNzYWdlLiBJdCdzIG9wdGlvbmFsLlxuICAgKi9cbiAgcHVibGljIGdldCBkYXRhKCk6IFQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGluIHdoaWNoIHRoZSBtZXNzYWdlIHdhcyBnZW5lcmF0ZWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHRpbWVzdGFtcCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90aW1lc3RhbXA7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIFVVSUQgdmVyc2lvbiA0LiBUaGUgc29sdXRpb24gYWJvdmUgdXNlcyBNYXRoLnJhbmRvbSgpIGZvciBicmV2aXR5LCBob3dldmVyIE1hdGgucmFuZG9tKCkgaXMgbm90XG4gICAqIGd1YXJhbnRlZWQgdG8gYmUgYSBoaWdoLXF1YWxpdHkgUk5HLlxuICAgKlxuICAgKiBAcmV0dXJuIFVVSUQgdmVyc2lvbiA0LlxuICAgKi9cbiAgcHJpdmF0ZSB1dWlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgKGM6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgcjogbnVtYmVyID0gKE1hdGgucmFuZG9tKCkgKiAxNikgfCAwO1xuICAgICAgY29uc3QgdjogbnVtYmVyID0gYyA9PT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4ODtcbiAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgICB9KTtcbiAgfVxufVxuIl19