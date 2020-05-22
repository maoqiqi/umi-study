import {notification} from 'antd'
import {history} from 'umi'
import {login} from '../services'
import cookie from 'react-cookies'

export default {
  // 表示在全局state上的key
  namespace: 'user',
  // 是初始值
  state: {
    errorMsg: '',
  },
  // 同于redux里的reducer,接收action,同步更新state
  reducers: {
    setUser(state, {payload: {errorMsg}}) {
      return {...state, errorMsg}
    },
  },
  effects: {
    *login({payload: {params}}, {call, put}) {
      const {errorCode, errorMsg, data} = yield call(login, params)
      yield put({type: 'setUser', payload: {errorMsg}})
      if (errorCode === 0) {
        notification.success({message: '登录成功'})
        yield history.push('/')
      }
    },
    *logout(_, {put}) {
      cookie.remove('loginUserName')
      yield history.push('/login')
    },
  },
}
