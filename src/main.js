import Vue from 'vue'

import ElementUI from 'element-ui'
import 'normalize.css/normalize.css'
import '@/styles/element-variables.scss'
import '@/styles/index.scss' // global css

import App from './App.vue'
import router from './router'

import './icons' // icon
import './permission' // permission control

Vue.config.productionTip = false
Vue.use(ElementUI, {
  size: 'small'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
