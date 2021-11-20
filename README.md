# from-ndjson

[![License][img-license]][lnk-license]
[![CI Status][img-github]][lnk-github]
[![Code Coverage][img-codecov]][lnk-codecov]
[![NPM Version][img-npm]][lnk-npm]

Convert ndjson stringified data into JSON-object arrays.

## Install

```sh
npm i -E from-ndjson
```

or:

```sh
yarn add -E from-ndjson
```

## Usage

```js
import fromNdjson from 'from-ndjson'

const ndjsonSample = `
  { "some": "thing" }
  { "foo": 17, "bar": false, "quux": true }
  { "may": { "include": "nested", "objects" : ["and", "arrays"] } }
`

const resultArray = fromNdjson(ndjsonSample)

console.log(resultArray[0])
// Output: { some: 'thing' }
console.log(resultArray[1])
// Output: { foo: 17, bar: false, quux: true }
```

## API

### fromNdjson(input, options?)

```ts
function fromNdjson(data: string, options: FromNdjson.Options)
```

#### Options

##### isStrict

Type: `boolean`\
Default: `'false'`

By default, `fromNdjson()` will just skip the rows that `JSON.parse()` can't parse. If you have an ndjson with 5 rows
and 2 unparsable ones, the returned array will only contain 3 rows: the ones that could be parsed.

You can specify `{ isStrict: true }` if you prefer an error to be thrown when a row is invalid.

## Contribute

Please check the [CONTRIBUTING](CONTRIBUTING.md) document.

---

[img-codecov]: https://img.shields.io/codecov/c/github/ivangabriele/from-ndjson/main?style=flat-square
[img-github]: https://img.shields.io/github/workflow/status/ivangabriele/from-ndjson/Check/main?style=flat-square
[img-license]: https://img.shields.io/github/license/ivangabriele/from-ndjson?style=flat-square
[img-npm]: https://img.shields.io/npm/v/from-ndjson?style=flat-square
[lnk-codecov]: https://app.codecov.io/gh/ivangabriele/from-ndjson/branch/main
[lnk-github]: https://github.com/ivangabriele/from-ndjson/actions?query=branch%3Amain++
[lnk-license]: https://github.com/ivangabriele/from-ndjson/blob/main/LICENSE
[lnk-npm]: https://www.npmjs.com/package/from-ndjson
