import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SnackbarProvider } from 'notistack'

import { anchorOrigin, queryClient, SnackbarUtilsConfigurator } from './config'
import { RouterProvider, Routes } from './routes'

const App = () => {
  return (
    <SnackbarProvider anchorOrigin={anchorOrigin}>
      <SnackbarUtilsConfigurator />
      <QueryClientProvider client={queryClient}>
        <RouterProvider env="dev">
          <Routes />
        </RouterProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SnackbarProvider>
  )
}

export default App
