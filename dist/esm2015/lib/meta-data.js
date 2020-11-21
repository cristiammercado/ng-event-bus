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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YS1kYXRhLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9tZXRhLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDO0FBQ2xDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFaEM7Ozs7OztHQU1HO0FBQ0gsTUFBTSxPQUFPLFFBQVE7SUEwQm5COzs7OztPQUtHO0lBQ0gsWUFBWSxHQUFXLEVBQUUsSUFBVTtRQUNqQyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0NBRUYiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTp2YXJpYWJsZS1uYW1lICovXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xuXG4vKipcbiAqIE1ldGFkYXRhIG9mIHRoZSBtZXNzYWdlcyBzZW50IHRocm91Z2ggdGhlIGV2ZW50cyBidXMuXG4gKlxuICogQGF1dGhvciBDcmlzdGlhbSBNZXJjYWRvXG4gKiBAc2luY2UgMi4wLjBcbiAqIEB2ZXJzaW9uIDIuMC4wXG4gKi9cbmV4cG9ydCBjbGFzcyBNZXRhRGF0YSB7XG5cbiAgLyoqXG4gICAqIEEgdW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIG1lc3NhZ2Ugc2VudCB0aHJvdWdoIHRoZSBldmVudHMgYnVzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfaWQ6IHN0cmluZztcblxuICAvKipcbiAgICogT3JpZ2luYWwga2V5IGFzc29jaWF0ZWQgdG8gdGhlIG1lc3NhZ2UuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9rZXk6IHN0cmluZztcblxuICAvKipcbiAgICogRGF0YSBhc3NvY2lhdGVkIHRvIG1lc3NhZ2UuIEl0J3Mgb3B0aW9uYWwuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9kYXRhOiBhbnk7XG5cbiAgLyoqXG4gICAqIFRpbWUgaW4gbWlsbGlzZWNvbmRzIGluIHdoaWNoIHRoZSBtZXNzYWdlIHdhcyBnZW5lcmF0ZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF90aW1lc3RhbXA6IG51bWJlcjtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIHRoaXMgY2xhc3MuXG4gICAqXG4gICAqIEBwYXJhbSBrZXkgT3JpZ2luYWwga2V5IGFzc29jaWF0ZWQgdG8gdGhlIG1lc3NhZ2Ugc2VudCB0aHJvdWdoIHRoZSBldmVudHMgYnVzLlxuICAgKiBAcGFyYW0gW2RhdGFdIE9wdGlvbmFsOiBBZGRpdGlvbmFsIGRhdGEgc2VudCB3aXRoIHRoZSBtZXNzYWdlLlxuICAgKi9cbiAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIGRhdGE/OiBhbnkpIHtcbiAgICB0aGlzLl9pZCA9IFV0aWxzLnV1aWQoKTtcbiAgICB0aGlzLl9rZXkgPSBrZXk7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5fdGltZXN0YW1wID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB1bmlxdWUgaWRlbnRpZmllciBvZiB0aGUgbWVzc2FnZSBzZW50IHRocm91Z2ggdGhlIGV2ZW50cyBidXMuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLyoqXG4gICAqIE9yaWdpbmFsIGtleSBhc3NvY2lhdGVkIHRvIHRoZSBtZXNzYWdlLlxuICAgKi9cbiAgcHVibGljIGdldCBrZXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5O1xuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgYXNzb2NpYXRlZCB0byBtZXNzYWdlLiBJdCdzIG9wdGlvbmFsLlxuICAgKi9cbiAgcHVibGljIGdldCBkYXRhKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgdGltZSBpbiBtaWxsaXNlY29uZHMgaW4gd2hpY2ggdGhlIG1lc3NhZ2Ugd2FzIGdlbmVyYXRlZC5cbiAgICovXG4gIHB1YmxpYyBnZXQgdGltZXN0YW1wKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVzdGFtcDtcbiAgfVxuXG59XG4iXX0=