import '@babel/polyfill';
import 'mutationobserver-shim';

import Vue from 'vue';
import VueRouter from 'vue-router';
import './plugins/bootstrap-vue';
import App from './App.vue';

Vue.config.productionTip = false;

import Home from './components/HomeComponent'

const routes = [
  // { path: '/', component: () => import('./components/HomeComponent.vue') },
  { path: '/', component: Home }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app');
