let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const VueLoaderPlugin = require('vue-loader/lib/plugin')
// vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin n your webpack config
mix.js('resources/assets/js/app.js', 'public/js')
  .sass('resources/assets/sass/app.scss', 'public/css')
  .webpackConfig({
    plugins: [
      new VueLoaderPlugin()
    ]
  });
