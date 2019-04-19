// let nodeEnv = process.env.NODE_ENV
let nodeEnv = 'development'
let IP = ''
if (nodeEnv === 'development') {
  IP = 'http://localhost:1337/'
}
export const baseHref = IP

export default {}
export const LocalbaseHref = 'http://localhost:1989'
