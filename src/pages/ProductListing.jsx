import Sidebar from "../Sidebar"
import ItemCard from "../ItemCard"
import CategoriesBanner from "../CategoriesBanner"


export default function ProductListing(){
    return(
        <>
        <div className="flex flex-col min-h-[100vh]">
            <p className="text-faint-grey font-black font-urbanist text-[1.125rem] md:text-[3rem] leading-[57.6px] letter-spacing-40 text-center mt-[12px] mb-[1.875rem]">
                MEN’S SNEAKERS
            </p>

        
            <div className="flex flex-row">
                <Sidebar/>

                {/*PRODUCT CARDS CONTAINER */}
                <div className="flex flex-row align-middle m-0 justify-between ml-[6.77vw] p-0 flex-wrap flex-1 mr-0 ">
                
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

            <div className=" mt-[9.706rem] mb-[8.6875rem] mr-[5.035vw]">
                <CategoriesBanner/> 
            </div>
        </div>
        </>
    )
}
