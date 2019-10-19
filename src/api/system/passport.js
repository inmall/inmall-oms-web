import request from '@/util/request'

export function login(username, password) {
  return request({
    url: '/system/passport/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function logout() {
  return request({
    url: '/system/passport/logout',
    method: 'post'
  })
}
