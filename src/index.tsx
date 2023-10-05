import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import FirstPage from './pages/FirstPage/FirstPage'
import SecondPage from './pages/SecondPage/SecondPage'
import ThirdPage from './pages/ThirdPage/ThirdPage'
import FinishPage from './pages/FinishPage/FinishPage'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ErrorPage from './pages/ErrorPage/ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <FirstPage />,
      },
      {
        path: "/2",
        element: <SecondPage  />,
      },
      {
        path: "/3",
        element: <ThirdPage />,
      },
      {
        path: "/result",
        element: <FinishPage />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
