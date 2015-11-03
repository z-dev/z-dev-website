// This puts a <style> tag in <head> of page with transpiled css.
require('../styles/main.scss')
// Import bootstrap (which requires jQuery)
require('imports?jQuery=jquery!bootstrap-sass')
var smoothScroll = require('smooth-scroll')
smoothScroll.init({
  offset: 90,
  speed: 200
})
