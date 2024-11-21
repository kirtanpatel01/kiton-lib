import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GetStarted, Components } from './pages'
import { Buttons, ComponentsLayout } from './components'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <GetStarted />
      },
      {
        path: '/components',
        element: <ComponentsLayout />,
        children: [
          {
            path: '/',
            element: <Components />
          },
          {
            path: 'buttons',
            element: <Buttons />
          },
        ]
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
