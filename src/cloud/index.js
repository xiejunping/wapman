import {timeout} from 'common/js/utils';

function isApi(callback) {
  let i = 0, count = 40;

  if (window.api || i > count) {
    callback({
      status: Boolean(window.api)
    });
  } else {
    i++;
    timeout(50).then(() => {
      isApi(callback);
    });
  }
}

export default function requireModule(name) {
  return new Promise((resolve, reject) => {
    isApi(ret => {
      if (ret && ret.status) {
        resolve(window.api.require(name));
      } else {
        reject(name);
      }
    });
  });
}
