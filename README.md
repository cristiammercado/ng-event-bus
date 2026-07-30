# ng-event-bus

RxJS-based message and event bus for Angular applications, inspired by
[NgRadio](https://github.com/govorov/ng-radio).

[![Build status](https://circleci.com/gh/cristiammercado/ng-event-bus.svg?style=shield)](https://circleci.com/gh/cristiammercado/ng-event-bus)
[![npm version](https://badge.fury.io/js/ng-event-bus.svg)](https://www.npmjs.com/package/ng-event-bus)

## Installation

```bash
npm install ng-event-bus
```

## Compatibility

Use the library major that matches your Angular major.

| Angular | ng-event-bus |
| ------- | ------------ |
| 22.x    | 11.x.x       |
| 21.x    | 10.x.x       |
| 20.x    | 9.x.x        |
| 19.x    | 8.x.x        |
| 18.x    | 7.x.x        |
| 17.x    | 6.x.x        |
| 16.x    | 5.1.x        |
| 15.x    | 5.0.x        |
| 14.x    | 4.x.x        |
| 13.x    | 4.x.x        |
| 12.x    | 3.x.x        |
| 11.x    | 2.x.x        |

## Setup

Register `NgEventBus` once at the application level:

```ts
import { ApplicationConfig } from '@angular/core';
import { NgEventBus } from 'ng-event-bus';

export const appConfig: ApplicationConfig = {
  providers: [NgEventBus],
};
```

Then inject it wherever events need to be published or observed:

```ts
import { Component, inject } from '@angular/core';
import { NgEventBus } from 'ng-event-bus';

@Component({
  selector: 'app-example',
  template: `<button type="button" (click)="sendMessage()">Send</button>`,
})
export class Example {
  private readonly eventBus = inject(NgEventBus);

  protected sendMessage(): void {
    this.eventBus.cast('message:greet', { text: 'Hello!' });
  }
}
```

## API

### `cast(key, data?)`

Publishes an event. The key must be a non-empty string. Data is optional and can
be strongly typed:

```ts
interface Greeting {
  text: string;
}

eventBus.cast<Greeting>('message:greet', { text: 'Hello!' });
```

### `on(pattern)`

Returns an `Observable<MetaData<T>>` for events whose keys match the pattern:

```ts
eventBus.on<Greeting>('message:*').subscribe((event) => {
  console.log(event.key);
  console.log(event.data?.text);
});
```

The bus uses a regular RxJS `Subject`, so it does not replay events emitted
before a subscription is created.

## Event patterns

Keys and patterns consist of segments separated by `:`.

- `*` matches exactly one segment.
- `**` matches the remaining segments from its position.

| Subscription pattern | Matches                   | Does not match |
| -------------------- | ------------------------- | -------------- |
| `**`                 | `a`, `a:b`, `a:b:c`       | —              |
| `a`                  | `a`                       | `a:b`          |
| `a:*`                | `a:b`                     | `a`, `a:b:c`   |
| `a:*:*`              | `a:b:c`, `a:x:y`          | `a:b`          |
| `a:**`               | `a:b`, `a:b:c`, `a:b:c:d` | `b:a`          |
| `a:b:*`              | `a:b:c`, `a:b:d`          | `a:b`          |
| `*:b:*`              | `a:b:c`, `x:b:y`          | `a:x:c`        |

Example:

```ts
eventBus.on('error:*').subscribe((event) => {
  // Receives error:http, error:validation, and other two-segment error events.
  console.error(event.data);
});

eventBus.cast('error:http', { status: 500 });
```

## Event metadata

Every subscription receives a `MetaData<T>` instance:

| Property    | Type             | Description                               |
| ----------- | ---------------- | ----------------------------------------- |
| `id`        | `string`         | Unique identifier generated for the event |
| `key`       | `string`         | Original event key                        |
| `data`      | `T \| undefined` | Optional event payload                    |
| `timestamp` | `number`         | Creation time in Unix milliseconds        |

```ts
eventBus.on<Greeting>('message:greet').subscribe((event) => {
  console.log(event.id);
  console.log(event.key);
  console.log(event.data);
  console.log(event.timestamp);
});
```

## Unsubscribing

`on()` returns an infinite observable, so subscriptions should be cleaned up
when their consumer is destroyed. Angular applications can use
`takeUntilDestroyed`:

```ts
import { DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgEventBus } from 'ng-event-bus';

export class Example {
  private readonly eventBus = inject(NgEventBus);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.eventBus
      .on('message:**')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((event) => console.log(event));
  }
}
```

Finite RxJS operators such as `take(1)` are also appropriate when only one
event is expected.

## Development

This repository is an Angular workspace containing the publishable library and
a demo application:

```text
projects/
├── ng-event-bus/  # npm package
└── demo/          # local integration demo
```

Install dependencies and run the checks:

```bash
npm ci
npm run build:all
npm test -- --watch=false
npm run test:coverage
npm run prettier:check
```

Additional commands:

```bash
npm run build       # Build the library package
npm run build:demo  # Build the demo application
npm run watch       # Rebuild the library on changes
npm start           # Serve the demo application
```

Build output is generated under `dist/` and must not be edited manually.
Coverage reports are generated under `coverage/`; open
`coverage/ng-event-bus/index.html` for the library or
`coverage/demo/index.html` for the demo.

## Releases

See [GitHub Releases](https://github.com/cristiammercado/ng-event-bus/releases)
for release notes and version history.

## Support

- Report bugs through [GitHub Issues](https://github.com/cristiammercado/ng-event-bus/issues/new).
- For other questions, email [contact@cristiammercado.com](mailto:contact@cristiammercado.com).

## Contributing

1. Fork the repository.
2. Create a focused branch for the change.
3. Add or update tests.
4. Run the build, tests, and formatting checks.
5. Push the branch and open a pull request.

## License

[MIT](https://github.com/cristiammercado/ng-event-bus/blob/master/LICENSE)
