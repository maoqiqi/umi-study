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
  routes: [
    {path: '/login', component: 'login', exact: true},
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {path: '/', component: '@/pages/index', exact: true},
        {path: '/mood', component: '@/pages/mood', exact: true},
        {
          path: '/todo',
          component: '@/pages/todo',
          wrappers: ['@/wrappers/auth'],
        },
      ],
    },
    {component: '@/pages/404'},
  ],
  // hash: false,
  // plugins: ['umi-plugin-dva'],
  proxy: {
    '/api': {
      target: 'https://www.wanandroid.com/',
      changeOrigin: true,
      pathRewrite: {'^/api': ''},
    },
  },
  theme: {
    '@primary-color': '#dc6aac',
    '@link-color': '#dc6aac',
    // '@border-radius-base': '2px',
    // '@font-size-base': '16px',
    // '@line-height-base': '1.2',
  },
})
