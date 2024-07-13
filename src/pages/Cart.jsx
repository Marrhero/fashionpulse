import { Link } from "react-router-dom"

export default function Cart(){
    return(
        <>
            <h1 className="text-faint-grey font-black font-urbanist text-[1.125rem] md:text-[3rem] leading-[57.6px] letter-spacing-40 text-center mt-[12px] mb-[1.875rem]">
                CART
            </h1>
            
            <h1 className=" font-urbanist font-bold text-[2rem]">Cart Item(s) <span className="text-dark-grey">0</span></h1>


            <div className="flex flex-col md:flex-row md:justify-between mt-[1.875rem] mb-0 h-fit">
                {/*CART PRODUCT DETAILS */}
                <div className="flex flex-col justify-center text-center bg-ultra-faint-grey md:w-[51.85vw] md:h-[35.8125rem] rounded-[1.375rem]">
                    <p className="text-dark-grey font-urbanist font-medium text-[1.5rem]">You don't have any items in your cart</p>
                    <img className="md:w-[11.123rem] mx-auto mt-[4.3125rem]" src="./images/shopping-bag 1.png" alt="" />
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

                    {/*Savings Ad Container */}
                    <div className="flex flex-row py-[1.906rem] mx-[2.1875rem] mt-[3.125rem] w-100 h-fit rounded-[1.375rem] bg-mild-green">
                        <img className="h-[4.4375rem]" src="./images/woman_success.png" alt="" />
                        <p className="font-urbanist font-medium text-[1.25rem]">
                            You save <span className="text-dark-green font-bold">₦</span><span className="text-dark-green">16,000.80</span> on your next order. Check out for more on sale and collections for better prices!
                        </p>
                    </div>

                    {/*Proceed to Checkout Button*/}
                    <Link className = "mx-auto" to="/checkout">
                        <button className="bg-bold-green mt-[5.3125rem] w-[21.528vw] rounded-[2.625rem] px-[0.242rem] py-[1.25rem] text-white font-urbanist font-semibold text-[1.25rem]">Proceed to Checkout</button>
                    </Link>
                </div>
            </div>

            <p className="hidden md:block font-urbanist font-semibold text-[2rem] mt-[1.8125rem]">Explore other Items</p>

            <div className="hidden md:flex flex-row flex-shrink justify-between mb-[6.4375rem]">
                <img src="./images/puma.png" alt="" />
                <img src="./images/puma.png" alt="" />
                <img src="./images/puma.png" alt="" />
            </div>
        </>
    )
}
