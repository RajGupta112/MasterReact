import { lazy, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import {createBrowserRouter, Outlet} from "react-router-dom";
import Kid from './components/Kid'
import Men from './components/Men'
import ComponentA from './components/ComponentA'
import {Provider} from "react-redux"
import appStore from './store/store'
function App() {
   const Grocery= lazy(()=> import('./components/Grocery'));
      
  return (
    <>
     <Provider store={appStore}>
       <div>
        <Navbar/>
        <ComponentA/>
       <Outlet/>
      </div>
     </Provider>
     
    </>
  )
}

export default App
