import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import FQA from "../../Pages/FQA/FQA";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";
import CheckOutPage from "../../Pages/Shared/CheckOutPage/CheckOutPage";
import CourseDetails from "../../Pages/Shared/CourseDetails/CourseDetails";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import PrivateRoute from "../../Pages/Shared/PrivateRoute/PrivateRoute";

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
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/checkout/:id',
                element : <PrivateRoute><CheckOutPage></CheckOutPage></PrivateRoute>
            },
            {
                path:'/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path:'*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
]);