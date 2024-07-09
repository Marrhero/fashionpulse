

export default function Cart(){
    return(
        <>
            <h1 className="text-faint-grey font-black font-urbanist text-[1.125rem] md:text-[3rem] leading-[57.6px] letter-spacing-40 text-center mt-[12px] mb-[1.875rem]">CART</h1>
            <h1 className="ml-[5.035%]">Cart Item(s) 0</h1>

            <div className="flex flex-col md:flex-row ml-[5.035%]">
                <div className="flex flex-col justify-center bg-faint-grey">
                    <p className="text-dark-grey">You don't have any items in your cart</p>
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}
