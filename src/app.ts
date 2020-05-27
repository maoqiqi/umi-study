/* 约定`src/app.tsx`为运行时配置 */

// export function render(oldRender) {
//   fetch('/api/auth').then(auth => {
//     if (auth.isLogin) {
//       oldRender()
//     } else {
//       history.push('/login')
//     }
//   })
// }

import {message} from 'antd'

export const getInitialState = async (): Promise<{}> => {
  // message.error('测试')
  return {}
}

export const dva = {
  config: {
    onError() {},
  },
  plugins: [],
}
