import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import TopRated from "../Pages/TopRated";
import WishCart from "../Pages/WishCart";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/toprated",
                element: <TopRated></TopRated>
            },
            {
                path: "/cart",
                element: <Cart></Cart>
            },
            {
                path: "/wishcart",
                element: <WishCart></WishCart>
            }
        ]
    }
])