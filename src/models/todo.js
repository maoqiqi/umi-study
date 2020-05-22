import {todoAdd, todoDelete, todoList, todoUpdate} from '../services'
import {message} from 'antd'
import {delay} from '../utils/time'

export default {
  name: 'todo',
  state: {
    list: [],
    index: null,
    size: null,
    count: null,
    total: null,
  },
  reducers: {
    setList(state, {payload}) {
      return {...state, ...payload}
    },
  },
  effects: {
    *list({payload: {page = 1}}, {call, put}) {
      const {errorCode, errorMsg, data} = yield call(todoList, page)
      if (errorCode === 0) {
        const {
          curPage: index,
          size,
          pageCount: count,
          total,
          datas: list,
        } = data
        yield put({type: 'setList', payload: {list, index, size, count, total}})
      } else {
        message.error(errorMsg)
      }
    },
    *add({payload: {params}}, {call, put}) {
      const {errorCode, errorMsg} = yield call(todoAdd, params)
      if (errorCode === 0) {
        yield put({type: 'reload'})
      } else {
        message.error(errorMsg)
      }
    },
    *update({payload: {id, params}}, {call, put}) {
      const {errorCode, errorMsg} = yield call(todoUpdate, id, params)
      if (errorCode === 0) {
        yield put({type: 'reload'})
      } else {
        message.error(errorMsg)
      }
    },
    *delete({payload: {id}}, {call, put}) {
      const {errorCode, errorMsg} = yield call(todoDelete, id)
      if (errorCode === 0) {
        yield put({type: 'reload'})
      } else {
        message.error(errorMsg)
      }
    },
    *reload(action, {put, select}) {
      const page = yield select(state => state.todo.index)
      yield delay(3000)
      yield put({type: 'list', payload: {page}})
    },
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        console.log('setup', pathname, query)
        if (pathname === '/todo') {
          dispatch({type: 'list', payload: query})
        }
      })
    },
  },
}
