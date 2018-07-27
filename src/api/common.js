import Req from 'api/request';

export function phoneExists(params, callback, error) {
  Req({
    url: '/phone/check',
    params: params,
    success: res => callback(res),
    faild: err => error(err)
  });
}

export function getCode(params, callback, error) {
  Req({
    url: '/code/login',
    type: 'POST',
    data: params,
    success: res => callback(res),
    faild: err => error(err)
  });
}
