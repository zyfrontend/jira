// 在真实环境中， 如果使用firebase 这种第三方 auth 服务的话， 本文件不需要开发者开发
import { Users } from '../project-list/search-panel'
const localStorageKey = '__auth_provider_token__'

export const getToken = () => window.localStorage.getItem(localStorageKey)
export const handleUserResponse = ({ user }: { user: Users }) => {
  window.localStorage.setItem(localStorageKey, user.token || '')
  return user
}

const apiUrl = 'http://localhost:9999'
export const login = (data: { username: string; password: string }) => {
  fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(async res => {
    if (res.ok) {
      // console.log(await res.json())
      return handleUserResponse(await res.json())
    } else {
      return Promise.reject(data)
    }
  })
}
export const register = (data: { username: string; password: string }) => {
  fetch(`${apiUrl}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(async res => {
    if (res.ok) {
      // console.log(await res.json())
      return handleUserResponse(await res.json())
    } else {
      return Promise.reject(data)
    }
  })
}
export const logout = async () => window.localStorage.removeItem(localStorageKey)
