import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom'
import Kid from './components/Kid.jsx'
import Men from './components/Men.jsx'
import ProductCard from './components/ProductCard.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import About from './components/About.jsx'
import Grocery from './components/Grocery.jsx'
import Cart from './components/Cart.jsx'
import Memo from './components/Memo.jsx'
import UsingRef from './components/UsingRef.jsx'

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
       {
    path:"/",
    element:<ProductCard/>
  },
{
    path:"/kid",
    element:<Kid/>
  },
  {
    path:"/men",
    element:<Men/>
  },
   {
    path:"/product/:productId",
    element:<ProductDetails/>
  },
  {
    path:"/about",
    element:<About/>
  },
    {
    path:"/grocery",
    element:<Grocery/>
  },
  {
    path:"/memo",
    element:<Memo/>
  },
   {
    path:"/ref",
    element:<UsingRef/>
  },
  {
    path:"/cart",
    element:<Cart/>
  }
    ]
  }
  

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
