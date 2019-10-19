import { getToken, setToken, removeToken } from '@/util/token'
import {setStore, clearStore} from '@/util/storage'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    LOGIN: (state, data) => {
      state.token = data.token;
      state.name = data.userInfo.nickname;
      state.avatar = data.userInfo.avatar;
      setToken(data.token);
      setStore("userInfo", data.userInfo)
    },
    LOGOUT: (state, data) => {
      state.token = "";
      state.name = "";
      state.avatar = "";
      clearStore();
      removeToken()
    }
  },

  actions: {
  }
}

export default user
