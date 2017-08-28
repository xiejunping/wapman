import axios from 'axios';
import {toastAutoClose} from 'common/js/toast';
import {HOST_API, CODE_OK, CODE_ERR} from 'api/config';

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
    headers: {},
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
    let body = res.data || {};
    if (CODE_OK === body.code) {
      if (typeof body.data === 'object') {
        option.success(body.data);
      } else {
        toastAutoClose({
          title: '接口返回数据中没有"data"'
        });
      }
    } else if (CODE_ERR === body.code) {
      toastAutoClose({
        title: '用户登陆信息失效，请重新登录'
      });
    } else {
      if (option.error) {
        option.error(body.msg);
      } else {
        toastAutoClose({
          title: body.msg || '请求返回错误',
          position: 'bottom'
        });
      }
    }
  }).catch(err => {
    console.log(err);
  });
};
