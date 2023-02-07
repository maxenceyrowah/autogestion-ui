import axios from 'axios'

const baseURL = ''

const apiConfig = {
  get: <T>(url: string, params?: object, headers?: any) => {
    return axios.get<T>(url, {
      baseURL,
      headers: {
        ...headers,
      },
      ...params,
    })
  },
  post: <T>(url: string, data: any, headers?: any) => {
    return axios.post<T>(url, data, {
      baseURL,
      headers: { ...headers },
    })
  },
  put: <T>(url: string, data: any, headers?: any) => {
    return axios.put<T>(url, data, {
      baseURL,
      headers: { ...headers },
    })
  },
  delete: <T>(url: string, headers?: any) => {
    return axios.delete<T>(url, {
      baseURL,
      headers: { ...headers },
    })
  },
}
export default apiConfig
