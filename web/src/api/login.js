import http from '@/utils/httpAxios'
import axios from 'axios'
import Qs from 'qs'
import { baseHref } from '@/api/server.ip'

// function resorve(path) {
//   return baseHref + path
// }
/**
 *  获取登陆信息
 * 
 */

export function loginByUsername(name, userInfoName, userInfoDelivery, userInfoPegion) {
    console.log(baseHref);
    debugger
    return http.ajax({
        url: resorve('/user/login'),
        method: 'get'
    })
}