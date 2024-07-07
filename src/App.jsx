import "./Header"
import "./PromoBanner"
import "./Footer"
import Header from './Header'
import PromoBanner from "./PromoBanner"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import ItemCard from "./ItemCard"



function App() {

  return (
    <div class="flex flex-col min-h-[100vh]">
      <Header/>
      <PromoBanner/>

      <h1 className="text-faint-grey font-black font-urbanist text-[48px] leading-[57.6px] letter-spacing-40 text-center mt-[12px] mb-[1.875rem]">MEN’S SNEAKERS</h1>
      
      <div className="flex flex-row">
        <Sidebar/>

        <div className="flex flex-col ml-[6.28vw] space-y-[3.625rem]">
          <div className="flex flex-row space-x-[2.72vw]">
              <ItemCard image="./images/Rectangle 6099.png"/>
              <ItemCard image="./images/image 85.png"/>
              <ItemCard image="./images/Rectangle 6099.png"/>
              <ItemCard image="./images/Rectangle 6099.png"/>
              <ItemCard image="./images/image 85.png"/>
            </div>

            <div className="flex flex-row space-x-[2.72vw]">
              <ItemCard image="./images/Rectangle 6099.png"/>
              <ItemCard image="./images/image 85.png"/>
              <ItemCard image="./images/Rectangle 6099.png"/>
              <ItemCard image="./images/Rectangle 6099.png"/>
              <ItemCard image="./images/image 85.png"/>
            </div>


            <div className="flex flex-row space-x-[2.72vw]">
              <ItemCard image="./images/Rectangle 6099.png"/>
              <ItemCard image="./images/image 85.png"/>
              <ItemCard image="./images/Rectangle 6099.png"/>
              <ItemCard image="./images/Rectangle 6099.png"/>
              <ItemCard image="./images/image 85.png"/>
            </div>


            <div className="flex flex-row space-x-[2.72vw]">
              <ItemCard image="./images/Rectangle 6099.png"/>
              <ItemCard image="./images/image 85.png"/>
              <ItemCard image="./images/Rectangle 6099.png"/>
              <ItemCard image="./images/Rectangle 6099.png"/>
              <ItemCard image="./images/image 85.png"/>
            </div>

        </div>
        
      </div>

      <Footer/>
    </div>
  )
}

export default App
