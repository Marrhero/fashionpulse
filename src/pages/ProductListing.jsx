import Sidebar from "../Sidebar"
import ItemCard from "../ItemCard"
import CategoriesBanner from "../CategoriesBanner"
import { useState, useEffect } from "react";


export default function ProductListing(){

        const [products, setProducts] = useState([]);
      
        useEffect(() => {
          const fetchProducts = async () => {
            try {
              const response = await fetch(
                "https://timbu-get-all-products.reavdev.workers.dev/?organization_id=f44fb35060be4c7aadeab2810c700bc8&Appid=FLRK0IB2DRDGOIZ&Apikey=c8c9e1a1fbdb4c94bbb7b7dfb96c470720240712192548445158"
              );
              const data = await response.json();

              setProducts(data.items);
              console.log(data.items);

            } catch (error) {
              console.error("Error fetching products", error);
            }
          };
      
          fetchProducts();
        }, []);

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
                
           
                <ItemCard product={products[0]} image="./images/Rectangle 6099.png"/>
                <ItemCard product={products[0]} image="./images/image 85.png"/>
                <ItemCard product={products[1]} image="./images/Rectangle 6099.png"/>
                <ItemCard product={products[1]} image="./images/Rectangle 6099.png"/>
                <ItemCard product={products[2]} image="./images/image 85.png"/>
                <ItemCard product={products[2]} image="./images/Rectangle 6099.png"/>
            
                </div>
            
            </div>

            <div className=" mt-[9.706rem] mb-[8.6875rem] mr-[5.035vw]">
                <CategoriesBanner/> 
            </div>
        </div>
        </>
    )
}
