import React from 'react'
import {
  HomeOutlined,
  StarOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import {Button, Menu} from 'antd'
import {Link} from 'react-router-dom'
import {connect} from 'dva'

const data = [
  {route: '', name: 'Home', icon: <HomeOutlined />},
  {route: 'mood', name: '每日心情', icon: <StarOutlined />},
  {route: 'todo', name: 'TODO', icon: <UnorderedListOutlined />},
  {route: 'unknown', name: '404'},
]

const Header = ({dispatch, pathname}) => {
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
        <Menu.Item key='dva'>
          <a
            href='https://github.com/dvajs/dva'
            target='_blank'
            rel='noopener noreferrer'>
            dva
          </a>
        </Menu.Item>
      </Menu>
      <div className='march-login-out'>
        <Button type='link' onClick={() => dispatch({type: 'user/logout'})}>
          退出
        </Button>
      </div>
    </div>
  )
}

export default connect(state => ({errorMsg: state.user.errorMsg}))(Header)
