import 'common/js/global';
import {apiReady, backTo, removeLaunch, addEvent, sendEvent} from 'common/js/native';
import {getStorage, setStorage, clearStorage} from 'common/js/api';
import {timeout} from 'common/js/utils';

import Vue from 'vue';
import App from './App';
import router from './router';

/* eslint-disable no-new */
apiReady().then(() => {
  // 监听事件
  addEvent('home').then(ret => eventHome()).catch(e => { alert(e); });
  addEvent('login').then(ret => eventLogin(ret)).catch(e => { alert(e); });
  addEvent('loginout').then(ret => eventLoginOut()).catch(e => { alert(e); });

  timeout(2000).then(() => removeLaunch(2000));

  // 路由模式
  let Vm = new Vue({
    el: '#app',
    router,
    methods: {
      goHome() {
        this.$router.replace({
          name: 'index'
        });
      },
      goLogin() {
        this.$router.replace({
          name: 'login'
        });
      }
    },
    render: h => h(App)
  });

  function eventHome() {
    let userData = getStorage('userData');
    if (userData && userData.id) {
      Vm.goHome();
    } else {
      Vm.goLogin();
    }
  }

  function eventLoginOut() {
    let userData = getStorage('userData');
    clearStorage();
    sendEvent('home');
    userData && setStorage('userCode', userData.name);
    timeout(500).then(() => backTo('root'));
  }

  function eventLogin(data) {
    setStorage('userData', data);
    setStorage('token', data.token);
    timeout(500).then(() => sendEvent('home'));
  }
});
