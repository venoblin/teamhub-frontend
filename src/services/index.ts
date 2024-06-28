import { BugPatchType, BugPayloadType } from '../types/bug'
import { EventPayloadType } from '../types/event'
import { NotificationPatchType, NotificationPayloadType } from '../types/notification'
import { ProjectPatchType, ProjectPayloadType } from '../types/project'
import { TodoPatchType, TodoPayloadType } from '../types/todo'
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

export const PatchProject = async (id: number | null, payload: ProjectPatchType) => {
  try {
    const res = await Client.patch(`/projects/${id}`, payload)
    return res
  } catch (err) {
    throw err
  }
}

export const PatchTodo = async (id: number | null,payload: TodoPatchType) => {
  try {
    const res = await Client.patch(`/todos/${id}`, payload)
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

export const PatchBug = async (id: number | null,payload: BugPatchType) => {
  try {
    const res = await Client.patch(`/bugs/${id}`, payload)
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

export const GetAllUsers = async () => {
  try {
    const res = await Client.get('/users')
    return res.data
  } catch (err) {
    throw err
  }
}

export const GetUserByIdentifier =async (ident: String) => {
  try {
    const res = await Client.get(`/users/${ident}`)
    return res.data
  } catch (err) {
    throw err
  }
}

export const PostEvent = async (payload: EventPayloadType) => {
  try {
    const res = await Client.post('/events', payload)
    return res.data
  } catch (err) {
    throw err
  }
}

export const PostNotification = async (payload: NotificationPayloadType) => {
  try {
    const res = await Client.post('/notifications', payload)
    return res.data
  } catch (err) {
    throw err
  }
}

export const PatchNotification = async (id: number, payload: NotificationPatchType) => {
  try {
    const res = await Client.patch(`/notifications/${id}`, payload)
    return res.data
  } catch (err) {
    throw err
  }
}

export const DeleteNotification = async (id: number) => {
  try {
    const res = await Client.delete(`/notifications/${id}`)
    return res.data
  } catch (err) {
    throw err
  }
}

export const PostContributor = async (userId: number, projectId: number) => {
  try {
    const res = await Client.post('/contributors', {user_id: userId, project_id: projectId})
    return res.data
  } catch (err) {
    throw err
  }
}

export const DeleteContributor = async (id: number) => {
  try {
    const res = await Client.delete(`/contributors/${id}`)
    return res.data
  } catch (err) {
    throw err
  }
}
