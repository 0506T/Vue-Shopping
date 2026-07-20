// 此处用于存放所有登录相关的接口请求
import request from '@/utils/request'

// 1. 获取图形验证码
export const getPicCode = () => {
  return request.get('/captcha/image')
}

// 2.获取手机验证码
export const getMsgCode = (captchaCode, captchaKey, mobile) => {
  return request.post('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode,
      captchaKey,
      mobile
    }
  })
}

// 3.登录功能
export const codeLogin = (idParty, mobile, partyData, smsCode) => {
  return request.post('/passport/login', {
    idParty: true,
    mobile,
    partyData: {},
    smsCode
  })
}
