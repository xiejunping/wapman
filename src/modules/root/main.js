import 'common/js/global';
import {apiReady, open} from 'common/js/native';
import {getStorage} from 'common/js/api';

/* eslint-disable no-new */
apiReady(() => {
  let userData = getStorage('userData');

  if (userData && userData.userId) {
    goLogin();
  } else {
    goHome();
  }
});

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
