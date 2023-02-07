import { BrowserRouter } from 'react-router-dom'

type RouterProviderProps = { env: Env; children: JSX.Element }
type Env = 'test' | 'dev' | 'prod'

const NoProvider = ({ children }: { children: JSX.Element }) => (
  <div>{children}</div>
)

const RouterProvider = ({ env, children }: RouterProviderProps) => (
  <>
    {env === 'test' ? (
      <NoProvider>{children}</NoProvider>
    ) : (
      <BrowserRouter>{children}</BrowserRouter>
    )}
  </>
)

export default RouterProvider
