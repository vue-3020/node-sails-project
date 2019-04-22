import Cookies from "js-cookie";
const cookiLostorage = {}
// 1 为cookie  2为localstorage
const index = 1
cookiLostorage.set = function (data, value) {
  if (index == 1) {
    return Cookies.set(data, value)
  } else {
    return localStorage.setItem(data, value)
  }
}
cookiLostorage.get = function (data) {
  if (index == 1) {
    return Cookies.get(data)
  } else {
    return localStorage.getItem(data)
  }
}
cookiLostorage.remove = function (data) {
  if (index == 1) {
    return Cookies.remove(data)
  } else {
    return localStorage.removeItem(data)
  }
}
cookiLostorage.base = 'http://localhost:9092'

export default cookiLostorage
