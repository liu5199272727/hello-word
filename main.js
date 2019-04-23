import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'
import store from './store'
import CommonMethods from './Common.js'
import 'element-ui/lib/theme-chalk/index.css'
import './common.css'
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(CommonMethods)
Vue.prototype.$Image = imgName => `static/assets/${imgName}`
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
