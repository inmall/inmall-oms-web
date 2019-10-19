import request from '@/util/request'

export function getMenuList(username, password) {
  return request({
    url: '/system/personal/menu',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getResourceList() {
  return request({
    url: '/system/menu/list',
    method: 'get',
  })
}
