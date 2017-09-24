import Cloud from 'cloud/index';
import {error} from 'common/js/toast';
import {ERR_CODE, ERR_USER_CODE, ERR_MODULE} from './code';

let wx;

Cloud('wx').then((module) => {
  wx = module;
}, name => {
  error(name + ERR_MODULE);
});

export function auth() {
  return new Promise((resolve, reject) => {
    wx.auth({
      apiKey: ''
    }, (ret, err) => {
      if (err.code) {
        err.code = err.code === 1 && 2;
        err.code = err.code === 2 && 4;
        err.code = err.code === 3 && 100;
        error(ERR_CODE[err.code]);
        return;
      }

      if (ret) {
        if (ret.status) {
          resolve(ret.code);
        } else {
          error(ERR_CODE['99']);
        }
      }
    });
  });
}

export function getToken(code, callback) {
  wx.getToken({
    apiKey: '',
    apiSecret: '',
    code: code
  }, (ret, err) => {
    if (err.code) {
      error(ERR_CODE[err.code]);
      return;
    }

    if (ret) {
      if (ret.status) {
        callback(ret);
      } else {
        error(ERR_CODE['98']);
      }
    }
  });
}

export function refreshToken(token, callback) {
  wx.refreshToken({
    apiKey: '',
    dynamicToken: token
  }, (ret, err) => {
    if (err.code > 1) err.code += 10;
    if (err.code) {
      error(ERR_CODE[err.code]);
      return;
    }

    if (ret) {
      if (ret.status) {
        callback(ret);
      } else {
        error(ERR_CODE[15]);
      }
    }
  });
}

export function getUserInfo(option, callback) {
  wx.getUserInfo(Object.assign({}, {
    lang: 'zh_CN'
  }, option), (ret, err) => {
    if (err.code === 1) {
      refreshToken(option.dynamicToken, (ret) => {
        callback(ret);
      });
    } else if (err.code) {
      error(ERR_USER_CODE[err.code]);
      return;
    }

    if (ret) {
      if (ret.status) {
        callback(ret);
      } else {
        error(ERR_USER_CODE[9]);
      }
    }
  });
}

export function isInstalled() {
  return new Promise((resolve, reject) => {
    wx.isInstalled((ret, err) => {
      if (err.code) {
        error(ERR_CODE[err.code]);
        return;
      }
      if (ret) {
        if (ret.installed) {
          resolve();
        } else {
          error(ERR_CODE['100']);
        }
      }
    });
  });
}

export function shareWebpage(option) {
  wx.shareWebpage(Object.assign({}, {
    apiKey: '',
    scene: 'session'
  }, option), (ret, err) => {
    if (err.code) {
      error(ERR_CODE[err.code]);
      return;
    }
    return ret && ret.status;
  });
}

export function shareText(option) {
  wx.shareText(Object.assign({}, {
    apiKey: '',
    scene: 'timeline'
  }, option), (ret, err) => {
    if (err.code) {
      error(ERR_CODE[err.code]);
      return;
    }
    return ret && ret.status;
  });
}

export function shareImage(option) {
  wx.shareImage(Object.assign({}, {
    apiKey: '',
    scene: 'session'
  }, option), (ret, err) => {
    if (err.code) {
      error(ERR_CODE[err.code]);
      return;
    }
    return ret && ret.status;
  });
}

export function shareMusic(option) {
  wx.shareMusic(Object.assign({}, {
    apiKey: '',
    scene: 'timeline'
  }, option), (ret, err) => {
    if (err.code) {
      error(ERR_CODE[err.code]);
      return;
    }
    return ret && ret.status;
  });
}

export function shareVideo(option) {
  wx.shareVideo(Object.assign({}, {
    apiKey: '',
    scene: 'timeline'
  }, option), (ret, err) => {
    if (err.code) {
      error(ERR_CODE[err.code]);
      return;
    }
    return ret && ret.status;
  });
}

export function shareProgram(option) {
  wx.shareProgram(Object.assign({}, {
    apiKey: '',
    scene: 'session'
  }, option), (ret, err) => {
    if (err.code) {
      error(ERR_CODE[err.code]);
      return;
    }
    return ret && ret.status;
  });
}

