import Sidebar from "../Sidebar"
import ItemCard from "../ItemCard"
import CategoriesBanner from "../CategoriesBanner"


export default function ProductListing(){
    return(
        <>
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
        </>
    )
}
