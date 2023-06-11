import axios, { AxiosInstance } from "axios"
import { API_BASE_URL } from "../global"

const Client: AxiosInstance = axios.create({baseURL: API_BASE_URL })

Client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default Client