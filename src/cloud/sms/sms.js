/**
 * Created by junpingxie on 2017/10/19.
 */
import Cloud from 'cloud/index';
import {REST_API, TOKEN, SID, APPID} from './code';
import {T_REGISTER, T_FORGET, T_PASSWORD} from './code';

let sms;

Cloud('smsVerification').then((module) => {
  sms = module;
}, name => {
  error(name + ERR_MODULE);
});

function sendMessage(option) {
  let option = Object.assign({appId: APPID}, option);
  sms.sendMessage({
    softVersion: REST_API,
    accountSid: SID,
    accountToken: TOKEN,
    body: option
  }, ret => {
    console.info(ret);
  });
}

export function sendRegMsg(phone, code) {
  sendMessage({
    templateId: T_REGISTER,
    phoneNumber: phone,
    param: code
  });
}

export function sendForgetMsg(phone, code) {
  sendMessage({
    templateId: T_FORGET,
    phoneNumber: phone,
    param: code
  });
}

export function sendPasswordMsg(phone, code) {
  sendMessage({
    templateId: T_PASSWORD,
    phoneNumber: phone,
    param: code
  });
}
