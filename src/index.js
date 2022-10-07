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
import ContextProvider from "context/ContextProvider";

const router = createBrowserRouter(ROUTES);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( < ContextProvider > < RouterProvider router = {
    router
  }
  /></ContextProvider > );