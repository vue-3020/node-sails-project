import http from '@/utils/httpAxios'
import axios from 'axios'
import Qs from 'qs'
import { baseHref } from '@/api/server.ip'

function resorve(path) {
  return baseHref + path
}
/**
 *  获取登陆信息
 * 
 */

export function loginByUsername(username, password, code) {
  console.log(baseHref);
  const data = {
    username,
    password,
    code
  }
  debugger
  //post带参数提交
    return http.ajax({
      url: resorve('user/zhuce'),
      method: 'POST'
    }, data)
}