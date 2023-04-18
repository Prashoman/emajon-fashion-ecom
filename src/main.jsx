import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import loadingProductData from './Loders/Loders';
import CheckOut from './components/Checkout/CheckOut';
import Login from './components/Login/Login';
import SingUp from './components/SingUp/SingUp';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './privateRoute/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        loader : loadingProductData,
      },
      {
        path: "checkout",
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        
      },
      {
        path: "login",
        element: <Login></Login>,
        
      },
      {
        path: "signup",
        element: <SingUp></SingUp>,
        
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
