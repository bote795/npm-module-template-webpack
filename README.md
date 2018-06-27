# npm-module-template-webpack
got `libary` example code from: 
https://github.com/flexdinesh/npm-module-boilerplate

**Start developing your NPM module in seconds** ✨

# Features

* **ES6/ESNext** - Write _ES6_ code and _webpack_ will transpile it to ES5 for backwards compatibility
* **Test** - _Mocha_ with _Istanbul_ coverage and report to _Coveralls.io_
* **Lint** - Preconfigured _ESlint_ with _Airbnb_ config
* **CI** - _CircleCI_ configuration setup
* **Minify** - Built code will be minified for performance
* **JSDocs** - Generate Doc files with _documentationjs_

# Commands
- `npm run dev` - webpack will listen to changes and transpile ES6 => ES5
- `npm run clean` - Remove `dist/` directory
- `npm test` - Run tests with linting and coverage results.
- `npm test:only` - Run tests without linting or coverage.
- `npm test:prod` - Run tests with minified code.
- `npm run test:examples` - Test written examples on pure JS for better understanding module usage.
- `npm run lint` - Run ESlint with airbnb-config
- `npm run cover:only` - Get coverage report for your code without sending it to coveralls.io
- `npm run cover` - Get coverage report for your code and send it to coveralls.io
- `npm run build` - webpack will transpile ES6 => ES5 and minify the code.
- `npm run prepack` - Hook for npm. Do all the checks before publishing your module.
- `npm run documentationjs` - Run to generate `docs/` based of using `JSDocs`

# Installation
Just clone this repo and remove `.git` folder.
