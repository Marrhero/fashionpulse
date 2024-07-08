
export default function Header({toggleNavRail}){

    return (
        <>
            <div className="flex flex-row align-center w-[100%]  md:w-[91.09vw] bg-white md:bg-ultra-faint-grey rounded-br-[0.625rem] rounded-bl-[0.625rem] space-x-[10.42vw] px-[1rem] md:px-[2.89vw] py-[1.25rem] mx-auto ">
                
                <div className="flex flex-row ">
                    <img className="block md:hidden w-[1.25rem] mr-[3.4375rem]" src="./images/hamburger_icon.svg" onClick={toggleNavRail} />
                    
                    <h1 className="font-helvetica font-bold my-auto text-[1.25rem] md:text-[2.5rem]">FASHIONPULSE</h1>
                </div>

                <div className="flex flex-row space-x-[12.21vw] align-middle">
                    <ul className="flex-row font-urbanist font-medium w-[24.248vw] space-x-[4.6875vw] m-0 my-auto hidden md:flex">
                        <li>Men</li>
                        <li>Women</li>
                        <li>Collections</li>
                        <li>Sale</li>
                    </ul>

                    <div className="flex flex-row my-auto justify-between">
                        
                        <input type="text" className="font-urbanist text-[1.125rem] font-medium h-[2.625rem] w-[13.25vw] rounded-[2rem] hidden md:block" placeholder="Search"/>
                        
                        <div className="flex flex-row md:w-[4.75rem] space-x-[0.640625rem] md:space-x-[0.69vw] ml-2 mr-[0.405rem]">
                            <img className="w-[0.84375rem] md:w-[1.5rem]" src="./images/heart_icon.svg" alt="" />
                            <img className="w-[0.84375rem] md:w-[1.5rem]" src="./images/cart_icon.svg" alt="" />
                        </div>
                    </div>
                </div>

                
            </div>
        </>
    )
}