import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Menu, Submenu, MenuItem, Card, Button
} from 'element-ui'
Vue.use(Menu)
  .use(Submenu)
  .use(MenuItem)
  .use(Card)
  .use(Button)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
