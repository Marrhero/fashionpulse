
export default function Header(){

    return (
        <>
            <div className="flex flex-row w-[91.09vw] bg-ultra-faint-grey rounded-br-[0.625rem] rounded-bl-[0.625rem] space-x-[10.42vw] px-[2.89vw] py-[1.25rem] mx-auto">
                <h1 className="font-helvetica font-bold text-[2.5rem]">FASHIONPULSE</h1>

                <div className="flex flex-row space-x-[12.21vw] align-middle">
                    <ul className="flex flex-row font-urbanist font-medium space-x-[4.6875vw] m-0">
                        <li>Men</li>
                        <li>Women</li>
                        <li>Collections</li>
                        <li>Sale</li>
                    </ul>

                    <div className="flex flex-row space-x-[5.21vw]">
                        <input type="text" className="font-urbanist text-[1.125rem] font-medium h-[2.625rem] w-[13.25vw] rounded-[2rem]" placeholder="Search"/>
                        
                        <div className="flex flex-row space-x-[0.69vw]">
                            <img className="h-[3.375rem]" src="./images/heart_icon.svg" alt="" />
                            <img className="h-[3.375rem]" src="./images/cart_icon.svg" alt="" />
                        </div>
                    </div>
                </div>

                
            </div>
        </>
    )
}