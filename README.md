# Ng-Event-Bus

RxJS-based message/event bus service for Angular apps inspired by [NgRadio](https://github.com/govorov/ng-radio). Inject it in your application module.

## Installation

`npm install --save ng-event-bus`

[NPM page](https://www.npmjs.com/package/ng-event-bus)

## Usage

First, import it:

`import { NgEventBus } from 'ng-event-bus';`

Then, if using Angular, inject it as a service (do not forget about providers):


```
......
import { NgEventBus } from 'ng-event-bus';
......

@NgModule({
    imports:[
		......
    ],
    providers: [
    	.......
        NgEventBus,
        .......
    ],
```

`constructor(private eventBus: NgEventBus){...}`

Or create an instance manually:

`let eventBus = new NgEventBus();`

Since you have `NgEventBus` instance in your app, you can use these methods for passing messages:

* `eventBus.cast(key, data)` - send message to event bus.

* `eventBus.on(pattern)` - returns observable you can subscribe to listen events.

Patterns may contain multiple segments split by `:`. Use this feature to create namespaces for messages you cast. You can use `*` in `pattern` to subscribe to any matching segment, or use `**` to subscribe to all segments, starting from particular position.

For example, you can use `on('error:*')` and subscribe to all errors, including something like `error:http` or `error:internal` and so on:

```
eventBus.cast('app:start',     'started');
eventBus.cast('message:greet', 'Hi!');
eventBus.cast('message:bye',   'Bye!');

eventBus.on('app:start').subscribe((message)=>{
	console.log(message); //will receive 'started' only
});

eventBus.on('message:greet').subscribe((message)=>{
	console.log(message); //will receive 'Hi!'
});

eventBus.on('message:bye').subscribe((message)=>{
	console.log(message); //will receive 'Bye!'
});

eventBus.on('message:*').subscribe((message)=>{
	console.log(message); //will receive both 'Hi!' and 'Bye!'
});

eventBus.on('**').subscribe((message)=>{
	console.log(message); //will receive all messages: 'started', 'Hi!' and 'Bye!'
});

```

### Examples

These strings will match:

* `on('**'    , callback)` can subscribe to any message with any segments count

* `on('a'     , callback)` can subscribe to `cast('a', ...)`

* `on('a:b'   , callback)` can subscribe to `cast('a:b', ...)`

* `on('a:b:c' , callback)` can subscribe to `cast('a:b:c', ...)`

* `on('a:**'  , callback)` can subscribe to `cast('a:b:c', ...)`, `cast('a:b:c:d:e:f', ...)`

* `on('a:*:*' , callback)` can subscribe to `cast('a:b:c', ...)`, `cast('a:f:g', ...)`, `cast('a:n:m', ...)`

* `on('a:b:*' , callback)` can subscribe to `cast('a:b:c', ...)`, `cast('a:b:d', ...)`, but not `cast('a:b', ...)`

* `on('a:b:**', callback)` can subscribe to `cast('a:b:c',. ..)`

* `on('*:b:*' , callback)` can subscribe to `cast('a:b:c', ...)`

* `on('a:*:*' , callback)` can subscribe to `cast('a:b:c', ...)`

## License

[MIT](https://github.com/cristiammercado/ng-event-bus/blob/master/LICENSE)
