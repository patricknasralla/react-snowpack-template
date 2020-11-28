My template for front-end React applications using Typescript. 

**Commands:**

* `yarn dev`: launch development server on port 8080
* `yarn build`: build project to `./build`
* `yarn test`: run test suite

**Currently provides:**

* Builds with snowpack, so it's super-fast and easy to configure!
* Hot reloading.
* Support for CSS Modules out of the box thanks to Snowpack.
* Testing via web-test-runner/chai and react-testing-library.
* Full eslint configuration out of the box.
* Common stylelint configuration out of the box.
* Immer as a standard dependency - because you're gonna use Immer, guaranteed.
* Global store powered by Zustand with Immer as middleware so that all state changes occur through Immer. Sweet!
