import React from 'react'
import {Button, Form} from 'antd'

import styles from './index.less'

const LoginSubmit = props => {
  console.log('props', props)
  return (
    <Form.Item>
      <Button
        size='large'
        className={styles.submit}
        type='primary'
        htmlType='submit'
        {...props}
      />
    </Form.Item>
  )
}

export default LoginSubmit
