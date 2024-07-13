export default function ItemCard(props){
    
    /* Spread this array later*/
    let product = props.product;
    let productName = "";
    let price = [];
    let photo = "";
    
    if (product != null)
    {
        productName = product.name;
        price = product.current_price[0]?.NGN[0];
        photo = product?.photos[0];
        console.log(photo);
    }
        
    return(
        <>
            <div className="flex flex-col justify-start mb-[3.625rem] ">
                
                <div className="w-[12.04vw] h-auto bg-ultra-faint-grey">
                    <img className=" overflow-hidden" src="/api/images/${photo.url}"/>
                </div>
             
                <div className="flex flex-col text-[1.25rem] font-medium font-urbanist">
                    <h4>{productName}</h4>
                    <div className="flex flex-row space-x-[1.25rem]">
                        <div className="flex flex-row font-light">
                            <p>₦</p>
                            <p>{price}</p>
                        </div>

                        <img className="w-[1.62125rem] md:w-[2.5rem] inline" src=".\images\ic_round-add.svg" alt="" />
                    </div>

                    <div className="flex flex-row">
                        <img src="./images/star_unfilled.svg" alt="" />
                        <img src="./images/star_unfilled.svg" alt="" />
                        <img src="./images/star_unfilled.svg" alt="" />
                        <img src="./images/star_unfilled.svg" alt="" />
                        
                    </div>
                 </div>
            </div>
        </>
    )
}