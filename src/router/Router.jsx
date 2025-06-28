
import {
  createBrowserRouter,

} from "react-router";
import Home from "../page/Home";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import MainLayout from "../layout/MainLayout";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
        {
            index: true,
            Component: Home
        },
        {
            path:'/resume',
            Component:Resume
        },
        {
            path:'/portfolio',
            Component:Portfolio
        },
        {
            path:'/contact',
            Component:Contact
        }
    ]
  }
]);
