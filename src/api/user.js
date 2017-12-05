import Req from 'api/request';

export function userLogin(params, callback, error, faild) {
  Req({
    url: '/index.php?s=User_User.Login',
    type: 'POST',
    params: params,
    success: res => callback(res),
    error: err => error(err),
    faild: err => faild(err)
  });
}

export function userRegister(params, callback, error, faild) {
  Req({
    url: '/index.php?s=User_User.Register',
    type: 'POST',
    params: params,
    success: res => callback(res),
    error: err => error(err),
    faild: err => faild(err)
  });
}

export function userGetInfo(callback, error) {
  Req({
    url: '/index.php?s=User_User.Getinfo',
    success: res => callback(res),
    faild: err => error(err)
  });
}

export function userUpdateInfo(params, callback, error) {
  Req({
    url: '/index.php?s=User_User.Renewinfo',
    type: 'POST',
    params: params,
    success: res => callback(res),
    faild: err => error(err)
  });
}

export function uploadAvatar(params, callback, error) {
  Req({
    url: '/index.php?s=User_User.Uploadavatar',
    type: 'POST',
    params: params,
    success: res => callback(res),
    faild: err => error(err)
  });
}
