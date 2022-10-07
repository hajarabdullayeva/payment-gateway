<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'antd/dist/antd.min.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import {
  ROUTES
} from "./routes";
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'antd/dist/antd.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTES } from './routes'
>>>>>>> caa5c01afb0af820aafb5384f66914a12fab8e96

const router = createBrowserRouter(ROUTES)

<<<<<<< HEAD
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( < RouterProvider router = {
      router
    }
    /> );
=======
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router} />)
>>>>>>> caa5c01afb0af820aafb5384f66914a12fab8e96
