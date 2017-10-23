import {ISAPP, setStorage} from 'common/js/api';
import {loadingShow, toastClose, error} from 'common/js/toast';

export function apiReady() {
  if (ISAPP) {
    return new Promise((resolve, reject) => {
      window.apiready = () => {
        setStatusBarStyle('light');
        resolve();
      };
    });
  } else {
    return Promise.resolve();
  }
}

export function open(option) {
  option = Object.assign({}, option, {
    slidBackEnabled: false,
    // useWKWebView: true, // ios打开卡顿一下，黑色背景
    historyGestureEnabled: true
  });

  if (window.api) {
    window.api.openWin(option);
    // Apicloud框架中,Android open一个webview时，如果view里的内容很多，打开的速度太慢，
    // 感觉app很卡,用load动画响引操作
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

export function backTo(name) {
  window.api && window.api.closeToWin({
    name: name
  });
}

export function disableBack() {
  let first,
    msg = `再按一次退出${window.api.appName}`;

  addEvent('keyback', ret => {
    if (!first) {
      first = new Date().getTime();
      window.api.toast({
        msg: msg,
        duration: 1500,
        location: 'bottom'
      });
      setTimeout(() => {
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

export function addEvent(name, callback) {
  if (window.api) {
    window.api.addEventListener({
      name: name
    }, (ret, err) => {
      let data = ret && ret.value || {};
      if (err && err.msg) error(err.msg);
      callback(data);
    });
  } else {
    console.warn('api is not be found in addEvent');
  }
}

export function removeEvent(name) {
  if (window.api) {
    window.api.removeEventListener({
      name: name
    });
  } else {
    console.warn('api is not be found in removeEvent');
  }
}

export function sendEvent(name, extra = {}) {
  if (window.api) {
    window.api.sendEvent({
      name: name,
      extra: extra
    });
  } else {
    console.warn('api is not be found in sendEvent');
  }
}

export function setStatusBarStyle(val) {
  if (window.api) {
    window.api.setStatusBarStyle({
      style: val
    });
  } else {
    console.warn('api is not be found in setStatusBarStyle');
  }
}

export function removeLaunch(ms) {
  if (window.api) {
    window.api.removeLaunchView({
      animation: {
        type: 'fade',
        duration: ms
      }
    });
  } else {
    console.warn('api is not be found in removeLaunch');
  }
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

export function openPage() {
  if (window.api) {
    loadingShow('加载中');
    addEvent('removePage', ret => {
      toastClose();
      removeEvent('removePage');
    });
    addEvent('viewdisappear', ret => sendEvent('removePage'));
  } else {
    console.warn('api is not be found in openPage');
  }
}

export function getPicture(option) {
  option = Object.assign({}, {
    sourceType: 'camera',
    encodingType: 'jpg',
    mediaValue: 'pic',
    destinationType: 'url',
    allowEdit: true,
    quality: 80,
    targetWidth: 100,
    targetHeight: 100,
    saveToPhotoAlbum: false
  }, option);

  if (!window.api) return Promise.resolve();
  return new Promise((resolve, reject) => {
    window.api.getPicture(option, (ret, err) => {
      if (ret) {
        let data = option.destinationType === 'base64' ? ret.base64Data : ret.data;
        resolve(data);
      } else {
        err && err.msg && error(err.msg);
      }
    });
  });
}

export function saveMedia(path) {
  window.api && window.api.saveMediaToAlbum({
    path: path
  }, (ret, err) => {
    if (ret && ret.status) {
      error('保存成功');
    } else {
      err & err.msg && error(err.msg);
    }
  });
}

export function imageCache(url) {
  if (!window.api) Promise.reject();
  return new Promise((resolve, reject) => {
    window.api.imageCache({
      url: url
    }, (ret, err) => {
      if (ret) {
        resolve(ret.url);
      } else {
        error(err.msg);
      }
    });
  });
}

