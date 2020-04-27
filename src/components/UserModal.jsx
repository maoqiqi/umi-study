import React, {useEffect, useState} from 'react'
import {Form, Input, Modal} from 'antd'

export default ({visible, record, onOk, onCancel}) => {
  // console.log('UserModal', visible, record)
  const title = record ? 'Edit User' : 'Create User'
  const formItemLayout = {labelCol: {span: 6}, wrapperCol: {span: 14}}
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [form] = Form.useForm()

  useEffect(() => {
    if (visible) {
      form.resetFields()
      form.setFieldsValue(record)
    }
  }, [visible])

  const handleOk = () => {
    form
      .validateFields()
      .then(values => {
        setConfirmLoading(true)
        onOk &&
          onOk(values, () => {
            form.resetFields()
            setConfirmLoading(false)
          })
      })
      .catch(info => {
        console.log('Validate Failed:', info)
      })
  }
  return (
    <Modal
      forceRender
      title={title}
      visible={visible}
      cancelText='Cancel'
      onCancel={() => onCancel && onCancel()}
      okText='OK'
      onOk={handleOk}
      confirmLoading={confirmLoading}>
      <Form name='form_in_modal' form={form} /*initialValues={record}*/>
        <Form.Item
          {...formItemLayout}
          label='Name'
          name='name'
          rules={[{required: true, message: 'Please input your name!'}]}>
          <Input autoFocus />
        </Form.Item>
        <Form.Item {...formItemLayout} label='Email' name='email'>
          <Input />
        </Form.Item>
        <Form.Item {...formItemLayout} label='Website' name='website'>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}
