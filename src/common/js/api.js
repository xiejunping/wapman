const ISANDROID = (/android/gi).test(navigator.appVersion);
const ISIOS = (/ios/gi).test(navigator.appVersion);
const VERSION = parseFloat(navigator.appVersion);

export function trim(str) {
  if (String.prototype.trim) {
    return str === null ? '' : String.prototype.trim.call(str);
  } else {
    return str.replace(/(^\s*)|(\s*$)/g, '');
  }
}

export function trimAll(str) {
  return str.replace(/\s*/g, '');
}

export function isElement(obj) {
 return !!(obj && obj.nodeType === 1);
}

export function setStorage(key, value) {
  let ls = window.localStorage;
  if (ls && arguments.length === 2) {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
      value = 'obj-' + value;
    } else {
      value = 'str-' + value;
    }
    ls.setItem(key, value);
  }
}

export function getStorage(key) {
  let ls = window.localStorage;
  if (ls) {
    let v = ls.getItem(key);
    if (!v) return;
    if (v.indexOf('obj-') === 0) {
      v = v.slice(4);
      return JSON.parse(v);
    } else if (v.indexOf('str-') === 0) {
      return v.slice(4);
    }
  }
}

export function rmStorage(key) {
  let ls = window.localStorage;
  if (ls && key) {
    ls.removeItem(key);
  }
}

export function clearStorage() {
  let ls = window.localStorage;
  ls && ls.clear();
}

export function fixIos7Bar(el) {
  if (!isElement(el)) {
    console.warn('$api.fixIos7Bar Function need el param, el param must be DOM Element');
    return;
  }
  if (ISIOS && window.api) {
    const fullScreen = window.api.fullScreen;
    const iOS7StatusBarAppearance = window.api.iOS7StatusBarAppearance;
    if (VERSION >= 7 && !fullScreen && iOS7StatusBarAppearance) {
      el.style.paddingTop = '20px';
    }
  }
}

export function fixStatusBar(el) {
  if (!isElement(el)) {
    console.warn('$api.fixIos7Bar Function need el param, el param must be DOM Element');
    return;
  }
  if (ISIOS) {
    fixIos7Bar(el);
  } else if (ISANDROID && VERSION >= 4.4) {
    el.style.paddingTop = '25px';
  }
}

export function add(a, b) {
  let c, d, e;
  try {
    c = a.toString().split('.')[1].length;
  } catch (f) {
    c = 0;
  }
  try {
    d = b.toString().split('.')[1].length;
  } catch (f) {
    d = 0;
  }
  return (e = Math.pow(10, Math.max(c, d)), (mul(a, e) + mul(b, e)) / e);
}

export function sub(a, b) {
  let c, d, e;
  try {
    c = a.toString().split('.')[1].length;
  } catch (f) {
    c = 0;
  }
  try {
    d = b.toString().split('.')[1].length;
  } catch (f) {
    d = 0;
  }
  return (e = Math.pow(10, Math.max(c, d)), (mul(a, e) - mul(b, e)) / e);
}

export function mul(a, b) {
  let c = 0,
    d = a.toString(),
    e = b.toString();
  try {
    c += d.split('.')[1].length;
  } catch (f) {}
  try {
    c += e.split('.')[1].length;
  } catch (f) {}
  return Number(d.replace('.', '')) * Number(e.replace('.', '')) / Math.pow(10, c);
}

export function div(a, b) {
  let c, d, e = 0,
    f = 0;
  try {
    e = a.toString().split('.')[1].length;
  } catch (g) {}
  try {
    f = b.toString().split('.')[1].length;
  } catch (g) {}
  return (c = Number(a.toString().replace('.', '')), d = Number(b.toString().replace('.', '')), mul(c / d, Math.pow(10, f - e)));
}
