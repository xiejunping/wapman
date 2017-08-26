import {setStorage} from 'common/js/api';

export function apiReady(callback) {
  // console.log(window.apiready);
  if (window.apiready) {
    window.apiready = function () {
      callback();
    };
  } else {
    callback();
  }
}

export function open(option) {
  option = Object.assert({}, option, {
    slidBackEnabled: false
  });
  if (window.api) {
    window.api.openWin(option);
  } else {
    // 如开发用window.location.href 新开页面
    // 用localstorage来存params里的对象
    option.pageParam && setStorage('pageparams', option.pageParam);
    setTimeout(() => {
      window.location.href = option.url;
    }, option.delay);
  }
}

export function back() {
  if (window.api) {
    window.api.historyBack({
      frameName: name
    }, (ret, err) => {
      ret.status && window.api.closeWin();
    });
  } else {
    window.history.go(-1);
  }
}

export function keyBack(callback = {}) {
  if (window.api) {
    addEvent('keyback', callback);
  }
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
  if (window.api) {
    window.api.addEventListener({
      name: name
    }, (ret, err) => {
      callback(ret, err);
    });
  }
}
