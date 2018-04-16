# webpack-issue-7057
Minimal repro case for https://github.com/webpack/webpack/issues/7057

## Usage
```
npm install && npx webpack
```

Output
```
ERROR in ./src/data.js (./loader.js!./src/data.js)
Module parse failed: Unexpected token (1:4)
You may need an appropriate loader to handle this file type.
| {"a":"a","b":"b"}
 @ ./src/index.js 1:12-42
```
