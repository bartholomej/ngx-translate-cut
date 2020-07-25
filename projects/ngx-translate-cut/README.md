# NgxTranslateCut Pipe

[![npm version](https://badge.fury.io/js/ngx-translate-cut.svg)](https://badge.fury.io/js/ngx-translate-cut)
[![Build & Publish](https://github.com/bartholomej/ngx-translate-cut/workflows/Build%20&%20Publish/badge.svg?branch=master)](https://github.com/bartholomej/ngx-translate-cut/actions)
[![volkswagen status](https://auchenberg.github.io/volkswagen/volkswargen_ci.svg?v=1)](https://github.com/auchenberg/volkswagen)

> Angular pipe for cutting translations ✂️ 🌍 (plugin for [@ngx-translate](https://github.com/ngx-translate/core))

> ✓ _Angular 10, Ivy and Angular Universal (SSR) compatible_

Here's the [demo](http://bartholomej.github.io/ngx-translate-cut/) or [stackblitz live preview](https://stackblitz.com/edit/ngx-translate-cut)

## Install

_Make sure you have installed [@ngx-translate](https://github.com/ngx-translate/core) library_

1. Use yarn (or npm) to install the package

```terminal
yarn add ngx-translate-cut
```

2. Add NgxTranslateCutModule into your module `imports`

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

<strong>
  {{ 'demo' | translate | translateCut:1 }}
</strong>

{{ 'demo' | translate | translateCut:2 }}

<a href="#">
  {{ 'demo' | translate | translateCut:3 }}
</a>
```

### Result

> This is only one 'translate string' with <strong>strong</strong> text and [links](https://github.com/bartholomej/ngx-translate-cut/)

## Options

If you are not satisfied with the basic settings of the separator (which is `|`), you can choose your own separator

```typescript
  import { NgxTranslateCutModule } from 'ngx-translate-cut';

  @NgModule({
   // ...
   imports: [
     // ...
     NgxTranslateCutModule.forRoot({
      // Your separator in translation strings will be `*`
      separator: '*'
    }),
   ]
  })
```

## Dependencies

[@ngx-translate/core](https://github.com/ngx-translate/core)

## License

Copyright &copy; 2020 [Lukas Bartak](http://bartweb.cz)

Proudly powered by nature 🗻, wind 💨, tea 🍵 and beer 🍺 ;)

All contents are licensed under the [MIT license].

[mit license]: LICENSE

## Donation

If this project have helped you save time please consider [making a donation](https://github.com/sponsors/bartholomej) for some 🍺 or 🍵 ;)

## Thanks to

Original idea comes from: [@yuristsepaniuk](https://github.com/yuristsepaniuk) in [this thread](https://github.com/ngx-translate/core/issues/223).
