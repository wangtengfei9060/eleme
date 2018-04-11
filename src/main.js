
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

import './stylesheets/main.scss'
import './assets/css/animate.css'

import axios from 'axios'

fastclick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
