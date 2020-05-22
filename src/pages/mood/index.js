import React, {useState} from 'react'
import {Button, Card, Form, Input, Modal, Popconfirm, Table} from 'antd'
import './index.less'

const originData = []
for (let i = 99; i >= 0; i--) {
  originData.push({
    id: i,
    content: 'content -- content -- ' + i,
    user_id: 1,
    created_at: '2019-10-24 16:43:52',
    user: {
      id: 1,
      name: 'test',
      password: 'e10adc3949ba59abbe56e057f20f883e',
      nick_name: 'test',
      email: 'test@test.com',
      status: 1,
      type: 1,
      created_at: '2017-08-18 15:21:56',
      updated_at: '2018-10-12 15:24:43',
    },
  })
}

const Index = () => {
  console.log('--------> Mood')
  const [loading, setLoading] = useState(true)
  const [dataSource, setDataSource] = useState([])
  const columns = [
    {title: 'ID', dataIndex: 'id', key: 'id', width: 70, fixed: 'left'},
    {
      title: '姓名',
      dataIndex: ['user', 'name'],
      key: 'name',
      width: 100,
      fixed: 'left',
    },
    {title: '心情', dataIndex: 'content', key: 'content', width: 250},
    {title: '日期', dataIndex: 'created_at', key: 'created_at', width: 180},
    {
      title: '操作',
      key: 'operation',
      width: 95,
      fixed: 'right',
      render: (text, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title='确定删除?'
            onConfirm={() => handleDelete(record.id)}>
            <Button type='link'>删除</Button>
          </Popconfirm>
        ) : null,
    },
  ]
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [form] = Form.useForm()

  if (dataSource.length === 0) {
    setTimeout(() => {
      setDataSource(originData)
      setLoading(false)
    }, 1000)
  }

  const handleDelete = key => {
    const temp = dataSource.filter(item => item.id !== key)
    setDataSource(temp)
  }

  const onPageChange = page => {
    console.log('page', page)
  }

  const showModal = () => {
    setVisible(true)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const handleOk = () => {
    form
      .validateFields()
      .then(values => {
        setConfirmLoading(true)
        setTimeout(() => {
          const newData = {
            id: dataSource.length,
            content: values.content,
            user_id: 1,
            created_at: '2019-10-24 16:43:52',
            user: {
              id: 1,
              name: 'admin',
              password: 'e10adc3949ba59abbe56e057f20f883e',
              nick_name: 'admin',
              email: 'test@test.com',
              status: 1,
              type: 1,
              created_at: '2017-08-18 15:21:56',
              updated_at: '2018-10-12 15:24:43',
            },
          }
          setDataSource([newData, ...dataSource])

          form.resetFields()
          setConfirmLoading(false)
          setVisible(false)
        }, 1000)
      })
      .catch(info => {
        console.log('Validate Failed:', info)
      })
  }

  return (
    <Card
      className='mood'
      title='每日心情'
      extra={
        <Button type='primary' onClick={showModal}>
          发表
        </Button>
      }>
      <Table
        className='march-table'
        columns={columns}
        rowKey='id'
        dataSource={dataSource}
        loading={loading}
        onChange={onPageChange}
      />
      <Modal
        title='今天你😊吗？'
        visible={visible}
        // cancelText="Cancel"
        onCancel={handleCancel}
        okText='发布'
        onOk={handleOk}
        confirmLoading={confirmLoading}>
        <Form name='form_in_modal' form={form}>
          <Form.Item
            name='content'
            rules={[{required: true, message: 'Please input your content!'}]}>
            <Input.TextArea rows='4' autoFocus placeholder='说点什么……' />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  )
}

export default Index
