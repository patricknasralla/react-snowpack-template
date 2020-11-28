# Starter Template!

My (highly opinionated) template for front-end React applications using Typescript. Just fork and start developing without (as much of) the setup headache!

**Commands:**

* `yarn dev`: launch development server on port 8080
* `yarn build`: build project to `./build`
* `yarn test`: run test suite

**Currently provides:**

* Builds with snowpack, so it's super-fast and easy to configure!
* Hot reloading.
* Testing via web-test-runner/chai and react-testing-library.
* Full eslint configuration out of the box.
* Common stylelint configuration out of the box.
* Immer as a standard dependency - because you're gonna use Immer, guaranteed.
* Global store powered by Zustand with Immer as middleware so that all state changes occur through Immer. Sweet!

For added Firestore hooks and functionality, merge in the `/firestore` branch before you start development.
