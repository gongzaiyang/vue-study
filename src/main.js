import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './krouter'
// import router from './router'

Vue.config.productionTip = false
// 事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  router, // 设置router，它怎么起作用？
  render: h => h(App)
}).$mount('#app')
