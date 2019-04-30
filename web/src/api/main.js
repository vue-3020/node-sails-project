import http from '@/utils/httpAxios'
import axios from 'axios'
import Qs from 'qs'
import { baseHref } from '@/api/server.ip'

function resorve(path) {
  return baseHref + path
}
//分页
export function queryListAjax(params) {
  debugger
  return http.ajax({
    url: resorve('main/getList'),
    method: 'POST'
  },params)
}

//删除
export function deleteListId(params) {
  debugger
  return http.ajax({
    url: resorve('main/deleteItem'),
    method: 'POST'
  },params)
}

//替换
export function updataListItemAjax(params) {
  debugger
  return http.ajax({
    url: resorve('main/updataItem'),
    method: 'POST'
  },params)
}