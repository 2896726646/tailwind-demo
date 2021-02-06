const mix = require("laravel-mix");

mix
  .postCss("resources/css/app.css", "css", [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
  ])
  .setPublicPath("public");
