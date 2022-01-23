import { APP_CONFIG } from '@/config'
import axios, { AxiosInstance } from 'axios'
import { Notification } from '@arco-design/web-react'

export enum HTTPStatus {
  Erroe = 'error',
  Success = 'success',
}

type HTTPResult<T = any> = {
  status: HTTPStatus.Success
  message: string
  result: T
}

const http = axios.create({
  baseURL: APP_CONFIG.API_URL,
  withCredentials: true,
})

http.interceptors.response.use(
  (response) => {
    if (!response.headers['content-type'].includes('json')) {
      if (response.data.sttatus !== HTTPStatus.Success) {
        return Promise.reject(response.data)
      }
    }
    return response.data
  },
  (error) => {
    const errorJSON = error.toJSON()
    const errorInfo = {
      ...errorJSON,
      config: error.config,
      code: errorJSON.status || error.response?.status || 400,
      message:
        error.response?.data?.error || error.response?.statusText || errorJSON.message,
    }
    Notification.error({
      title: 'Error ！',
      content: errorInfo.message,
    })
    console.debug('axios error:', {
      axiosName: errorJSON.name,
      axiosMessage: errorJSON.message,
      npError: errorInfo.message,
      npMessage: error.response?.data?.message || '',
      status: errorInfo.code,
      method: errorJSON.config.method,
      baseURL: errorJSON.config.baseURL,
      params: errorJSON.config.params,
      url: errorJSON.config.url,
      data: errorJSON.config.data,
      headers: errorJSON.config.headers,
    })

    return Promise.reject(errorInfo)
  }
)

const service = {
  $: http,
  request: <T = any>(
    ...args: Parameters<AxiosInstance['request']>
  ): Promise<HTTPResult<T>> => http.request(...args),
  get: <T = any>(...args: Parameters<AxiosInstance['get']>): Promise<HTTPResult<T>> =>
    http.get(...args),
  delete: <T = any>(
    ...args: Parameters<AxiosInstance['delete']>
  ): Promise<HTTPResult<T>> => http.delete(...args),
  head: <T = any>(...args: Parameters<AxiosInstance['head']>): Promise<HTTPResult<T>> =>
    http.head(...args),
  options: <T = any>(
    ...args: Parameters<AxiosInstance['options']>
  ): Promise<HTTPResult<T>> => http.options(...args),
  post: <T = any>(...args: Parameters<AxiosInstance['post']>): Promise<HTTPResult<T>> =>
    http.post(...args),
  put: <T = any>(...args: Parameters<AxiosInstance['put']>): Promise<HTTPResult<T>> =>
    http.put(...args),
  patch: <T = any>(
    ...args: Parameters<AxiosInstance['patch']>
  ): Promise<HTTPResult<T>> => http.patch(...args),
}

export default service
