import React from 'react'
import {HomeOutlined, StarOutlined, UserOutlined} from '@ant-design/icons'
import {Button, Menu} from 'antd'
import {Link} from 'umi'

const data = [
  {route: '', name: 'Home', icon: <HomeOutlined />},
  {route: 'mood', name: '每日心情', icon: <StarOutlined />},
  {route: 'user', name: 'User', icon: <UserOutlined />},
  {route: 'unknown', name: '404'},
]

export default ({pathname}) => {
  return (
    <div>
      <div className='march-logo'>
        <Link to='/'>网站Logo图片</Link>
      </div>
      <Menu theme='dark' mode='horizontal' selectedKeys={[pathname]}>
        {data.map(item => (
          <Menu.Item key={`/${item.route}`}>
            <Link to={item.route}>
              {item.icon}
              {item.name}
            </Link>
          </Menu.Item>
        ))}
        <Menu.Item key='link'>
          <a
            href='https://github.com'
            target='_blank'
            rel='noopener noreferrer'>
            GitHub
          </a>
        </Menu.Item>
      </Menu>
      <div className='march-login-out'>
        <Button type='link' onClick={() => console.log('退出')}>
          退出
        </Button>
      </div>
    </div>
  )
}
