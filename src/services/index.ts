import { Project } from '../types/project'
import Client from './api'

export const PostProject = async (project: Project) => {
  try {
    const res = await Client.post('/projects', project)
    return res
  } catch (err) {
    throw err
  }
}

export const GetUserProjects = async (id: Number) => {
  try {
    const res = await Client.get(`/users/${id}`)
    return res
  } catch (err) {
    throw err
  }
}