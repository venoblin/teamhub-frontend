import { PayloadType } from "../types/payload"
import Client from "./api"

export const LoginUser = async (data: PayloadType) => {
  try {
    const res = await Client.post('/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data: PayloadType) => {
  try {
    const res = await Client.post('/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.post('/session')
    return res.data
  } catch (error) {
    throw error
  }
}