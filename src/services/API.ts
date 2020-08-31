import axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_MAIN_URL,
  timeout: 5000,
})

export default api
