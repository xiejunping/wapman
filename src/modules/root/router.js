import Vue from 'vue';
import Router from 'vue-router';

import Login from '../login/App';
import Index from '../index/App';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login,
      name: 'login'
    },
    {
      path: '/index',
      component: Index,
      name: 'index'
    }
  ]
});
