import React, {Fragment, useState} from 'react'
import {Button, Card, Popconfirm, Table, Tag} from 'antd'
import {PlusOutlined} from '@ant-design/icons'
import {connect} from 'dva'
import {routerRedux} from 'dva/router'
import moment from 'moment'

import TodoModal from '../../components/TodoModal'
import './index.less'

const Todo = props => {
  const {dispatch, loading, list, index, size, total} = props
  console.log('Todo props', props)
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      width: 120,
      render: text => <a>{text}</a>,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      width: 150,
      render: text => {
        if (text === 0) {
          return <Tag color='purple'>只用这一个</Tag>
        } else if (text === 1) {
          return <Tag color='green'>工作</Tag>
        } else if (text === 2) {
          return <Tag color='orange'>学习</Tag>
        } else if (text === 3) {
          return <Tag color='red'>生活</Tag>
        }
      },
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: 280,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      width: 120,
      render: text => <Fragment>{moment(text).format('YYYY-MM-DD')}</Fragment>,
    },
    {
      title: 'Operation',
      key: 'operation',
      // width: 160,
      render: (text, record) => (
        <Fragment>
          <Button type='link' onClick={() => handleShowModal(record)}>
            Edit
          </Button>
          <Popconfirm
            title='Confirm to delete?'
            onConfirm={() =>
              dispatch({type: 'todo/delete', payload: {id: record.id}})
            }>
            <Button type='link'>Delete</Button>
          </Popconfirm>
        </Fragment>
      ),
    },
  ]
  const handleChange = page =>
    // dispatch({type: 'todo/list', payload: {page}})
    dispatch(
      routerRedux.push({
        pathname: '/todo',
        query: {page},
      }),
    )
  const handleShowModal = record => {
    console.log('handleShowModal')
    setVisible(true)
    setRecord(record)
  }
  const handleOk = (id, values, callBack) => {
    console.log('Received values of form: ', id, values)
    if (id) {
      dispatch({type: 'todo/update', payload: {id, params: values}})
    } else {
      dispatch({type: 'todo/add', payload: {params: values}})
    }
    callBack && callBack()
    setVisible(false)
  }
  const [visible, setVisible] = useState(false)
  const [record, setRecord] = useState()
  return (
    <Card
      className='todo'
      title='Todo List'
      extra={
        <Button
          type='primary'
          icon={<PlusOutlined />}
          onClick={() => handleShowModal()}>
          Add
        </Button>
      }>
      <Table
        className='todo-table'
        columns={columns}
        loading={loading}
        dataSource={list}
        rowKey='id'
        rowClassName={(record, index) => {
          if (index % 2 === 1) return 'todo-row'
        }}
        // pagination={false}
        pagination={{
          current: index,
          pageSize: size,
          total: total,
          // position: ['topLeft', 'bottomRight'],
          onChange: handleChange,
        }}
        expandable={{
          expandedRowRender: record => <p>{record.content}</p>,
          rowExpandable: record => record.content !== '',
        }}
        // scroll={{y: 450}}
      />
      {/*<Pagination
        className='ant-pagination ant-table-pagination ant-table-pagination-right'
        hideOnSinglePage
        current={index}
        pageSize={size}
        total={total}
        onChange={handleChange}
      />*/}
      <TodoModal
        visible={visible}
        record={record}
        onOk={handleOk}
        onCancel={() => setVisible(false)}
      />
    </Card>
  )
}

const mapStateToProps = state => {
  const {list, index, size, count, total} = state.todo
  return {
    loading: state.loading.models.todo,
    list,
    index,
    size,
    count,
    total,
  }
}

export default connect(mapStateToProps)(Todo)
