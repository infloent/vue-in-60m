import Vue from 'vue'
import VueRouter from "vue-router";
import vueResource from 'vue-resource'
import Users from "./components/users";
import Test from "./components/test";

// Vue.config.productionTip = false;

Vue.use(vueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  // mode: 'history',
  // base: __dirname,
  routes: [
    {path: '/', component: Users},
    {path: '/test', component: Test},
  ]
});

new Vue({
  router,
  template: `
    <div id="app">
      <ul> 
        <li><router to="/">Users</router></li>
        <li><router to="/test">Test</router></li>
      </ul>
      <router-view></router-view>
    </div>
  `
}).$mount('#app')
