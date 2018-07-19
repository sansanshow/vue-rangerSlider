import Vue from 'vue'
import App from './App.vue'
import rangeSlider from './lib/index.js'
Vue.use(rangeSlider)
new Vue({
  el: '#app',
  render: h => h(App)
})
