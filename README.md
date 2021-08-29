# from-ndjson

[![License][img-license]][lnk-license]
[![Build Status][img-github]][lnk-github]
[![NPM Package][img-npm]][lnk-npm]
[![Code Coverage][img-codecov]][lnk-codecov]

Convert ndjson stringified data into JSON-object arrays.

## Usage

```sh
npm i -E from-ndjson
```

```sh
yarn add -E from-ndjson
```

Then extend it in your `.eslintrc`:

```json
{
  "extends": "from-ndjson"
}
```

## Contribution

### Getting Started

```sh
npm i
```

### Releasing

```sh
npm version major|minor|patch
```

This will automatically create a full tagged commit with packages version bump in a version branch before pushing them
to the remote repository.

### Recommended IDE Settings

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "eslint.codeActionsOnSave.mode": "all",
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "eslint.format.enable": true,
  "eslint.packageManager": "npm",
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

---

[img-github]:
  https://img.shields.io/github/workflow/status/ivangabriele/from-ndjson/Test%20&%20Publish/main?style=flat-square
[img-license]: https://img.shields.io/github/license/ivangabriele/from-ndjson?style=flat-square
[lnk-github]: https://github.com/ivangabriele/from-ndjson/actions?query=branch%3Amain++
[lnk-license]: https://github.com/ivangabriele/from-ndjson/blob/main/LICENSE
[img-npm]: https://img.shields.io/npm/v/from-ndjson?style=flat-square
[lnk-npm]: https://www.npmjs.com/package/from-ndjson
[img-codecov]: https://img.shields.io/codecov/c/github/ivangabriele/from-ndjson/main?style=flat-square
[lnk-codecov]: https://app.codecov.io/gh/ivangabriele/from-ndjson/branch/main
