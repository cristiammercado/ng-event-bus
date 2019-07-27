"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
/**
 * Main library class.
 *
 * @since 0.0.1
 * @version 1.0.3
 */
var NgEventBus = /** @class */ (function () {
    /**
     * Constructor for this class: Initializes event bus.
     */
    function NgEventBus() {
        this.separator = ':';
        this._eventBus = new rxjs_1.Subject();
    }
    /**
     * Validates key matching.
     *
     * @param {string} key Key to identify the message/event.
     * @param {string} wildcard Wilcard received from on method.
     */
    NgEventBus.prototype.keyMatch = function (key, wildcard) {
        var w = '*';
        var ww = '**';
        var partMatch = function (wl, k) {
            return (wl === w) || (wl === k);
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
            if (cW === ww && (typeof cK !== 'undefined')) {
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
     * @param {string} key Key to identify the message/event.
     * @param {any} [data] Optional: Additional data sent with the message/event.
     */
    NgEventBus.prototype.cast = function (key, data) {
        if (typeof key !== 'string' || !key.length) {
            throw 'key must be a string and mustn\'t be empty.';
        }
        this._eventBus.next({ key: key, data: data });
    };
    /**
     * Returns an observable you can subscribe to listen messages/events.
     *
     * @param {string} key Key to identify the message/event.
     */
    NgEventBus.prototype.on = function (key) {
        var _this = this;
        return this._eventBus.asObservable().pipe(operators_1.filter(function (event) {
            return _this.keyMatch(event.key, key);
        }), operators_1.map(function (event) { return event.data; }));
    };
    return NgEventBus;
}());
exports.NgEventBus = NgEventBus;
