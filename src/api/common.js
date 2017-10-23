import Req from 'api/request';

export function phoneExists(params, callback, error) {
  Req({
    url: '/index.php?s=Common.PhoneExists',
    type: 'POST',
    params: params,
    success: res => callback(res),
    faild: err => error(err)
  });
}

export function getCode(params, callback, error) {
  Req({
    url: '/index.php?s=Common.GetCode',
    type: 'POST',
    params: params,
    success: res => callback(res),
    faild: err => error(err)
  });
}
