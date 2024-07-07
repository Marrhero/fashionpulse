export default function ItemCard(props){
    let image = props.image;
    
    return(
        <>
            <div className="flex flex-col align-baseline justify-start">
                
                <div className="w-[13rem] h-[21.3125rem] bg-ultra-faint-grey">
                    <img className="w-[13rem] h-[21.3125rem]" src={image} alt="" />
                </div>

                
                <div className="flex flex-col text-[1.25rem] font-medium font-urbanist">
                    <h4>Nike Jordan Mid</h4>
                    
                    <div className="flex flex-row space-x-[1.25rem]">
                        <div className="flex flex-row font-light">
                            <p>₦</p>
                            <p>120000</p>
                        </div>

                        <img className="w-[2.5rem] inline" src=".\images\ic_round-add.svg" alt="" />
                    </div>

                    <div className="flex flex-row">
                        <img src="./images/star_unfilled.svg" alt="" />
                    </div>
                 </div>
            </div>
        </>
    )
}