### Modern Js webpack-boilerplate

A basic setup with hot-reload and for rapid easy web application development.

---

#### Disclosure

I have built a simple web application solely for demo purpose using Sass, ES6 and HTML. You can fork it and modified it according to your needs.

---

#### Prerequisites

- Node must be installed

---

#### Getting Started

webpack can compile a file into javascript.

All file(s) or folder(s) should be within **_src_** folder.
Its important to note that **index.js** is mandatory and should be available rigth inside the **_src_** folder. **index.js** is main entry point.

- Inside src folder, any numbers of files or folder can be created.
- Once files are created.
- Update index.js by importing all the modules and other file like scss.
  - `import {module-name} from './some.js'`
  - `import 'styles/main.scss'`
- npm run build
- npm run start:dev

---

#### Project Structure

```
Project
│
│   README.md
│   package.json
│   webpack.config.js
└───src
│   │   index.html
│   │
│   └───assets
│       └───js
│            └───index.js
|            └───shape.js
|            └───validation.js
|
│       └───scss
│            └───styles.scss
│       └───img
│            └───webpack.png
│
└───dist
```

---

#### Installing:

- clone this project

  - `$ git clone "https://github.com/avatarfreak/modern-js-webpack.git"`
  - `$ cd modern_js_webpack`
  - `$ npm install`
  - `$ npm run build`
  - `$ npm run start`

---

This will scaffold the project using the master branch.
The development server will run on port 8080 by default.

- **`http://localhost:8080/`**

---

#### Errors(&#x1F34E;):

```
If came across this error while npm install node-sass:
Failed at the node-sass@4.5.0 postinstall script
```

#### Just Try with this command:

`$ sudo rm -rf package-lock.json node_modules`  
`$ sudo npm cache clean --force`  
`$ sudo npm i --unsafe-perm node-sass`

---

#### Deployment to Github Pages

Deploy your code to **Github Pages**

[https://avatarfreak.github.io/modern-js-webpack/](https://avatarfreak.github.io/modern-js-webpack/)

```
npm run deploy
```

---

#### Built With:

| Plugins                 | Description                                                                                                    |
| ----------------------- | -------------------------------------------------------------------------------------------------------------- |
| @babel/core             | Babel compiler core.                                                                                           |
| @babel/preset-env       | This preset will include all plugins to support modern JavaScript (ES2015, ES2016, etc.)                       |
| babel-loader            | This package allows transpiling JavaScript files using Babel and webpack.                                      |
|                         |                                                                                                                |
| file-loader             | The file-loader resolves import/require() on a file into a url and emits the file into the output directory.   |
| html-loader             | Exports HTML as string. HTML is minimized when the compiler demands.                                           |
| html-webpack-plugin     | Plugin that simplifies creation of HTML files to serve your bundles.                                           |
| mini-css-extract-plugin | This plugin extracts CSS into separate files.                                                                  |
| node-sass               | It allows you to natively compile .scss files to css                                                           |
| sass-loader             | Loads a Sass/SCSS file and compiles it to CSS.                                                                 |
| style-loader            | Adds CSS to the DOM by injecting a `<style>` tag                                                               |
| css-loader              | The css-loader interprets @import and url() like import/require() and will resolve them.                       |
| webpack                 | Its main purpose is to bundle JavaScript files for usage in a browser.                                         |
| webpack-cli             | webpack CLI provides a flexible set of commands.                                                               |
| webpack-dev-server      | Use webpack with a development server that provides live reloading. This should be used for development only . |

---

#### Author

- [avatarfreak](https://github.com/avatarfreak "avatarfreak")
