import React, {useState} from 'react'
import {Alert, Button, Form, Input} from 'antd'
import {LockOutlined, UserOutlined} from '@ant-design/icons'
import {connect} from 'dva'

import './index.less'

const Login = ({dispatch, loading, errorMsg}) => {
  const [form] = Form.useForm()
  const [disabled, setDisabled] = useState(true)

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
    dispatch({type: 'user/login', payload: {params: values}})
  }

  return (
    <div className='login-content'>
      <h2 style={{textAlign: 'center'}}>用户登录</h2>
      {errorMsg && (
        <Alert
          style={{marginBottom: 24}}
          type='error'
          showIcon
          message={errorMsg}
        />
      )}
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

const mapStateToProps = state => {
  return {
    loading: state.loading.models.user,
    errorMsg: state.user.errorMsg,
  }
}

export default connect(mapStateToProps)(Login)
