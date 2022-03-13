import axios from './axios'

export const getMenu = (param) =>{
  return axios.request({
      url:'/permission/getMune',
      method:'post',
      data:param
  })
}