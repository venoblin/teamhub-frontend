import { ProjectPayloadType } from '../types/project'
import { TodoPayloadType } from '../types/todo'
import Client from './api'

export const PostProject = async (project: ProjectPayloadType) => {
  try {
    const res = await Client.post('/projects', project)
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

export const PostTodo = async (todo: TodoPayloadType) => {
  try {
    const res = await.Client.post('/todos', todo)
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
