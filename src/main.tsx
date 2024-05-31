import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from "./pages/Login/Login.tsx"
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import { NextUIProvider } from "@nextui-org/react";
import ProjectPage from './pages/ProjectPage/ProjectPage.tsx';
import ImportProject from './pages/ImportProject/ImportProject.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/project",
    element: <ProjectPage />,
  },
  {
    path: "/import",
    element: <ImportProject />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <NextUIProvider>
    <RouterProvider router={router} />
  </NextUIProvider>
)
