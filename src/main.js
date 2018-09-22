import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {config} from './apikey'
import firebase from 'firebase'

Vue.config.productionTip = false


firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
