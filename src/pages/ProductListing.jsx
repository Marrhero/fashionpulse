import Sidebar from "../Sidebar"
import ItemCard from "../ItemCard"
import CategoriesBanner from "../CategoriesBanner"
import { useState, useEffect } from "react";
import PageButton from "../PageButton";

export default function ProductListing(){

  const appId = import.meta.env.VITE_APP_ID;
  const apiKey = import.meta.env.VITE_API_KEY;

        const [products, setProducts] = useState([]);
        const [currentPage, setCurrentPage] = useState(1);

        console.log(currentPage);

        const itemsPerPage = 10;
      
        useEffect(() => {
          const fetchProducts = async () => {
            try {
              const response = await fetch(
                `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=${import.meta.env.VITE_ORGANIZATION_ID}&Appid=${appId}&Apikey=${apiKey}`
              );
              const data = await response.json();

              setProducts(data.items);
            } catch (error) {
              console.error("Error fetching products", error);
            }
          };
      
          fetchProducts();
        }, []);

        const handlePageChange = (pageNumber) => {
          setCurrentPage(pageNumber);
        };

        const displayedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
                
                {displayedProducts.map((product, index) => (
                  <ItemCard key={index} product={product} />
                ))}
                </div>
            </div>

            <div className="flex flex-row mx-auto w-[25vw] space-x-4">
              <PageButton label="<" onClick={() => handlePageChange(Math.max(currentPage - 1, 1))} />

              {[1, 2, 3].map((pageNumber) =>
                {
                  const active = pageNumber === currentPage;

                return(<PageButton key={pageNumber} active={active} label={pageNumber.toString()} onClick={() => handlePageChange(pageNumber)} />)
                }
              )}

              <PageButton label=">" onClick={() => handlePageChange(Math.min(currentPage + 1, Math.ceil(products.length / itemsPerPage)))} />
            </div>
            
            <p>Displaying {itemsPerPage} of {products.length} products</p>

            </div>

            <div className=" mt-[9.706rem] mb-[8.6875rem] mr-[5.035vw]">
                <CategoriesBanner/> 
            </div>
        </>
    )
}
