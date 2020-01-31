# NgxTranslateCut Pipe

> Angular pipe for cutting translations ([@ngx-translate](https://github.com/ngx-translate/core))

> Angular 9, Ivy and SSR compatible

Here's the [demo](http://bartholomej.github.io/ngx-scrolltop/).

## Install

1. Use yarn (or npm) to install the package

```terminal
yarn add ngx-translate-cut
```

2. Add into your module `imports`

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

Strings are separeted with `|` (pipe).

Usually stored in en.json file `assets/i18n/en.json`

```json
{
  "demo": "This is only one translate string with | strong text | and some parts are | underlined"
}
```

### Example code

In your template `translateCut:0`

```
{{ 'demo' | translate | translateCut:0 }}

<strong>
  {{ 'demo' | translate | translateCut:1 }}
</strong>

{{ 'demo' | translate | translateCut:2 }}

<u>
  {{ 'demo' | translate | translateCut:3 }}
</u>
```

### Result

> This is only one translate string with <strong>strong</strong> text and some parts are <u>underlined</u>

## Dependencies

[@ngx-translate/core](https://github.com/ngx-translate/core)

## License

Copyright &copy; 2020 [Lukas Bartak](http://bartweb.cz)

Proudly powered by nature 🗻, wind 💨, tea 🍵 and beer 🍺 ;)

All contents are licensed under the [MIT license].

[mit license]: LICENSE

## Thanks to

Original idea comes from: @yuristsepaniuk [in this thread](https://github.com/ngx-translate/core/issues/223).
