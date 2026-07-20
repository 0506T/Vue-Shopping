import request from '@/utils/request'

// 获取地址列表
export const getAdressList = () => {
  return request.get('/address/list')
}
