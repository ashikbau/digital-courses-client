import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import FQA from "../../Pages/FQA/FQA";
import Home from "../../Pages/Home/Home";
import CourseDetails from "../../Pages/Shared/CourseDetails/CourseDetails";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Courses></Courses>

            },
            {
                path:'/home',
                element: <Home></Home>

            },
            {
                path:'/courses',
                element: <Courses></Courses>,
                loader:()=> fetch('http://localhost:5000/courses')
            },
            {
                path:'/courses/:id',
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/courses/${params.id}`);
                  },
                element: <CourseDetails></CourseDetails>,
                
            
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