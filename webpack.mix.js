let mix = require('laravel-mix')

mix
.setResourceRoot('../')
.setPublicPath('dist')
.sourceMaps()

if(mix.inProduction()) {
  mix.js(
    'src/get-url.js',
    'js/get-url.min.js'
  )
} else {
  mix.js(
    'src/get-url.js',
    'js/get-url.js'
  )
}
