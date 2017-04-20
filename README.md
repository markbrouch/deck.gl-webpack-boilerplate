# deck.gl Webpack 2 Boilerplate

This boilerplate will get you up and running with Uber's [deck.gl](http://uber.github.io/deck.gl/) data visualization library on Webpack 2. You'll need an API key from [Mapbox](https://www.mapbox.com/mapbox-gl-js/api/) to run.

## Installation
1. Clone this repository:
```bash
git clone https://github.com/markbrouch/deck.gl-webpack-boilerplate.git && cd deck.gl-webpack-boilerplate
```
2. Install dependencies:
```bash
yarn
```
3. Start dev server with Mapbox token:
```bash
MAPBOX_ACCESS_TOKEN=<your mapbox api key here> npm start
```
4. Open [http://localhost:8000](http://localhost:8000) in your browser.

## Heroku
If you choose to deploy on Heroku, you'll need to install Ubuntu packages with the [heroku-buildpack-apt](https://github.com/heroku/heroku-buildpack-apt) buildpack. Use the provided Aptfile in this boilerplate.
