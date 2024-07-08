import "./Header"
import "./PromoBanner"
import "./Footer"
import Header from './Header'
import PromoBanner from "./PromoBanner"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import ItemCard from "./ItemCard"
import CategoriesBanner from "./CategoriesBanner"
import NavRail from "./NavRail"

import { useState, useEffect, useRef} from "react"



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
      
      
      <div className="absolute" ref={menuRef}>
        <NavRail railVisible={isNavRailVisible}/>
      </div>

      <div className="flex flex-col-reverse md:flex-col space-y-0">
        <div className="mt-[0.625rem] md:mt-0">
          <Header toggleNavRail={toggleNavRail}/>
        </div>
        <div className="mt-0 md:[0.75rem]">
          <PromoBanner/>
        </div>
      </div>
      

      <h1 className="text-faint-grey font-black font-urbanist text-[1.125rem] md:text-[3rem] leading-[57.6px] letter-spacing-40 text-center mt-[12px] mb-[1.875rem]">MEN’S SNEAKERS</h1>
      
      <div className="flex flex-row">
        <Sidebar/>

        {/*PRODUCT CARDS CONTAINER */}
        <div className="flex flex-row align-middle m-0 justify-between p-0 flex-wrap flex-1 ml-[6.28vw] mr-[5.035vw]">
          
          <ItemCard image="./images/Rectangle 6099.png"/>
          <ItemCard image="./images/image 85.png"/>
          <ItemCard image="./images/Rectangle 6099.png"/>
          <ItemCard image="./images/Rectangle 6099.png"/>
          <ItemCard image="./images/image 85.png"/>
          <ItemCard image="./images/Rectangle 6099.png"/>
          <ItemCard image="./images/image 85.png"/>
          <ItemCard image="./images/Rectangle 6099.png"/>
          <ItemCard image="./images/Rectangle 6099.png"/>
          <ItemCard image="./images/image 85.png"/>
          <ItemCard image="./images/Rectangle 6099.png"/>
          <ItemCard image="./images/image 85.png"/>
          <ItemCard image="./images/Rectangle 6099.png"/>
          <ItemCard image="./images/Rectangle 6099.png"/>
          <ItemCard image="./images/image 85.png"/>
          <ItemCard image="./images/Rectangle 6099.png"/>
          <ItemCard image="./images/image 85.png"/>
          <ItemCard image="./images/Rectangle 6099.png"/>
          <ItemCard image="./images/Rectangle 6099.png"/>
          <ItemCard image="./images/image 85.png"/>

        </div>
        
      </div>

      <div className="ml-[23.9vw] mt-[9.706rem] mb-[8.6875rem] mr-[5.035vw]">
        <CategoriesBanner/> 
      </div>
      

      <Footer/>
    </div>
  )
}

export default App
