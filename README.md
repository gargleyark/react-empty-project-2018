# React app template

This is an empty react app template, it includes for your ultimate pleasure:

- [x] React app compiled with webpack/babel etc
- [x] [Jest](https://jestjs.io/)
- [x] [Storybook](https://storybook.js.org/) including Jest coverage view
- [x] [Sass](https://sass-lang.com/)

## Dev instructions

- Clone the repo
- Run `npm install`
- Run `npm run watch-css`
- Run `npm run watch-test`
- Run `npm run storybook`
- Run `npm start`

You need to run the commands in this order to generate the correct css and test files to be consumed by storybook and the app.

### Storybook

Storybook can be found at [http://localhost:6006/](http://localhost:6006/). As you create new components create a new `ComponentName.stories.js` and write stories in it to render it within the Storybook view.

### Jest

Jest coverage report can be found in the `/coverage/lcov-report/index.html` file.

In this project running Jest will generate a `.jest-test-results.json` file, which is used by Storybook to show the test coverage panel.

### Sass

As you create `.scss` files, as long as you are running `watch-css`, a new css file will be generated and updated as you change the `.scss` file.

## Build instructions
- Clone the repo
- Run `npm install`
- Run `npm run build-css`
- Run `npm run build`

The output will then be visible in a `/dist/` folder.
