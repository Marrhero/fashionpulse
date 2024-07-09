export default function(){
    return(
        <>
            <div className="md:flex flex-col hidden space-y-[2.3125rem] w-[12.9375rem]">

                {/*Title segment */}
                <div className="flex flex-col">
                    <h3 className="font-bold">Men's Fashion</h3>
                    <p className="font-medium mt-[0.5625rem] ml-[1.25rem]">Shoes / Sneakers</p>
                </div>

                {/*Divider */}
                <div className="w-[9.375rem] bg-dark-grey h-[1px]"></div>

                {/*Shoes segment*/}
                <div className="flex flex-col font-urbanist">
                    <h3 className="font-bold text-[1.25rem] m-0">Shoes</h3>
                    <ul className="text-dark-grey mt-[0.8125rem] ml-[1.25rem]">
                        <li>Sneakers</li>
                        <li>Trainers</li>
                        <li>Work Shoes</li>
                        <li>Walking Shoes</li>
                        <li>Black Shoes</li>
                    </ul>
                </div>

                {/*Divider */}
                <div className="w-[9.375rem] bg-dark-grey h-[1px]"></div>

                {/*Athletics segment*/}
                <div className="flex flex-col">
                    <h3 className="font-bold text-[1.25rem] m-0">Athletics</h3>
                    <ul className="text-dark-grey mt-[0.8125rem] ml-[1.25rem]">
                        <li>Running</li>
                        <li>Basketball</li>
                        <li>Football</li>
                        <li>Tennis</li>
                        <li>Training & Gym</li>
                    </ul>
                </div>

                {/*Divider */}
                <div className="w-[9.375rem] bg-dark-grey h-[1px]"></div>

                {/*Lifestlye segment*/}
                <div className="flex flex-col">
                    <h3 className="font-bold text-[1.25rem] m-0">Lifestyle</h3>
                    <ul className="text-dark-grey mt-[0.8125rem] ml-[1.25rem]">
                        <li>Loafers</li>
                        <li>Sandals</li>
                        <li>Brogues</li>
                        <li>Clarks</li>
                        <li>Birkenstocks</li>
                    </ul>
                </div>

                {/*Divider */}
                <div className="w-[9.375rem] bg-dark-grey h-[1px]"></div>

                <h3 className="font-bold text-[1.25rem]">Pick Up Now</h3>
            </div>
        </>
    )
}