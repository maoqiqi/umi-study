/* 配置文件,包含umi内置功能和插件的配置 */

import {defineConfig} from 'umi'

export default defineConfig({
  // https://umijs.org/config/
  // 设置 node_modules 目录下依赖文件的编译方式
  nodeModulesTransform: {
    type: 'none',
  },
  // 代理(在生产环境,代理是无法生效的)
  proxy: {
    '/api': {
      target: 'https://www.wanandroid.com/',
      changeOrigin: true,
      pathRewrite: {'^/api': ''},
    },
  },
  // 插件
  antd: {},
  dva: {
    // 表示是否启用 immer 以方便修改 reducer
    immer: true,
    // 表示是否启用 dva model 的热更新
    hmr: true,
  },
  // 国际化
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true,
  },
  // 是否启用按需加载
  dynamicImport: {
    loading: '@/components/PageLoading',
  },
  // 配置需要兼容的浏览器最低版本
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {path: '/login', component: 'login', exact: true},
    {
      path: '/',
      component: '@/layouts/BlankLayout',
      routes: [
        {
          path: '/user',
          component: '@/layouts/UserLayout',
          routes: [
            {
              path: '/user',
              redirect: '/user/login',
            },
            {
              name: 'login',
              path: '/user/login',
              component: 'user/login',
            },
            {
              name: 'register',
              path: '/user/register',
              component: 'user/register',
            },
            {component: '404'},
          ],
        },
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
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    '@primary-color': '#dc6aac',
    '@link-color': '#dc6aac',
    // '@border-radius-base': '2px',
    // '@font-size-base': '16px',
    // '@line-height-base': '1.2',
  },
})
