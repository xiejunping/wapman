import {setStorage} from 'common/js/api';
import {loadingShow, toastClose} from 'common/js/toast';

export function apiReady(callback) {
  if (window.apiready) {
    window.apiready = function () {
      callback();
    };
  } else {
    callback();
  }
}

export function open(option) {
  option = Object.assign({}, option, {
    slidBackEnabled: false,
    useWKWebView: true,
    historyGestureEnabled: true
  });

  if (window.api) {
    window.api.openWin(option);
    openPage();
  } else {
    // 如开发用window.location.href 新开页面
    // 用localstorage来存params里的对象
    option.pageParam && setStorage('pageparams', option.pageParam);
    setTimeout(() => {
      window.location.href = option.url;
    }, option.delay);
  }
}

export function back(name) {
  if (window.api) {
    window.api.historyBack({
      frameName: name
    }, (ret, err) => {
      !ret.status && window.api.closeWin();
    });
  } else {
    window.history.go(-1);
  }
}

export function keyBack(callback = {}) {
  window.api && addEvent('keyback', callback);
}

export function disableBack() {
  if (window.api) {
    let first;
    keyBack((ret, err) => {
      if (!first) {
        first = new Date().getTime();
        window.api.toast({
          msg: `再按一次退出${window.api.appName}`,
          duration: 1500,
          lacation: 'bottom'
        });
        setTimeout(function () {
          first = null;
        }, 1000);
      } else {
        if (new Date().getTime() - first < 2000) {
          window.api.closeWidget({
            silent: true
          });
        }
      }
    });
  }
}

export function addEvent(name, callback) {
  window.api && window.api.addEventListener({
    name: name
  }, (ret, err) => {
    callback(ret, err);
  });
}

export function removeEvent(name) {
  window.api && window.api.removeEventListener({
    name: name
  });
}

export function sendEvent(name, extra) {
  window.api && window.api.sendEvent({
    name: name,
    extra: extra
  });
}

export function setStatusBarStyle(val) {
  if (window.api) {
    window.api.setStatusBarStyle({style: val});
  }
}

export function removeLaunch(ms) {
  window.api && window.api.removeLaunchView({
    animation: {
      type: 'fade',
      duration: ms
    }
  });
}

export function showProgress(option) {
  window.api && window.api.showProgress({
    animationType: option.type,
    title: option.title,
    text: option.text,
    modal: false
  });
}

export function hideProgress() {
  window.api && window.api.hideProgress();
}

export function disappear(callback) {
  window.api && window.api.addEventListener({
    name: 'viewdisappear'
  }, (ret, err) => {
    callback(ret, err);
  });
}

export function listenPage() {
  addEvent('removePage', (ret, err) => {
    toastClose();
  });
}

export function openPage() {
  if (window.api) {
    loadingShow('加载中');
    listenPage();
    disappear((ret, err) => {
      sendEvent('removePage', null);
      removeEvent('removePage');
    });
  }
}
