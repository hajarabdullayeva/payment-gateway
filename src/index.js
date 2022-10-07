import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'antd/dist/antd.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTES } from './routes'
const router = createBrowserRouter(ROUTES)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router} />)
