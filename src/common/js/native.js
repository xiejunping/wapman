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
    // Android
    overScrollMode: 'scrolls',
    // iOS
    slidBackEnabled: true,
    slidBackType: 'edge',
    // useWKWebView: true, // ios打开卡顿一下，黑色背景
    historyGestureEnabled: true,
    hideHomeIndicator: true
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

export function openFrame({url, name, rect = {x: 0, y: 0, w: 'auto', h: 'auto'}, pageParam = {}, bounces}) {
  // 处理dpi转换的情况
  const docEl = window.document.documentElement;
  const dpr = parseInt(docEl.getAttribute('data-dpr'), 10);
  const option = {
    url,
    name,
    rect,
    pageParam,
    bounces,
    useWKWebView: true,
    progress: {
      type: 'page',
      color: '#45C01A'
    },
    hScrollBarEnabled: false,
    overScrollMode: 'scrolls'
  };
  if (typeof option.rect.x === 'number') option.rect.x /= dpr;
  if (typeof option.rect.y === 'number') option.rect.y /= dpr;
  if (typeof option.rect.w === 'number') option.rect.w /= dpr;
  if (typeof option.rect.h === 'number') option.rect.h /= dpr;
  if (window.api) {
    window.api.openFrame(option);
  }
}

export function back(name) {
  if (window.api) {
    window.api.historyBack({
      frameName: name
    }, (ret, err) => {
      setScreen('portrait_up');
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

export function getParams() {
  if (window.api) {
    return window.api.pageParam;
  } else {
    return window.$api.getStorage('pageparams', 'object');
  }
};

export function disableBack() {
  let first;
  const msg = `再按一次退出${window.api.appName}`;

  addEvent('keyback').then(ret => {
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
  }).catch(e => {
    alert(e);
  });
}

export function setRefreshHeader() {
  const option = {
    bgColor: '#f2f2f2',
    textColor: '#999',
    textDown: '下拉刷新...',
    textUp: '松开刷新...'
  };
  if (window.api) {
    return new Promise((resolve, reject) => {
      window.api.setRefreshHeaderInfo(option, (ret, err) => {
        console.log('ret:' + JSON.stringify(ret));
        console.log('err:' + err);
        if (err) reject(err);
        else {
          // window.api.refreshHeaderLoading();
          resolve(ret);
        }
      });
    });
  } else {
    console.log('api is not be found in setRefreshHeader');
  }
}

export function setFullScreen(bool) {
  if (window.api) {
    window.api.setFullScreen({
      fullScreen: bool
    });
  } else {
    console.log('api is not be found in setFullScreen');
  }
}

export function setScreen(direction) {
  if (window.api) {
    window.api.setScreenOrientation({
      orientation: direction
    });
  } else {
    console.log('api is not be found in setScreen');
  }
}

export function addEvent(name) {
  if (window.api) {
    return new Promise((resolve, reject) => {
      window.api.addEventListener({
        name: name
      }, (ret, err) => {
        let data = ret && ret.value || {};
        if (err && err.msg) reject(err.msg);
        resolve(data);
      });
    });
  } else {
    console.warn('api is not be found in addEvent');
    return Promise.resolve();
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

export function execScript({winName, frmName, jsfun}) {
  if (window.api) {
    if (!winName) {
      window.api.execScript({
        frameName: frmName,
        script: jsfun
      });
    } else if (!frmName) {
      window.api.execScript({
        name: winName,
        script: jsfun
      });
    } else {
      window.api.execScript({
        name: winName,
        frameName: frmName,
        script: jsfun
      });
    }
  } else {
    console.warn('api is not be found in execScript');
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
    addEvent('removePage').then(ret => {
      toastClose();
      removeEvent('removePage');
    }).catch(e => {
      alert(e);
    });
    addEvent('viewdisappear').then(ret => sendEvent('removePage')).catch(e => {
      alert(e);
    });
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

