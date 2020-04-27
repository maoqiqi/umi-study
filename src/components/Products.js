import React from 'react'
import {Button, Popconfirm, Table} from 'antd'
import {connect} from 'umi'

const ProductList = ({onDelete, products}) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (text, record) => {
        return (
          <Popconfirm title='Delete?' onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        )
      },
    },
  ]
  return <Table dataSource={products} columns={columns} />
}

// export default ProductList

const Products = ({dispatch, products}) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    })
  }

  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  )
}

export default connect(({products}) => ({products}))(Products)
