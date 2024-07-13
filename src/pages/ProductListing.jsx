import Sidebar from "../Sidebar"
import ItemCard from "../ItemCard"
import CategoriesBanner from "../CategoriesBanner"
import { useState, useEffect } from "react";


export default function ProductListing(){

  const appId = import.meta.env.VITE_APP_ID;
  const apiKey = import.meta.env.VITE_API_KEY;


        const [products, setProducts] = useState([]);
      
        useEffect(() => {
          const fetchProducts = async () => {
            try {
              const response = await fetch(
                `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=${import.meta.env.VITE_ORGANIZATION_ID}&Appid=${appId}&Apikey=${apiKey}`
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
                
           
                <ItemCard product={products[0]} />
                <ItemCard product={products[1]} />
                <ItemCard product={products[2]} />
                <ItemCard product={products[3]} />
                <ItemCard product={products[4]} />
                <ItemCard product={products[5]} />
                <ItemCard product={products[6]} />
                <ItemCard product={products[7]} />
                <ItemCard product={products[8]} />
                <ItemCard product={products[9]} />
            
                </div>
            
            </div>

            <div className=" mt-[9.706rem] mb-[8.6875rem] mr-[5.035vw]">
                <CategoriesBanner/> 
            </div>
        </div>
        </>
    )
}
