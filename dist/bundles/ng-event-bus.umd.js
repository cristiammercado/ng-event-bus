(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng-event-bus', ['exports', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["ng-event-bus"] = {}, global.rxjs, global.rxjs.operators));
})(this, (function (exports, rxjs, operators) { 'use strict';

    /* tslint:disable:variable-name */
    /**
     * Metadata of the messages sent through the events bus.
     *
     * @author Cristiam Mercado
     * @since 2.0.0
     * @version 3.0.0
     */
    var MetaData = /** @class */ (function () {
        /**
         * Constructor for this class.
         *
         * @param key Original key associated to the message sent through the events bus.
         * @param [data] Optional: Additional data sent with the message.
         */
        function MetaData(key, data) {
            this._id = this.uuid();
            this._key = key;
            this._data = data;
            this._timestamp = new Date().getTime();
        }
        Object.defineProperty(MetaData.prototype, "id", {
            /**
             * Gets unique identifier of the message sent through the events bus.
             */
            get: function () {
                return this._id;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MetaData.prototype, "key", {
            /**
             * Original key associated to the message.
             */
            get: function () {
                return this._key;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MetaData.prototype, "data", {
            /**
             * Data associated to message. It's optional.
             */
            get: function () {
                return this._data;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MetaData.prototype, "timestamp", {
            /**
             * Gets the time in milliseconds in which the message was generated.
             */
            get: function () {
                return this._timestamp;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Generates UUID version 4. The solution above uses Math.random() for brevity, however Math.random() is not
         * guaranteed to be a high-quality RNG.
         *
         * @return UUID version 4.
         */
        MetaData.prototype.uuid = function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (Math.random() * 16) | 0;
                var v = c === 'x' ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            });
        };
        return MetaData;
    }());

    /**
     * Main library class.
     *
     * @author Cristiam Mercado
     * @since 2.0.0
     * @version 3.0.0
     */
    var NgEventBus = /** @class */ (function () {
        /**
         * Constructor for this class: Initializes event bus.
         */
        function NgEventBus() {
            /**
             * Key message separator.
             */
            this.separator = ':';
            this.eventBus = new rxjs.Subject();
        }
        /**
         * Validates key matching.
         *
         * @param  key Key to identify the message/event.
         * @param wildcard Wildcard received from on method.
         *
         * @return true if key matches, false otherwise.
         */
        NgEventBus.prototype.keyMatch = function (key, wildcard) {
            var w = '*';
            var ww = '**';
            var partMatch = function (wl, k) {
                return wl === w || wl === k;
            };
            var sep = this.separator;
            var kArr = key.split(sep);
            var wArr = wildcard.split(sep);
            var kLen = kArr.length;
            var wLen = wArr.length;
            var max = Math.max(kLen, wLen);
            for (var i = 0; i < max; i++) {
                var cK = kArr[i];
                var cW = wArr[i];
                if (cW === ww && typeof cK !== 'undefined') {
                    return true;
                }
                if (!partMatch(cW, cK)) {
                    return false;
                }
            }
            return true;
        };
        /**
         * Publish a message/event to event bus.
         *
         * @param  key Key to identify the message/event.
         * @param  [data] Optional: Additional data sent with the message/event.
         * @throws {Error} key parameter must be a string and must not be empty.
         */
        NgEventBus.prototype.cast = function (key, data) {
            if (!key.trim().length) {
                throw new Error('key parameter must be a string and must not be empty');
            }
            var metadata = new MetaData(key, data);
            this.eventBus.next({ key: key, data: data, metadata: metadata });
        };
        /**
         * Returns an observable you can subscribe to listen messages/events.
         *
         * @param key Key to identify the message/event.
         *
         * @return Observable you can subscribe to listen messages/events.
         */
        NgEventBus.prototype.on = function (key) {
            var _this = this;
            return this.eventBus.asObservable().pipe(operators.filter(function (event) { return _this.keyMatch(event.key, key); }), operators.map(function (event) { return event.metadata; }));
        };
        return NgEventBus;
    }());

    /*
     * Public API Surface of ng-event-bus
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NgEventBus = NgEventBus;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ng-event-bus.umd.js.map
