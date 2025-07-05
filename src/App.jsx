import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import {createBrowserRouter, Outlet} from "react-router-dom";
import Kid from './components/Kid'
import Men from './components/Men'

function App() {
  
  return (
    <>
      <div>
        <Navbar/>
       <Outlet/>
      </div>
      
    </>
  )
}

export default App
