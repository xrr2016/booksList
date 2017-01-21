import Vue from 'vue'
import App from './App'
import WildVue from 'wildvue'

Vue.use(WildVue)

new Vue({
  render: h => h(App)
}).$mount('#app')
