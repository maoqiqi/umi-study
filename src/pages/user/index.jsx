import React, {useState} from 'react'
import {Button, Card, Popconfirm, Table} from 'antd'
import UserModal from '../../components/UserModal'
import './index.less'

const originData = []
for (let i = 99; i >= 0; i--) {
  originData.push({
    // id: i,
    // content: 'content -- content -- ' + i,
    // user_id: 1,
    // created_at: '2019-10-24 16:43:52',
    // user: {
    //   id: 1,
    //   name: 'test',
    //   password: 'e10adc3949ba59abbe56e057f20f883e',
    //   nick_name: 'test',
    //   email: 'test@test.com',
    //   status: 1,
    //   type: 1,
    //   created_at: '2017-08-18 15:21:56',
    //   updated_at: '2018-10-12 15:24:43',
    // },
    name: 'name' + i,
    email: '15221394017@163.com_' + i,
    website: 'https://github.com/dvajs/dva_' + i,
  })
}

export default () => {
  console.log('User')
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 100,
      fixed: 'left',
      render: (text, record) => <div>{text}</div>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 250,
      fixed: 'left',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
      width: 250,
    },
    {
      title: 'Operation',
      key: 'operation',
      width: 170,
      fixed: 'right',
      render: (text, record) => (
        <span>
          <Button type='link' onClick={() => handleShowModal(record)}>
            Edit
          </Button>
          <Popconfirm
            title='Confirm to delete?'
            onConfirm={() => handleDelete(record.id)}>
            <Button type='link'>Delete</Button>
          </Popconfirm>
        </span>
      ),
    },
  ]
  const handleShowModal = record => {
    console.log('handleShowModal')
    setVisible(true)
    setRecord(record)
  }
  const handleDelete = key => {
    // const temp = dataSource.filter(item => item.id !== key)
    // setDataSource(temp)
  }
  const handleOk = (values, callBack) => {
    setVisible(false)
    callBack && callBack()
  }
  const [visible, setVisible] = useState(false)
  const [record, setRecord] = useState()
  return (
    <Card
      className='user'
      title='User List'
      extra={
        <Button type='primary' onClick={() => handleShowModal()}>
          Create User
        </Button>
      }>
      <Table
        className='user-table'
        columns={columns}
        dataSource={originData}
        rowKey='name'
      />
      <UserModal
        visible={visible}
        record={record}
        onOk={handleOk}
        onCancel={() => setVisible(false)}
      />
    </Card>
  )
}
