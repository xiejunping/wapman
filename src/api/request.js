/**
 * 接口请求主要方法
 * option
 */

import axios from 'axios';
import Raven from 'raven-js';
import {HOST_API, CODE_OK, CODE_ERR} from 'api/config';
import {error} from 'common/js/toast';
import {getStorage} from 'common/js/api';
import {timeout} from 'common/js/utils';
import {sendEvent} from 'common/js/native';

// 蜂控日志 接口
function ravenJs(option, res, err) {
  if (process.env.NODE_ENV !== 'production') return;
  Raven.captureMessage(HOST_API + option.url, {
    level: 'info',
    extra: {
      type: option.type,
      url: HOST_API + option.url,
      data: option.data,
      params: option.params,
      response: res,
      error: err
    }
  });
}

export default function (option) {
  option = Object.assign({}, {
    type: 'GET',
    timeout: 30000,
    resType: 'json',
    contentType: 'application/json'
  }, option);

  axios.request({
    baseURL: HOST_API,
    url: option.url,
    method: option.type,
    params: option.params,
    data: option.data,
    timeout: option.timeout,
    headers: {
      'Token': getStorage('token'),
      'Client': 'app'
    },
    withCredentials: false,
    auth: {},
    responseType: option.resType,
    onUploadProgress: option.onUpload,
    onDownloadProgress: option.onDown,
    validateStatus: function (status) {
      return status >= 200 && status < 300;
    },
    maxContentLength: 2000
  }).then(res => {
    ravenJs(option, res);
    let body = res.data || {};
    if (CODE_OK === body.ret) {
      if (typeof body.data === 'undefined') {
        error('接口返回数据中没有"data"');
      } else {
        option.success(body.data);
      }
    } else if (CODE_ERR === body.ret) {
      error('登陆信息失效，请重新登录');
      timeout(3000).then(() => sendEvent('loginout'));
    } else {
      body.msg = body.msg.replace(/非法请求：/g, '');
      if (option.error) {
        option.error(body.msg);
      } else {
        error(body.msg || '请求返回错误');
      }
    }
  }).catch(err => {
    option.faild(err);
    ravenJs(option, 'error', err);
  });
};
