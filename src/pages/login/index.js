import React, {useState} from 'react'
import {Alert, Button, Form, Input} from 'antd'
import {LockOutlined, UserOutlined} from '@ant-design/icons'

import './index.css'

const Login = () => {
  const [form] = Form.useForm()
  const [disabled, setDisabled] = useState(true)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const onValuesChange = (changedValues, allValues) => {
    if (Object.keys(allValues).length < 2) return

    for (let item in allValues) {
      if (allValues.hasOwnProperty(item) && allValues[item] === '') {
        setDisabled(true)
        return
      }
    }
    setDisabled(false)
  }

  const onFinish = values => {
    console.log('Received values of form: ', values)
    setLoading(true)
    // 登录
    setTimeout(() => {
      setLoading(false)
      setErrorMsg('用户名或密码错误')
    }, 2000)
  }

  return (
    <div className='login-content'>
      <h1 style={{textAlign: 'center'}}>用户登录</h1>
      <Alert
        style={{marginBottom: 24, display: errorMsg ? 'block' : 'none'}}
        type='error'
        showIcon
        message={errorMsg}
      />
      <Form
        name='login-form'
        form={form}
        onValuesChange={onValuesChange}
        onFinish={onFinish}>
        <Form.Item
          name='username'
          rules={[{required: true, message: 'Please input your Username!'}]}>
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Username'
            allowClear
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[{required: true, message: 'Please input your Password!'}]}>
          <Input
            type='password'
            prefix={<LockOutlined className='site-form-item-icon' />}
            placeholder='Password'
            allowClear
          />
        </Form.Item>
        <Form.Item>
          <Button
            block='true'
            type='primary'
            htmlType='submit'
            disabled={disabled}
            loading={loading}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
