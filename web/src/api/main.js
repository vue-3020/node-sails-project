import http from '@/utils/httpAxios'
import axios from 'axios'
import Qs from 'qs'
import { baseHref } from '@/api/server.ip'

function resorve(path) {
  return baseHref + path
}

export function queryListAjax(params) {
  debugger
  return http.ajax({
    url: resorve('main/getList'),
    method: 'POST'
  },params)
}