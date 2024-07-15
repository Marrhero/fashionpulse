import { Link, useLocation } from "react-router-dom"
import Recommendations from "../Recommendations"

export default function Product(){

    
    const location = useLocation();
    console.log(location)

    const {product} = location.state || {};
    const name = product?.name || "PRODUCT";

    let photo="";

    if (product.photos && product.photos.length > 0 && product.photos[0]?.url) 
        photo = "https://api.timbu.cloud/images/" + product.photos[0].url;


    return(
        <>
            <h1 className="text-faint-grey font-black font-urbanist text-[1.125rem] md:text-[3rem] leading-[57.6px] letter-spacing-40 text-center mt-[12px] mb-[1.875rem]">
                {name}
            </h1>

            <div className="flex flex-col md:flex-row md:justify-between mt-[1.875rem] mb-0 h-fit">
                {/*PRODUCT DETAILS */}
                <div className=" bg-ultra-faint-grey md:w-[51.85vw] md:h-[35.8125rem] rounded-[1.375rem]">
                    <img className="md:h-[30rem] my-auto mx-auto mt-[4.3125rem]" src={photo} alt="" />
                </div>

                {/*CHECKOUT DETAILS CONTAINER*/}
                <div className="flex flex-col justify-center md:w-[25.051vw] md:h-fit py-[2.5rem] bg-ultra-faint-grey rounded-[1.375rem]">
                    
                    {/*DETAILS FLEX */}
                    <div className="flex flex-col font-urbanist space-y-[2.4375rem] md:mx-[4.022vw] text-left">
                        <p><span className="font-semibold text-[1.5rem] ">0 item(s)</span> in your cart</p>
                        
                        <div className="flex flex-row justify-between text-[1.25rem]">
                            <div className="flex flex-row space-x-[0.625rem]"> 
                                <p className="font-semibold">Subtotal</p>
                                <img className="w-1.219rem" src="./images/info.svg" alt="" />
                            </div>
                            <p className="font-medium text-dark-green">0</p>
                        </div>

                        <div className="flex flex-row justify-between text-[1.25rem]">
                            <p className="font-semibold">Delivery Fee</p>
                            <p className="font-medium text-dark-grey">₦0</p>
                        </div>

                        <div className="flex flex-row justify-between text-[1.25rem]">
                            <div className="flex flex-row space-x-[0.625rem]">
                                <p className="font-semibold text-[1.25rem]">Estimated Tax</p>
                                <img className="w-1.219rem" src="./images/info.svg" alt="" />
                            </div>

                            <p className="font-medium text-dark-grey">₦0.00</p>
                        </div>

                        <div className="flex flex-row justify-between p-[1.25rem] text-[1.25rem] bg-white rounded-[1.375rem]">
                            <p className="font-urbanist font-semibold ">Estimated Total</p>
                            <p className="text-dark-green font-semibold">0</p>
                        </div>
                    </div>


                    {/*Proceed to Checkout Button*/}
                    <Link className = "mx-auto" to="/checkout">
                        <button className="bg-bold-green mt-[5.3125rem] w-[21.528vw] rounded-[2.625rem] px-[0.242rem] py-[1.25rem] text-white font-urbanist font-semibold text-[1.25rem]">Proceed to Checkout</button>
                    </Link>
                </div>
            </div> 

            <Recommendations/>
        </>
    )
}
