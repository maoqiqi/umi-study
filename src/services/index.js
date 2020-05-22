import {request} from '../utils/request'

// https://www.wanandroid.com/user/login
export const login = params =>
  request(`/api/user/login`, {
    method: 'POST',
    body: params,
  })

// https://www.wanandroid.com/lg/todo/v2/list/1/json
export const todoList = page =>
  request(`/api/lg/todo/v2/list/${page}/json`, {
    method: 'GET',
  })

// https://www.wanandroid.com/lg/todo/add/json
export const todoAdd = params =>
  request(`/api/lg/todo/add/json`, {
    // method: 'PUT',
    method: 'POST',
    body: params,
  })

// https://www.wanandroid.com/lg/todo/update/83/json
export const todoUpdate = (id, params) =>
  request(`/api/lg/todo/update/${id}/json`, {
    // method: 'PATCH',
    method: 'POST',
    body: params,
  })

// https://www.wanandroid.com/lg/todo/delete/83/json
export const todoDelete = id =>
  request(`/api/lg/todo/delete/${id}/json`, {
    // method: 'DELETE',
    method: 'POST',
  })
