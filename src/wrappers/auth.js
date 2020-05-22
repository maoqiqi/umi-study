import React, {Fragment} from 'react'
import cookie from 'react-cookies'
import {Redirect} from 'react-router-dom'

export default ({children}) => {
  const username = cookie.load('loginUserName')
  return username ? <Fragment>{children}</Fragment> : <Redirect to='/login' />
}
