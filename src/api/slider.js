import Req from 'api/request';

export function getDiscList(params, callback, error, faild) {
  Req({
    url: 'http://localhost:3000/api/getDiscList',
    params: params,
    success: res => callback(res),
    error: err => error(err),
    faild: err => faild(err)
  });
}

export function getRecommend(params, callback, error, faild) {
  Req({
    url: 'http://localhost:3000/api/getRecommend',
    params,
    success: res => callback(res),
    error: err => error(err),
    faild: err => faild(err)
  });
}
