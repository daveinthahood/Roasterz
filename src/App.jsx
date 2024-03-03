
import { Outlet } from 'react-router-dom'
import './App.css'

import { needUser } from './Utility/needUser'

function App() {
 

  return (
    <>
      <Outlet />
    </>
  )
}

export const ProtectedApp = needUser(App)
