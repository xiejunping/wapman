import Req from 'api/request';

export function getUserInfo(params, callback, error) {
  Req({
    url: '/mock',
    success: res => {
      callback(res);
    }
  });
}
