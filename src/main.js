import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import ElementUI from 'element-ui';
import Router from 'vue-router';
import http from './api/http.js'
import api from './api/api'
import 'element-ui/lib/theme-chalk/index.css';
import "font-awesome/css/font-awesome.css";

Vue.use(ElementUI);
Vue.use(Router);

Vue.config.productionTip = false
Vue.prototype.http = http
Vue.prototype.api = api

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = '后台管理系统-'+to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
