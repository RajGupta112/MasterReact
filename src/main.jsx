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
    ]
  }
  

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
