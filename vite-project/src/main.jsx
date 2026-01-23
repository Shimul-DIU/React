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
import Loginform from './Components/Loginform/Loginform.jsx';
let router=createBrowserRouter(
  [
    {
      path:'/',
      element:<App></App>,
      children:[
        {
      path:'home',
      element:<Home></Home>
    },
    {
      path:'loginform',
      element:<Loginform></Loginform>

    },
    {
      path:'products',
      loader:()=>fetch('https://fakestoreapi.com/products'),
      element:<Products></Products>
    },
    {
      path:'product/:id',
      loader:({params})=>fetch(`https://fakestoreapi.com/products/${params.id}`),
      element:<Product></Product>
    },
        {
      path:'contact',
      element:<Contact></Contact>
    },
    {
      path:'aboutus',
      element:<AboutUs></AboutUs>
    },
    {
      path:'servises',
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
