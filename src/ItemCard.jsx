import { Link } from "react-router-dom";

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
          
        if (product.photos && product.photos.length > 0 && product.photos[0]?.url) 
            photo = "https://api.timbu.cloud/images/" + product.photos[0].url;
    }
        
    return(
        <>
            <div className="flex flex-col w-[10.4375rem] md:w-[13rem] justify-start mb-[3.625rem] ">
                
                <div className="w-fit h-auto bg-ultra-faint-grey">
                    <Link to="/product" state={{ product }} >
                        <img className="w-fit" src={photo}/>
                    </Link>
                </div>
             
                <div className="flex flex-col text-[1.25rem] font-medium font-urbanist">
                    <Link to="/product">
                        <h4>{productName}</h4>
                    </Link>

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
                        <img src="./images/star_unfilled.svg" alt="" />
                    </div>
                 </div>
            </div>
        </>
    )
}