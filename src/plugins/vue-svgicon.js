// Work on IE and old browser
import 'vue-svgicon/dist/polyfill'
import Vue from 'vue'
import SvgIcon from 'vue-svgicon'

// Default tag name is 'svgicon'
Vue.use(SvgIcon, {
  tagName: 'svgicon'
})
