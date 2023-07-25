import { Project } from '../types/project'
import Client from './api'

export const CreateProject = async (project: Project) => {
  try {
    const res = await Client.post('/projects', project)
    return res
  } catch (err) {
    throw err
  }
}