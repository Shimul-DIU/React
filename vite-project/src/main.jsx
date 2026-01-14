import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'  
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Contact from './pages/Contact/Contact.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import Servises from './pages/Servises/Servises.jsx';
import Home from './pages/Home/Home.jsx';
import Products from './pages/Products/Products.jsx';
import Product from './Components/Product/Product.jsx';
let router=createBrowserRouter(
  [
    {
      path:'/',
      element:<App></App>,
      children:[
        {
      path:'/Home',
      element:<Home></Home>
    },
    {
      path:'/Products',
      loader:()=>fetch('allProducts.json'),
      element:<Products></Products>
    },
    {
      path:'/product/:id',
      loader:({params})=>fetch(`allProducts.json/${params.id}`),
      element:<Product></Product>
    },
        {
      path:'/Contact',
      element:<Contact></Contact>
    },
    {
      path:'/AboutUs',
      element:<AboutUs></AboutUs>
    },
    {
      path:'/Servises',
      element:<Servises></Servises>
    }
      ]
    },
    
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
