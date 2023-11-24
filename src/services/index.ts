import { BugPayloadType } from '../types/bug'
import { ProjectPayloadType } from '../types/project'
import { TodoPayloadType } from '../types/todo'
import Client from './api'

export const PostProject = async (payload: ProjectPayloadType) => {
  try {
    const res = await Client.post('/projects', payload)
    return res.data
  } catch (err) {
    throw err
  }
}

export const DeleteProject = async (id: number | null) => {
  try {
    const res = await Client.delete(`/projects/${id}`)
    return res
  } catch (err) {
    throw err
  }
}

export const PostTodo = async (payload: TodoPayloadType) => {
  try {
    const res = await Client.post('/todos', payload)
    return res.data
  } catch (err) {
    throw err
  }
}

export const DeleteTodo = async (id: number | null) => {
  try {
    const res = await Client.delete(`/todos/${id}`)
    return res
  } catch (err) {
    throw err
  }
}

export const PostBug = async (payload: BugPayloadType) => {
  try {
    const res = await Client.post('/bugs', payload)
    return res.data
  } catch (err) {
    throw err
  }
}

export const DeleteBug = async (id: number | null) => {
  try {
    const res = await Client.delete(`/bugs/${id}`)
    return res
  } catch (err) {
    throw err
  }
}

export const GetUser = async (id: Number) => {
  try {
    const res = await Client.get(`/users/${id}`)
    return res.data
  } catch (err) {
    throw err
  }
}
