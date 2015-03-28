# derby-dev-helpers

> Helpers for developing Derby plugins and components

## Installation

Install as dev dependency:

```bash
$ npm i derby-dev-helpers --save-dev
```

## Preprocess jade and coffee before publishing to npm: 

1. Check out the usage of command line utility:

    ```bash
    $ ./node_modules/.bin/derby-dev-helpers --help
    ```

2. Add compilation of your jade and coffee into `prepublish` section of `package.json` and revert compilation in `postpublish`:

    ```json
    "scripts": {
      "prepublish": "derby-dev-helpers compile -cj",
      "postpublish": "derby-dev-helpers revert -cj"
    }
    ```

3. Publish your package to npm.

## Licence

MIT