import { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Contact from './pages/Contact/Contact.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import Servises from './pages/Servises/Servises.jsx';
import Home from './pages/Home/Home.jsx';
import Products from './pages/Products/Products.jsx';
import Product from './Components/Product/Product.jsx';
import Loginform from './Components/Loginform/Loginform.jsx';
import Article from './Components/Article/Article.jsx';
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
      loader:async()=>
        {
          let data=await fetch('https://fakestoreapi.com/products')

          if (!data.ok){
            throw new Error('faild to load product');
          }
          return data.json();
        },
      element:<Products></Products>,
     errorElement:<h1>faild  to data load</h1>

    },
    {
      path:'product/:id',
      loader:async({params})=>
        {
        let data=  await fetch(`https://fakestoreapi.com/products/${params.id}`)
          return data.json();
        },
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
    {
      path:'/article',
      element:<Article></Article>
    }

  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
