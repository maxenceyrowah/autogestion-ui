import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { apiConfig } from '../../api'

type QueryKeyT = [string, object | undefined]
type AppHeaders = {
  Authorization?: string
  token?: string
}

export const usePrefetch = <T>(
  url: string,
  params?: object,
  headers?: AppHeaders
) => {
  const queryClient = useQueryClient()

  return async () => {
    await queryClient.prefetchQuery<T, Error, T, QueryKeyT>(
      [url, params],
      async ({ queryKey, pageParam }): Promise<T> => {
        const [url, params] = queryKey
        const res = await apiConfig.get<T>(
          url,
          {
            params: {
              ...params,
              pageParam,
            },
          },
          headers
        )
        return res.data
      }
    )
  }
}
const useGenericMutation = <T, S>(
  func: (data: T | S) => Promise<AxiosResponse<S>>,
  url: string,
  params?: object,
  updater?: ((oldData: T, newData: S) => T) | undefined
) => {
  const queryClient = useQueryClient()

  return useMutation<AxiosResponse, AxiosError, T | S>(func, {
    onMutate: async (data: T | S) => {
      await queryClient.cancelQueries([url, params])

      const previousData = queryClient.getQueryData([url, params])

      await queryClient.setQueryData<T>([url, params], (oldData) => {
        return updater ? updater(oldData as T, data as S) : (data as T)
      })

      return previousData
    },
    onError: async (err, _, context) => {
      await queryClient.setQueryData([url, params], context)
    },
    onSettled: async () => {
      await queryClient.invalidateQueries([url, params])
    },
  })
}
export const useFetch = <T>(
  url: string,
  params?: object,
  config?: UseQueryOptions<Promise<T>, Error, T, QueryKeyT>,
  headers?: AppHeaders
) => {
  return useQuery<Promise<T>, Error, T, QueryKeyT>(
    [url, params],
    async ({ queryKey, pageParam }): Promise<T> => {
      const [url, params] = queryKey
      const res = await apiConfig.get<T>(
        url,
        {
          params: {
            ...params,
            pageParam,
          },
        },
        {
          ...headers,
        }
      )
      return res.data
    },
    {
      enabled: !!url,
      ...config,
    }
  )
}
export const usePost = <T extends S, S>(
  url: string,
  params?: object,
  updater?: (oldData: T, newData: S) => T,
  headers?: AppHeaders
) => {
  return useGenericMutation<T, S>(
    (data) => apiConfig.post<S>(url, data, headers),
    url,
    params,
    updater
  )
}
export const useUpdate = <T extends S, S>(
  url: string,
  params?: object,
  updater?: (oldData: T, newData: S) => T,
  headers?: AppHeaders
) => {
  return useGenericMutation<T, S>(
    (data) => apiConfig.put<S>(url, data, headers),
    url,
    params,
    updater
  )
}
export const useDelete = <T>(
  url: string,
  params?: object,
  updater?: (oldData: T, id: string | number) => T,
  headers?: AppHeaders
) => {
  return useGenericMutation<T, string | number>(
    (id) => apiConfig.delete(`${url}/${id}`, headers),
    url,
    params,
    updater
  )
}
