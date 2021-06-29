const mix = require('laravel-mix');

mix.postCss('resources/css/app.css', 'css', [
    require('postcss-import'),
    require('tailwindcss'),
]).setPublicPath('public');

if (mix.inProduction()) {
    mix.version();
}
