# React "quick as possible" setup guide

1. `> npm init -y` (creates a new package.json)

2. `> mkdir src` (a new directory to hold your source code files)
s
3. `> npm i react react-dom`

4. `> npm i @babel/core @babel/preset-env @babel/preset-react babel-loader html-loader html-webpack-plugin webpack webpack-cli webpack-dev-server -D` (installs your development only dependencies)

5. Create a .babelrc configuration (babel will transpile your ES6+ code to lower ES standard and also will transpile your JSX into `React.createElement()`) file with:

```JSON
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

6. Create a webpack.config.js file with:

```JavaScript
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "js", "index.jsx"),

  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    chunkFilename: "[name].js"
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, "src", "js")],
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
        query: {
          presets: ["@babel/env"]
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: "source-map",

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],

  devServer: {
    contentBase: path.join("/dist/"),
    inline: true,
    host: "0.0.0.0",
    port: 8080
  }
};

```

7. `> cd src`

8. Create a new index.html file in src directory and add a `<div id="appRoot"></div>` in the body

9. `> mkdir js` (to hold all your javascript source code)

10. `> cd js`

11. Creata a index.jsx file which will call the `ReactDOM.render(<App />, document.getElementById("appRoot"))` to init your React app

12. In package.json add to `scripts` the following properties:

```JSON
"start": "webpack-dev-server --open",
"build": "webpack --progress",
```

13. Ensure you have components directory with an App component file to bootstrap your application and that's it! Now you can type `> npm start` to start the webpack dev server.