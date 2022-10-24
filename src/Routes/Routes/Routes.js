import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import FQA from "../../Pages/FQA/FQA";
import Home from "../../Pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>

            },
            {
                path:'/home',
                element: <Home></Home>

            },
            {
                path:'/courses/:id',
                element: <Courses></Courses>
            },
            {
                path:'/faq',
                element: <FQA></FQA>
            },
            {
                path:"/blog",
                element: <Blog></Blog>
            }
        ]
    }
]);