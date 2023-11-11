import { ProjectPayloadType, ProjectPayloadResType } from '../types/project'
import Client from './api'

export const PostProject = async (project: ProjectPayloadType) => {
  try {
    const res: ProjectPayloadResType = await Client.post('/projects', project)
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
