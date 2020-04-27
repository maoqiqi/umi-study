export default {
  // 表示在全局state上的key
  namespace: 'user',
  // 是初始值
  state: [],
  // 同于redux里的reducer,接收action,同步更新state
  reducers: {
    delete(state, {payload: id}) {
      return state.filter(item => item.id !== id)
    },
  },
  effects: {
    *currentUser(_, {put}) {
      console.log('currentUser')
      console.log('put', put)
    },
  },
}
