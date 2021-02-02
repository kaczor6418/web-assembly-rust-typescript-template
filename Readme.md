# How to connect WebAssembly-Rust with TypeScript (WebComponents)

## What you will need:

 - **[`npm and node.js`](https://www.npmjs.com/get-npm)**
 - **[`rust and cargo`](https://www.rust-lang.org/tools/install)**
 - **[`wasm-pack`](https://rustwasm.github.io/wasm-pack/installer/)**
 - **[`webpack 5`](https://webpack.js.org/)**

## How to set up project

### Set-up

## What you will need:

 - **[`npm and node.js`](https://www.npmjs.com/get-npm)**
 - **[`rust and cargo`](https://www.rust-lang.org/tools/install)**
 - **[`wasm-pack`](https://rustwasm.github.io/wasm-pack/installer/)**
 - **[`webpack 5`](https://webpack.js.org/)**

## How to set up project

### Set-up

#### Web - TypeScript part

 1. Initialize npm project
	   ```
	   npm init -y
	   ```
 2. Install the following dependencies
	   ```
	   npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin ts-loader typescript
	   ```
 3. Create *`index.js`* file and export your App (this will be an entry point of your application)
	   ```typescript
	   export { App } from './App';
	   ```
 4. Create *`bootstrap.ts`* file in which you will import your *`index.js`* asynchronously. We have to load the app asynchronously because `.wasm` files have to be loaded asynchronously
	   ```typescript
	   import('./index').catch(e => console.error('Error importing **index.ts**:', e));
	   ```
 5. Create `webpack.config.js`. Here we have to use `experimetns: syncWebAssembly` to load our `.wasm` files
	   ```javascript
	   experiments: {
             syncWebAssembly: true
           }
	   ```
 6. Add `serve` and `build` script to your *`package.json`*
	   ```json
	   "scripts": {
             "serve": "webpack serve",
             "build": "webpack"
           }
	   ``` 

#### WebAssembly - Rust part
 
 1. In root of your project create wasm project using `wasm-pack`
	   ```
	   wasm-pack new name-of-package
	   ```
 2. Go to package directory
    ```
    cd ./name-of-package
    ```
 3. Run `wasm-pack build` to build your wasm package 

### Link wasm-package with TypeScript code

 1. Install your wasm package (if you publish your wasm package then you can install it via `npm`)  
	   ```
	   npm install wasm-package-name/pkg
	   ```
 2. Make sure that you can find this dependecy in your *`package.json`*
	   ```json
	   "dependencies": {
	     "wasm-package-name": "file:./wasm-package-name/pkg"
	   }
	   ```
 3. Make sure you have `"moduleResolution": "node"` in your *`tsconfig.json`*
