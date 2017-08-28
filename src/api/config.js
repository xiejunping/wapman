let host;

/* eslint-disable */
if (process.env.NODE_ENV == 'development') {
  host = 'http://easy-mock.com/mock/598da121a1d30433d85e77b2/example';
} else if (process.env.NODE_ENV == 'production') {
  host = 'http://api.pjpiao.com';
}
/* eslint-enable */

export const CODE_OK = '0';
export const CODE_ERR = '10010';
export const HOST_API = host;
