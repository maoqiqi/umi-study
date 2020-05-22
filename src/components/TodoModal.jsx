import React, {useEffect} from 'react'
import {DatePicker, Form, Input, Modal, Select} from 'antd'
import locale from 'antd/es/date-picker/locale/zh_CN'
import moment from 'moment'

export default ({visible, record, onOk, onCancel}) => {
  // console.log('UserModal', visible, record)
  const title = record ? 'Edit todo' : 'Add todo'
  const formItemLayout = {labelCol: {span: 6}, wrapperCol: {span: 14}}
  const dateFormat = 'YYYY-MM-DD'
  const [form] = Form.useForm()

  if (record) {
    record.date = moment(record.date)
  } else {
    record = {type: 0, date: moment()}
  }

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
        const d = values.date
        values.date = d === null ? undefined : d.format(dateFormat)
        onOk && onOk(record.id, values, () => form.resetFields())
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
      onOk={handleOk}>
      <Form {...formItemLayout} name='form_in_modal' form={form}>
        <Form.Item label='Type' name='type'>
          <Select onChange={value => console.log(value)}>
            <Select.Option value={0}>只用这一个</Select.Option>
            <Select.Option value={1}>工作</Select.Option>
            <Select.Option value={2}>学习</Select.Option>
            <Select.Option value={3}>生活</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label='Title'
          name='title'
          rules={[{required: true, message: 'Please input your title!'}]}>
          <Input />
        </Form.Item>
        <Form.Item label='Content' name='content'>
          <Input />
        </Form.Item>
        <Form.Item label='Date' name='date'>
          <DatePicker locale={locale} showToday format={dateFormat} />
        </Form.Item>
      </Form>
    </Modal>
  )
}
