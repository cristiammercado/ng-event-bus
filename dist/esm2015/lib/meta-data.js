/* tslint:disable:variable-name */
import { Utils } from './utils';
/**
 * Metadata of the messages sent through the events bus.
 *
 * @author Cristiam Mercado
 * @since 2.0.0
 * @version 2.0.0
 */
export class MetaData {
    /**
     * Constructor for this class.
     *
     * @param key Original key associated to the message sent through the events bus.
     * @param [data] Optional: Additional data sent with the message.
     */
    constructor(key, data) {
        this._id = Utils.uuid();
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YS1kYXRhLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9tZXRhLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDO0FBQ2xDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFaEM7Ozs7OztHQU1HO0FBQ0gsTUFBTSxPQUFPLFFBQVE7SUF5Qm5COzs7OztPQUtHO0lBQ0gsWUFBWSxHQUFXLEVBQUUsSUFBVTtRQUNqQyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTp2YXJpYWJsZS1uYW1lICovXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xuXG4vKipcbiAqIE1ldGFkYXRhIG9mIHRoZSBtZXNzYWdlcyBzZW50IHRocm91Z2ggdGhlIGV2ZW50cyBidXMuXG4gKlxuICogQGF1dGhvciBDcmlzdGlhbSBNZXJjYWRvXG4gKiBAc2luY2UgMi4wLjBcbiAqIEB2ZXJzaW9uIDIuMC4wXG4gKi9cbmV4cG9ydCBjbGFzcyBNZXRhRGF0YSB7XG4gIC8qKlxuICAgKiBBIHVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBtZXNzYWdlIHNlbnQgdGhyb3VnaCB0aGUgZXZlbnRzIGJ1cy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX2lkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE9yaWdpbmFsIGtleSBhc3NvY2lhdGVkIHRvIHRoZSBtZXNzYWdlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfa2V5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERhdGEgYXNzb2NpYXRlZCB0byBtZXNzYWdlLiBJdCdzIG9wdGlvbmFsLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfZGF0YTogYW55O1xuXG4gIC8qKlxuICAgKiBUaW1lIGluIG1pbGxpc2Vjb25kcyBpbiB3aGljaCB0aGUgbWVzc2FnZSB3YXMgZ2VuZXJhdGVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfdGltZXN0YW1wOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIGZvciB0aGlzIGNsYXNzLlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IE9yaWdpbmFsIGtleSBhc3NvY2lhdGVkIHRvIHRoZSBtZXNzYWdlIHNlbnQgdGhyb3VnaCB0aGUgZXZlbnRzIGJ1cy5cbiAgICogQHBhcmFtIFtkYXRhXSBPcHRpb25hbDogQWRkaXRpb25hbCBkYXRhIHNlbnQgd2l0aCB0aGUgbWVzc2FnZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCBkYXRhPzogYW55KSB7XG4gICAgdGhpcy5faWQgPSBVdGlscy51dWlkKCk7XG4gICAgdGhpcy5fa2V5ID0ga2V5O1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIHRoaXMuX3RpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIG1lc3NhZ2Ugc2VudCB0aHJvdWdoIHRoZSBldmVudHMgYnVzLlxuICAgKi9cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcmlnaW5hbCBrZXkgYXNzb2NpYXRlZCB0byB0aGUgbWVzc2FnZS5cbiAgICovXG4gIHB1YmxpYyBnZXQga2V5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2tleTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIGFzc29jaWF0ZWQgdG8gbWVzc2FnZS4gSXQncyBvcHRpb25hbC5cbiAgICovXG4gIHB1YmxpYyBnZXQgZGF0YSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGluIHdoaWNoIHRoZSBtZXNzYWdlIHdhcyBnZW5lcmF0ZWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHRpbWVzdGFtcCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90aW1lc3RhbXA7XG4gIH1cbn1cbiJdfQ==