/*配置文件,包含umi内置功能和插件的配置*/

import {defineConfig} from 'umi'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {},
  dva: {
    hmr: true,
  },
  // routes: [
  // { path: '/', component: '@/pages/index', exact: true },
  // { component: '@/pages/404' },
  // ],
  // hash: false,
})
