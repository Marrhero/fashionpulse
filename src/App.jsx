import "./Header"
import "./PromoBanner"
import "./Footer"
import Header from './Header'
import PromoBanner from "./PromoBanner"
import Footer from "./Footer"
import NavRail from "./NavRail"

import { useState, useEffect, useRef} from "react"

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductListing from "./pages/ProductListing"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"

function App() {

  const [isNavRailVisible, setIsNavRailVisible] = useState(false);

    const menuRef = useRef(null);

  useEffect(()=>{
    let handler = (e) => {
      if (menuRef != null)
      {
        if (!menuRef.current.contains(e.target))
          setIsNavRailVisible(false);
      }
    };

    document.addEventListener("mousedown", handler)
  })

  const toggleNavRail = () => {
    setIsNavRailVisible(!isNavRailVisible);
  }

  return (
    <div className="flex flex-col min-h-[100vh]">

    <Router>
      <div className="absolute" ref={menuRef}>
        <NavRail railVisible={isNavRailVisible}/>
      </div>

      <div className="flex flex-col-reverse md:flex-col space-y-0">
        <div className="mt-[0.625rem] md:mt-0">
          <Header toggleNavRail={toggleNavRail}/>
        </div>
        <div className="mt-0 md:mt-[0.75rem]">
          <PromoBanner/>
        </div>
      </div>

      <div className="ml-[6.28vw] mr-[5.035vw]">
        <Routes>
          <Route path="/" element={<ProductListing/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </div>

    </Router>
       
    <Footer/>
  </div>
  )
}

export default App
