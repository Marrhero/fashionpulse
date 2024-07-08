export default function NavRail(props){
    
    let railVis = props.railVisible;
    
    return(
        <>
            <div className= {`w-[13.1875rem] h-[100%] pt-[3.8125rem] bg-white ${railVis ? 'relative slide-in' : 'hidden slide-out'}`}>
                <div className="flex flex-col space-y-[1.625rem] ml-[1.625rem] ">
                    <p className="font-helvetica font-bold">FASHIONPULSE</p>

                    <div className="flex flex-col font-urbanist space-y-[15rem]">
                        <ul className="font-medium text-[1.125rem] space-y-[1.4375rem]">
                            <li>Men</li>
                            <li>Women</li>
                            <li>Collections</li>
                            <li>Sale</li>
                        </ul>

                        <ul className="flex flex-col space-y-[1.4375rem] font-medium text-[0.75rem]">
                            <li>Cart</li>
                            <li>Favorites</li>
                            <li>Help</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}