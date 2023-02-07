import { Navigate, Route, Routes as ReactWrapperRoutes } from 'react-router-dom'

import * as Page from '../features'
import RouterLayout from './RouterLayout'

const Routes = () => {
  return (
    <ReactWrapperRoutes>
      <Route path="/app" element={<RouterLayout />}>
        <Route path="login" element={<Page.LoginPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/app/login" replace />} index />
    </ReactWrapperRoutes>
  )
}

export default Routes
