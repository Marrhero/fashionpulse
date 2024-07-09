export default function Checkout(){
    return(
        <>
            <h1 className="text-faint-grey font-black font-urbanist text-[1.125rem] md:text-[3rem] leading-[57.6px] letter-spacing-40 text-center mt-[12px] mb-[1.875rem]">
                CHECKOUT
            </h1>

            {/*Checkout Section Container*/}
            <div className="flex md:flex-row flex-col font-urbanist justify-between">
                {/*BG div for details section. Only displays on large screens */}
                <div className="bg-white md:bg-ultra-faint-grey rounded-[1.375rem] space-y-[1.25rem] md:space-y-0  w-fit h-fit">
                    
                    {/*Delivery Address Section */}
                    <div className="flex flex-col rounded-[0.75rem] px-[2.836vw] py-[3rem] w-[60.87vw] bg-ultra-faint-grey">
                        
                        <div className="flex flex- justify-between">
                            <p className="text-[1.5rem] font-semibold mb-[1.25rem]">Delivery Address</p>
                            <p className="text-bold-green font-semibold text-end md:hidden block">Edit</p>
                        </div>
                        
                        <div className="flex flex-col flex-wrap w-[47.627vw] pl-[2.083vw] pr-[1.157vw] pb-[3.4375vw] pt-[0.9375rem] rounded-[1.375rem] md:bg-white bg-none">
                            <p className="text-bold-green font-semibold text-end hidden md:block">Edit</p>

                            {/*****************DETAIL INPUT FORM************/}
                            <form className="space-y-4">

                            <div className="flex space-x-4">
                                <div className="flex-1">
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                </div>
                                <div className="flex-1">
                                <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">
                                    Apartment
                                </label>
                                <input
                                    type="text"
                                    id="apartment"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                    City
                                </label>
                                <input
                                    type="text"
                                    id="city"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                </div>
                                <div>
                                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                    State
                                </label>
                                <select
                                    id="state"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    {/*List of States*/}
                                    <option value="">Select a state</option>
                                    <option>Abia</option>
                                    <option>Adamawa</option>
                                    <option>Akwa Ibom</option>
                                    <option>Anambra</option>
                                    <option>Bauchi</option>
                                    <option>Bayelsa</option>
                                    <option>Benue</option>
                                    <option>Borno</option>
                                    <option>Cross River</option>
                                    <option>Delta</option>
                                    <option>Ebonyi</option>
                                    <option>Edo</option>
                                    <option>Ekiti</option>
                                    <option>Enugu</option>
                                    <option>Federal Capital Territory</option>
                                    <option>Gombe</option>
                                    <option>Imo</option>
                                    <option>Jigawa</option>
                                    <option>Kaduna</option>
                                    <option>Kano</option>
                                    <option>Katsina</option>
                                    <option>Kebbi</option>
                                    <option>Kogi</option>
                                    <option>Kwara</option>
                                    <option>Lagos</option>
                                    <option>Nasarawa</option>
                                    <option>Niger</option>
                                    <option>Ogun</option>
                                    <option>Ondo</option>
                                    <option>Osun</option>
                                    <option>Oyo</option>
                                    <option>Plateau</option>
                                    <option>Rivers</option>
                                    <option>Sokoto</option>
                                    <option>Taraba</option>
                                    <option>Yobe</option>
                                    <option>Zamfara</option>
                                </select>
                                </div>
                                <div>
                                <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                    Postal Code
                                </label>
                                <input
                                    type="text"
                                    id="postal-code"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>

                    {/*Delivery Details Section */}
                    <div className="flex flex-col rounded-[0.75rem] px-[2.836vw] py-[3rem] w-[22.375] md:w-[60.87vw] bg-ultra-faint-grey">
                        {/* Delivery Details Title */}
                        <div className="flex justify-between">
                            <p className="text-[1.5rem] font-semibold mb-[1.25rem]">Delivery Details</p>
                            <p className="text-bold-green font-semibold text-end md:hidden block">Edit</p>
                        </div>
                        
                        {/* Delivery Details Content */}
                        <div className="flex flex-col w-[55.27vw] h-[fit] pl-[2.083vw] pr-[1.157vw] pb-[3.4375vw] pt-[0.9375rem] rounded-[1.375rem] md:bg-white bg-none">
                            <p className="text-bold-green font-semibold flex-en text-end hidden md:block">Edit</p>
                            <div className="flex flex-row ">
                                <img className="w-[5.9375rem] h-[6.064rem]" src="./images/shoe_checkout.png" alt="" />
                                <div className="flex flex-col ml-[2.125rem]">
                                    <div className="flex flex-col">
                                        <p className="text-[1.25rem] font-semibold">Nike Jordan Mid</p>
                                        <p>Men's Sneakers</p>
                                    </div>

                                    <p className="font-semibold text-dark-green text-[1.5rem] mt-[1.375rem]">0</p>

                                    <div className="flex flex-row mt-[1.375rem] text-[1.25rem] space-x-[1.50vw] text-dark-grey">
                                        <div className="flex flex-col space-y-[0.625rem]">
                                            <p className="font-semibold">Sizes</p>
                                            <p>M-44</p>
                                        </div>

                                        <div className="flex flex-col space-y-[0.625rem]">
                                            <p className="font-semibold">Color(s)</p>
                                            <p>Red, White, Black</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col text-[1.25rem] mt-[1.375rem] space-y-[0.625rem] text-dark-grey">
                                        <p className="font-semibold">Quantity</p>
                                        <p>1</p>
                                    </div>

                                </div>
                            </div>

                            <div className="flex flex-col text-[1.25rem] self-end">
                                <p className="font-semibold ">Delivery Options</p>

                                <div className="flex flex-row mt-[1.25rem] space-x-[2.315vw] ">
                                    <button className="w-[8.507vw] h-[6.0625rem] text-center border-[1px]">
                                        <span className="flex flex-col rounded-[0.4375rem]">
                                        <p className="font-medium mx-auto">Pickup</p>
                                        <p className="mx-auto mt-[0.625rem] text-[0.875rem] rounded-[0.4375rem] p-[0.4375rem] bg-mild-green text-dark-green">Free</p>
                                        </span>
                                    </button>

                                    <button className="w-[8.507vw] h-[6.0625rem] border-[1px] rounded-[0.4375rem] font-500 text-center ">Delivery</button>
                                </div>

                            </div>
                         </div>
                    </div>

                    {/* Payment Methods Section */}
                    <div className="flex flex-col rounded-[0.75rem] px-[2.836vw] py-[3rem] w-[60.87vw] bg-ultra-faint-grey">
                        {/* Payment Methods Title */}
                        <div className="flex justify-between">
                            <p className="text-[1.5rem] font-semibold mb-[1.25rem]">Payment Methods</p>
                            <p className="text-bold-green font-semibold text-end md:hidden block">Edit</p>
                        </div>
                        
                        {/*Payment Methods Content*/}
                        <div className="flex flex-col w-[55.27vw] h-[13.6875vw] pl-[2.083vw] pr-[1.157vw] pb-[3.4375vw] pt-[0.9375rem] rounded-[1.375rem] md:bg-white bg-none">
                            <p className="text-bold-green font-semibold text-end hidden md:block">Edit</p>
                            <p className="font-medium mx-auto my-auto text-dark-grey">This site doesn't accept payments currently</p>
                         </div>
                    </div>


                </div>

                {/*CHECKOUT DETAILS CONTAINER*/}
                <div className="flex flex-col">
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

                        {/*Proceed to Payment Button*/}
                        <button className="bg-bold-green mt-[5.3125rem] w-[21.528vw] rounded-[2.625rem] px-[0.242rem] py-[1.25rem] text-white font-urbanist font-semibold text-[1.25rem]">Proceed to Payment</button>  
                    </div>

                    <label className="font-medium text-dark-grey mr-[4.80vw] mt-[1.938rem] " htmlFor=""><input className="bg-check-grey ml-[2.26vw] mr-[0.694vw] mt-[1.938rem] w-[1.25rem] h-[1.25rem]" type="checkbox" name="" id="" />By completing your purchase, you agree to the <span className="font-semibold underline">Terms and Conditions.</span></label>
                </div>

            </div>
        </>
    )
}
