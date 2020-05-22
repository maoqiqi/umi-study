/*约定式路由时的全局布局文件*/

import React from 'react'
import {Layout} from 'antd'
import Header from './Header'

import './index.less'

const BasicLayout = ({location: {pathname}, children}) => {
  return (
    <Layout className='march-layout'>
      <Layout.Header className='march-header'>
        <Header pathname={pathname} />
      </Layout.Header>
      <Layout.Content className='march-content'>{children}</Layout.Content>
      <Layout.Footer className='march-footer'>
        React 入门学习 Created by march
      </Layout.Footer>
    </Layout>
  )
}

export default BasicLayout
