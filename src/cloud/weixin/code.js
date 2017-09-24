export const ERR_MODULE = '模块加载失败';

export const ERR_CODE = {
  '-1': '未知错误',
  '1': 'apiKey非法',
  '2': '用户取消',
  '3': '发送失败',
  '4': '授权拒绝',
  '5': '微信服务器返回的不支持错误',
  '7': '注册SDK失败',
  '12': 'refreshToken值为空',
  '13': 'refreshToken非法',
  '14': '网络超时',
  '15': '刷新 accessToken失败',
  '98': '获取授权 accessToken失败',
  '99': '登录授权失败',
  '100': '您未安装微信客户端'
};

export const ERR_USER_CODE = {
  '-1': '未知错误',
  '1': 'accessToken 过期',
  '2': 'openId非法',
  '3': 'openId值为空',
  '4': 'accessToken值为空',
  '5': 'accessToken非法',
  '6': '网络超时',
  '9': '获取用户信息失败'
};
