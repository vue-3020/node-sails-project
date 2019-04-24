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

export function zhuceUsername(username, password,code) {
  debugger
  console.log(baseHref);
  const data = {
    username,
    password,
    code
  }
  //post带参数提交
    return http.ajax({
      url: resorve('user/zhuce'),
      method: 'POST'
    }, data)
}

export function getUser(username, password,code) {
  const data = {
    username,
    password,
    code
  }
  debugger
  return http.ajax({
    url: resorve('user/chaxunUser'),
    method: 'POST'
  },data)
}