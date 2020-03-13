# learn_vue_tdd
Learning how to TDD with a Vue application with Jest and VueTestUtils.

Special participation of Typescript.

Basically, the application is an image placeholder from [lorem flickr](https://loremflickr.com/). We will be covering tests with:

- forming an square image
- passing width, height and category to the component
- omitting the category prop
- omitting the category and height props
- omitting the height prop

## To use:
Run the test suit with `test:util`.

Access `main.ts` and play around with the values informed in the `tests\unit\imageplaceholder.spec.ts`.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
