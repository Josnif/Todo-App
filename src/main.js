import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/style.css'
import './assets/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueMobileDetection from 'vue-mobile-detection'
Vue.use(VueMobileDetection)

Vue.config.productionTip = false;

const uid = () => {
  return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
}

Vue.prototype.$store = store;
Vue.prototype.$uid = uid;


// const cc = require('cryptocompare')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
