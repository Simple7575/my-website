Create your app

```
create-react-app my-app
cd my-app
```

Eject it, so that we can modify webpack config

```
npm run eject
y # when prompted
```

Install the necessary loaders

```
yarn add glslify-loader raw-loader
```

Edit config/webpack.config.dev.js. Add to <mark>module.rules</mark> in the <mark>oneOf</mark> section

```js
{
    test: /\.(glsl|frag|vert)$/,
    use: [
    require.resolve('raw-loader'),
    require.resolve('glslify-loader'),
    ]
},
```

At this point you should be able to require your shader files by just doing

```
import myShader from './myShader.glsl'
```

Within your shader, you can import from other shaders

```
// in myShader.glsl

// import from node_modules
import noise from 'glsl-noise/simplex/2d'

// import from relative
import foo from './lib/foo.glsl';
```

In the later case, you'll also want to export from foo.glsl

```
#pragma glslify: export(foo)
```

> # <mark>WARNING!</mark>

## After <mark>npm run eject</mark> you might get an eslint error

## to fix it in <mark>package.json</mark> add following code

```js
 "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ],
    "parserOptions": {
      "babelOptions": {
        "presets": [
          ["babel-preset-react-app", false],
          'babel-preset-react-app/prod'
        ]
      }
    }
  },
```

# Thank you for this guide! To do this without ejecting, we can use the following <mark>.rescriptsrc</mark> file:

```js
const { edit, getPaths } = require("@rescripts/utilities");

const predicate = (valueToTest) => {
    return valueToTest.oneOf;
};

const transform = (match) => ({
    ...match,
    oneOf: [
        // Need to add as second-to-last to avoid being intercepted by the file-loader in CRA
        ...match.oneOf.slice(0, -1),
        {
            test: /\.(glsl|frag|vert)$/,
            exclude: [/node_modules/],
            use: ["raw-loader", "glslify-loader"],
        },
        ...match.oneOf.slice(-1),
    ],
});

function rescriptGlslifyPlugin() {
    return (config) => {
        const matchingPaths = getPaths(predicate, config);
        return edit(transform, matchingPaths, config);
    };
}

module.exports = [[rescriptGlslifyPlugin]];
```
