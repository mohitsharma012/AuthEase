import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter,Navigate } from 'react-router-dom'

import LoginPage from './Pages/loginPage'
import SignUp from './Pages/SignUp'
import DashboardPage from './Pages/dashboardPage'

const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/login" /> },
  { path: '/login', element: <LoginPage /> },
  { path : '/signup', element: <SignUp /> },
  { path : '/dashboard', element: <DashboardPage /> }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />    
  </StrictMode>,
)
