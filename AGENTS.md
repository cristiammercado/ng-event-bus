# Repository guidance

This repository is an Angular workspace for the public `ng-event-bus` npm
package and its integration demo. Keep changes focused, backward-compatible
when possible, and easy for consumers to adopt.

## Workspace structure

- `projects/ng-event-bus/` contains the publishable library.
- `projects/ng-event-bus/src/public-api.ts` defines the complete public API.
- `projects/demo/` is the local integration application.
- `dist/` is generated output. Never edit or commit it.
- `README.md` and `projects/ng-event-bus/README.md` must remain synchronized;
  the latter is copied into the npm package.

## Package and version policy

- Pin root `devDependencies` to exact versions.
- Use supported semver ranges for runtime dependencies.
- Declare Angular and RxJS packages consumed by the published library as peer
  dependencies.
- Keep `tslib` as a runtime dependency of the published package.
- Keep Angular package versions aligned within the same minor release.
- The `ng-event-bus` major currently follows the supported Angular major.
- Do not change the public package version unless the task explicitly includes
  preparing a release.
- Do not manually add generated `exports`, `module`, or `typings` fields to the
  library manifest; `ng-packagr` generates them.

## TypeScript

- Keep strict type checking enabled.
- Prefer inference when the type is obvious.
- Do not introduce `any`; use a generic, a specific type, or `unknown`.
- Use `readonly` for references that are not reassigned.
- Keep transformations pure when practical.
- Preserve the modern workspace settings, including `isolatedModules`,
  `module: "preserve"`, and TypeScript project references.

## Library code

- Treat everything exported from `src/public-api.ts` as public API.
- Avoid breaking exported names, method signatures, event matching semantics,
  or metadata fields without an explicit breaking-change decision.
- Keep the library small and framework-idiomatic; do not add application-level
  concerns to the event bus.
- Preserve generic payload typing through `cast<T>`, `on<T>`, and
  `MetaData<T>`.
- Import public library symbols in consumers through `ng-event-bus`; do not use
  deep imports into `projects/ng-event-bus/src`.
- Prefer RxJS operators imported from `rxjs`.
- Remember that the bus uses a non-replaying `Subject`: subscribe before
  publishing in tests and examples.

## Angular demo

- Use standalone components. In Angular 20+, do not add `standalone: true`.
- Do not set `ChangeDetectionStrategy.OnPush` explicitly; it is the Angular 22
  default used by this workspace.
- Keep the demo zoneless unless a concrete requirement proves otherwise.
- Use `inject()` instead of constructor injection for new or updated code.
- Use signals for component state and `computed()` for derived state.
- Use `input()`, `output()`, and `model()` instead of the legacy property
  decorators when adding component APIs.
- Use `linkedSignal()` when independently changing inputs must keep derived
  writable state synchronized.
- Use native template control flow (`@if`, `@for`, and `@switch`).
- Do not mutate data from templates. In particular, avoid methods such as
  `reverse()` or `sort()` in template expressions.
- Use `takeUntilDestroyed` for infinite subscriptions owned by a component.
- Put host bindings and listeners in the component or directive `host` object;
  do not introduce `@HostBinding` or `@HostListener`.
- Prefer inline templates only for genuinely small components.
- Keep external template and style paths relative to their component file.
- Do not use `ngClass` or `ngStyle`; use class and style bindings.
- Prefer Signal Forms for new forms; otherwise use reactive forms.
- Use `NgOptimizedImage` for static image files. It does not apply to inline
  base64 images.
- Keep template expressions simple and do not assume JavaScript globals are
  available.
- Put static assets in `projects/demo/public/`.

## Accessibility

- Meet WCAG AA expectations in demo changes.
- Use semantic elements and associated labels for form controls.
- Preserve visible keyboard focus.
- Ensure all interactive controls are keyboard accessible.
- Add ARIA only when native HTML semantics are insufficient.
- New UI behavior should be testable with AXE-compatible markup.

## Tests

- Use Vitest through the Angular `@angular/build:unit-test` builder.
- Place specs beside the source they test and use the `*.spec.ts` suffix.
- Test observable behavior by subscribing before calling `cast()`.
- Ensure expectations are actually executed; avoid callback-only assertions
  that can silently pass when no value is emitted.
- Add regression tests for fixes and boundary tests for wildcard semantics.
- Add demo tests when behavior crosses the package/application boundary.
- Do not reintroduce Karma, Jasmine-specific APIs, or browser launchers.

## Required validation

Run checks proportional to the change. Before completing infrastructure,
library, or demo work, run:

```bash
npm run prettier:check
npm test -- --watch=false
npm run test:coverage
npm run build:all
```

For package or public API changes, also inspect the generated package:

```bash
cd dist/ng-event-bus
npm pack --dry-run
```

Remove generated `dist/` output after validation.

## Documentation

- Keep examples compatible with the currently supported Angular version.
- Prefer standalone application configuration and `inject()` in examples.
- Document subscription cleanup with `takeUntilDestroyed`.
- Keep the compatibility table synchronized with the package version.
- Update both README files in the same change.
- Use clear English for public documentation and comments.

## Scope and safety

- Preserve unrelated user changes in a dirty worktree.
- Do not edit generated lockfile content by hand; regenerate it with npm.
- Do not publish, tag, commit, or push unless explicitly requested.
- Avoid broad refactors when a focused change satisfies the task.
