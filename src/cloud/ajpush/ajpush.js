import {ISANDROID, ISIOS} from 'common/js/api';
import {error} from 'common/js/toast';

let ajpush = null;

export function init(userId) {
  ajpush = ajpush || requireModule();
  if (!userId) {
    error('用户ID无效，无法启动推送服务');
    return;
  }

  ajpush && isStoped(userId);
}

function start(tag) {
  if (ajpush) {
    if (ISANDROID) {
      ajpush.init(ret => {
        ret && ret.status && bindTags(tag);
      });
    } else  bindTags(tag);
  }
}

function bindTags(tag) {
  ajpush && ajpush.bindAliasAndTags({
    alias: tag
  }, ret => {
    ret && ret.statusCode && setListener(tag);
  });
}

function setListener(tag) {
  ajpush && ajpush.setListener(ret => {
    error(JSON.stringify(ret));
  });
}

function isStoped(tag) {
  ajpush && ajpush.isPushStopped(ret => {
    if (ret) {
      if (ret.isStopped) reStart(tag);
      else start(tag);
    } else error('极光推送 isPushStopped 方法回调错误');
  });
}

function reStart(tag) {
  ajpush && ajpush.resumePush(ret => {
    ret && ret.status && start(tag);
  });
}

function exit() {
  if (ajpush) {
    if (ISANDROID) {
      ajpush.init(ret => {
        ret && ret.status && rmBindTags();
      });
    } else rmBindTags();
  }
}

function clear() {
  ajpush && ajpush.setBadge({badge: 0});
  ajpush && ajpush.clearNotification({id: -1}, ret => {
    ret && !ret.status && error('清除失败');
  });
}

function rmBindTags() {
  ajpush && ajpush.bindAliasAndTags({
    alias: 'moon',
  }, ret => {
    ret && ret.statusCode && ajpush.removeListener();
  });
}

function requireModule() {
  return window.api && window.api.require('ajpush');
}
