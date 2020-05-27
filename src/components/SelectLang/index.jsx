import React from 'react'
import {Dropdown, Menu} from 'antd'
import {GlobalOutlined} from '@ant-design/icons'
import {getLocale, setLocale} from 'umi'

import styles from './index.less'

export default () => {
  const selectedLang = getLocale()

  const changeLang = ({key}) => setLocale(key)

  const locales = ['zh-CN', 'zh-TW', 'en-US']
  const languageLabels = {
    'zh-CN': '简体中文',
    'zh-TW': '繁体中文',
    'en-US': 'English',
  }
  const languageIcons = {
    'zh-CN': '🇨🇳',
    'zh-TW': '🇭🇰',
    'en-US': '🇺🇸',
  }

  const langMenu = (
    <Menu
      className={styles.menu}
      selectedKeys={[selectedLang]}
      onClick={changeLang}>
      {locales.map(locale => (
        <Menu.Item key={locale}>
          <span
            className={styles.img}
            role='img'
            aria-label={languageLabels[locale]}>
            {languageIcons[locale]}
          </span>{' '}
          {languageLabels[locale]}
        </Menu.Item>
      ))}
    </Menu>
  )

  return (
    <Dropdown
      overlay={langMenu}
      overlayClassName={styles.container}
      placement='bottomRight'>
      <span className={styles.dropDown}>
        <GlobalOutlined title='语言' />
      </span>
    </Dropdown>
  )
}
