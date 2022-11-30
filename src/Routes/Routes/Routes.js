import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Category from "../../Pages/AllCategories/Category/Category";
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/DashBoard/AddProduct/AddProduct";
import AllBuyer from "../../Pages/DashBoard/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/DashBoard/AllSeller/AllSeller";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import BookedPhone from "../../Pages/DashBoard/BookedPhone/BookedPhone";
import MyOrder from "../../Pages/DashBoard/MyOrder/MyOrder";
import MyProducts from "../../Pages/DashBoard/MyProducts/MyProducts";
import Payment from "../../Pages/DashBoard/Payment/Payment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import SellerRoute from "../AdminRoute/SellerRoute/SellerRoute";
import NotFound from "../NotFound/NotFound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><Category></Category></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path:'/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <BookedPhone></BookedPhone>
            },
            {
                path: '/dashboard/allusers',
                // element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
                element: <AllUsers></AllUsers>
            },
            // {
            //     path: '/dashboard/payment/:id',
            //     element: <Payment></Payment>,
            //     loader: ({params}) =>{
            //         return fetch(`http://localhost:5000/bookings/${params.id}`)
            //     }
            // },
            {
                path: '/dashboard/allseller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AllBuyer></AllBuyer>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproduct',
                element: <MyProducts></MyProducts>
            },{
                path: '/dashboard/myorder',
                element: <MyOrder></MyOrder>
            },
        ]
    }
])