import React from 'react'
import {Link} from 'umi'

import SelectLang from '../components/SelectLang'
import Footer from '../components/Footer'

import logo from '../assets/logo.svg'
import styles from './UserLayout.less'

const UserLayout = ({children}) => {
  // <a title="Ant Design Pro" target="_blank" href="https://pro.ant.design">Ant Design Pro</a>
  // <a title="github" target="_blank" href="https://github.com/ant-design/ant-design-pro">
  // <span role="img" aria-label="github" class="anticon anticon-github"></span>
  // </a>
  // <a title="Ant Design" target="_blank" href="https://ant.design">Ant Design</a>

  return (
    <div className={styles.container}>
      <div className={styles.lang}>
        <SelectLang />
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.header}>
            <Link to='/'>
              <img alt='logo' className={styles.logo} src={logo} />
              <span className={styles.title}>React Study</span>
            </Link>
          </div>
          <div className={styles.desc}>用于构建用户界面的 JavaScript 库</div>
        </div>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default UserLayout
