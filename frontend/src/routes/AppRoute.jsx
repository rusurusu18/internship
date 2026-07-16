import react from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from "../pages/Home"
import Error from "../pages/Error"
import { Children } from 'react'
import Contact from '../pages/Contact'
import About from '../pages/About'

const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<Home />,
            errorElement: <Error />,

            children:[
                {
                    index:true,
                    element:<Home />

                },{
                path:"about",
                element:<About />
            },{
                path:"contact",
                element:<Contact />
            }
            ]
            
        }
    ]
)