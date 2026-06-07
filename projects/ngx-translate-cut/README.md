# ✂️🌍 NgxTranslateCut Pipe

[![npm version](https://badge.fury.io/js/ngx-translate-cut.svg)](https://badge.fury.io/js/ngx-translate-cut)
[![Package License](https://img.shields.io/npm/l/ngx-translate-cut.svg)](https://www.npmjs.com/ngx-translate-cut)
[![Build & Publish](https://github.com/bartholomej/ngx-translate-cut/workflows/Build%20&%20Publish/badge.svg?branch=master)](https://github.com/bartholomej/ngx-translate-cut/actions)
[![NPM Downloads](https://img.shields.io/npm/dm/ngx-translate-cut.svg)](https://www.npmjs.com/ngx-translate-cut)
[![codecov](https://codecov.io/gh/bartholomej/ngx-translate-cut/branch/master/graph/badge.svg?token=FV0ZM2Y3L3)](https://codecov.io/gh/bartholomej/ngx-translate-cut)

> Angular pipe for cutting translations ✂️ 🌍 (plugin for [@ngx-translate](https://github.com/ngx-translate/core))

> ✓ _Angular 22, Angular Universal (SSR), Standalone, Signals and Zoneless compatible_

Here's the [demo](http://bartholomej.github.io/ngx-translate-cut/) or [stackblitz live preview](https://stackblitz.com/edit/ngx-translate-cut)

## Install

1. Make sure you have [@ngx-translate](https://github.com/ngx-translate/core) library installed, because this is its plugin

2. Use `npm` (or `yarn`) to install the package

```bash
npm install ngx-translate-cut
```

Choose the version corresponding to your Angular version:

| Angular             | ngx-translate-cut | Install                            |
| ------------------- | ----------------- | ---------------------------------- |
| **ng22**            | 22.x              | `npm install ngx-translate-cut`    |
| **ng21**            | 21.x              | `npm install ngx-translate-cut@21` |
| **ng20**            | 20.x              | `npm install ngx-translate-cut@20` |
| **ng19**            | 19.x              | `npm install ngx-translate-cut@19` |
| **ng18**            | 18.x              | `npm install ngx-translate-cut@18` |
| **ng17**            | 17.x              | `npm install ngx-translate-cut@17` |
| **ng16**            | 5.x               | `npm install ngx-translate-cut@5`  |
| **ng15**            | 4.x               | `npm install ngx-translate-cut@4`  |
| **ng14**            | 3.x               | `npm install ngx-translate-cut@3`  |
| **ng13**            | 3.x               | `npm install ngx-translate-cut@3`  |
| **ng12** (ivy only) | 2.x               | `npm install ngx-translate-cut@2`  |
| >= 5 =< 12          | 1.x               | `npm install ngx-translate-cut@1`  |

3. Import the pipe or module in your project.

### Standalone (Angular 14+, Recommended)

Just import `NgxTranslateCutPipe` in your component's `imports` array:

```typescript
import { NgxTranslateCutPipe } from 'ngx-translate-cut';

@Component({
  // ...
  imports: [NgxTranslateCutPipe]
})
export class MyComponent {}
```

### Module-based (Classic)

Add `NgxTranslateCutModule` into your module `imports`.

File `app.module.ts`

```typescript
import { NgxTranslateCutModule } from 'ngx-translate-cut';

@NgModule({
 // ...
 imports: [
   // ...
   NgxTranslateCutModule
 ]
})
```

## Usage

### Definition

Strings are separated with `|` _(pipe sign)_
_[...but you can choose your own symbol](#options)_

File `assets/i18n/en.json`

```json
{
  "demo": "This is only one 'translate string' with | strong text | and | links"
}
```

### Example code

In your template use `translateCut:<number>` pipe right after `translate` pipe from [@ngx-translate](https://github.com/ngx-translate/core) library.

```html
{{ 'demo' | translate | translateCut:0 }}

<strong> {{ 'demo' | translate | translateCut:1 }} </strong>

{{ 'demo' | translate | translateCut:2 }}

<a href="#"> {{ 'demo' | translate | translateCut:3 }} </a>
```

### Result

> This is only one 'translate string' with <strong>strong</strong> text and [links](https://github.com/bartholomej/ngx-translate-cut/)

## Options

### Global Configuration

#### Standalone (Angular 14+)

Configure options globally in your `main.ts` using `provideNgxTranslateCut`:

```typescript
import { provideNgxTranslateCut } from 'ngx-translate-cut';

bootstrapApplication(AppComponent, {
  providers: [
    provideNgxTranslateCut({
      separator: '*',
      trim: false // default is true
    })
  ]
});
```

#### Module-based (Classic)

Configure options via `NgxTranslateCutModule.forRoot()`:

```typescript
import { NgxTranslateCutModule } from 'ngx-translate-cut';

@NgModule({
 // ...
 imports: [
   // ...
   NgxTranslateCutModule.forRoot({
     separator: '*',
     trim: false // default is true
   }),
 ]
})
```

### Component-level Overrides

You can also override options at the component level using Angular's hierarchical DI:

```typescript
import { Component } from '@angular/core';
import { 
  NgxTranslateCutPipe, 
  NGX_TRANSLATE_CUT_OPTIONS, 
  NgxTranslateCutOptionsService 
} from 'ngx-translate-cut';

@Component({
  selector: 'app-special-component',
  imports: [NgxTranslateCutPipe],
  providers: [
    {
      provide: NGX_TRANSLATE_CUT_OPTIONS,
      useValue: { separator: '*' }
    },
    NgxTranslateCutOptionsService
  ]
})
export class SpecialComponent {}
```

## Dependencies

[@ngx-translate/core](https://github.com/ngx-translate/core)

## FAQ

### Older Angular

#### Error

> Failed to compile.
>
> ./node_modules/ngx-translate-cut/fesm2015/ngx-translate-cut.mjs 17:18-28
> Can't import the named export 'Injectable' from non EcmaScript module (only default export is available)

#### Solution

You are probably trying to use this library with an older version of Angular (Angular 5 – 11).

Install compatibility version instead:

```bash
yarn add ngx-translate-cut@1 # for angular 5 – 11
```

## Development (notes for me)

### Publish Stable

```shell
yarn release:patch
# yarn release:minor
# yarn release:major
```

### Publish next channel

1. Bump version `-next.0` in `package.json`
2. `yarn publish:next`

## License

Copyright &copy; 2026 [Lukas Bartak](http://bartweb.cz)

Proudly powered by nature 🗻, wind 💨, films 🎥, books 📖, tea 🍵, chili 🌶 ️and beer 🍺 ;)

All contents are licensed under the [MIT license].

[mit license]: LICENSE

## Donation

If this project have helped you save time please consider [making a donation](https://github.com/sponsors/bartholomej) for some 🍺 or 🍵 ;)

## Thanks to

Original idea comes from: [@yuristsepaniuk](https://github.com/yuristsepaniuk) in [this thread](https://github.com/ngx-translate/core/issues/223).
