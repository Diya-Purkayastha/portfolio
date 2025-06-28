import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from '../src/page/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import ProjectDetails from './page/ProjectDetails';
import MainLayout from './layout/MainLayout';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/project/:id",
        Component: ProjectDetails
      }
    ]
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
