import Req from 'api/request';

export function phoneExists(params, callback, error) {
  Req({
    url: '/user/check',
    params: params,
    success: res => callback(res),
    faild: err => error(err)
  });
}

export function getCode(params, callback, error) {
  Req({
    url: '/user/code',
    type: 'POST',
    data: params,
    success: res => callback(res),
    faild: err => error(err)
  });
}
