import 'common/js/global';
import {apiReady, open, backTo, removeLaunch, addEvent, sendEvent} from 'common/js/native';
import {getStorage, setStorage, clearStorage} from 'common/js/api';
import {timeout} from 'common/js/utils';

/* eslint-disable no-new */
apiReady().then(() => {
  // 监听事件
  addEvent('home', ret => eventHome());
  addEvent('login', ret => eventLogin(ret));
  addEvent('loginout', ret => eventLoginOut());

  // 启动
  eventHome();
  timeout(2000).then(() => {
    removeLaunch(2000);
  });
});

function eventHome() {
  let userData = getStorage('userData');
  if (userData && userData.id) {
    goHome();
  } else {
    goLogin();
  }
}

function eventLoginOut() {
  let userData = getStorage('userData');
  backTo('root');
  clearStorage();
  userData && setStorage('userCode', userData.name);
  timeout(500).then(() => sendEvent('home'));
}

function eventLogin(data) {
  backTo('root');
  setStorage('userData', data);
  setStorage('token', data.token);
  timeout(500).then(() => sendEvent('home'));
}

function goHome() {
  open({
    name: 'index',
    url: './index.html'
  });
}

function goLogin() {
  open({
    name: 'login',
    url: './login.html'
  });
}
