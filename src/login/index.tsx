import React, { FormEvent } from 'react'
import './style.css'
import { useAuth } from '../auth-context/auth-context'
// interface Base {
//   id: number
// }
// interface Advance extends Base {
//   name: string
// }
// const test = (p: Base) => {}
//
// // 鸭子类型
// // 面向接口编程
// // 不是面向对象编程
// const a: Advance = { id: 1, name: 'jack' }
// test(a)
const apiUrl = 'http://localhost:9999'
const Login: React.FC = () => {
  // 登录
  const { login, user } = useAuth()
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value
    login({ username, password })
  }
  return (
    <form onSubmit={handleSubmit}>
      {user ? <div>登录成功，用户名：{user?.name}</div> : null}
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={'username'} />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id={'password'} />
      </div>
      <button type={'submit'}>登录</button>
    </form>
  )
}

export default Login
