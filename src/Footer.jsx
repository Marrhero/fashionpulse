export default function Footer(){

    return(
        <>
            <div className="bg-bold-green h-[376px]">

                <div className="flex flex-row space-x-[9.78vw] ml-[7.93%] pr-0 py-[63px]">
                    {/* Left column of Footer */}
                    <div className="flex flex-col">
                        <p className="font-helvetica text-black font-bold text-[2.5rem]">FASHIONPULSE</p>
                        <div className="flex flex-col font-urbanist text-white text-[16px] font-medium">
                                <p>2089 Allen Avenue, Ikeja, Lagos/</p>
                                <p>+234 000 888 999 88/</p>
                        
                                <p>Info@Fashionpulse.com</p>
                        </div>
                    </div>

                    {/*Right column of Footer*/}
                    <div className="flex flex-row font-urbanist font-medium space-x-[4.63vw]">
                        
                        {/*Resources section*/}
                        <div className="flex flex-col">
                            <p className="text-dark-green">Resources</p>
                            <ul className=" text-white">
                                <li>Shop Men</li>
                                <li>Shop Women</li>
                                <li>Best Sellers</li>
                                <li>Gift Cards</li>
                            </ul>
                        </div>

                        {/*New and Featued section*/}
                        <div className="flex flex-col">
                            <p className="text-dark-green">New & Featured</p>
                            <ul className=" text-white">
                                <li>New Arrivals</li>
                                <li>Shop sale up to 48% off</li>
                                <li>Best Sellers</li>
                            </ul>
                        </div>

                        {/*Help Section*/}
                        <div className="flex flex-col">
                            <p className="text-dark-green">Help</p>
                            <ul className=" text-white">
                                <li>Contact US</li>
                                <li>FAQs</li>
                                <li>Shipping And Returns</li>
                                <li>Order Tracking</li>
                            </ul>
                        </div>

                        {/*Company*/}
                        <div className="flex flex-col">
                            <p className="text-dark-green">Help</p>
                            <ul className=" text-white">
                                <li>About US</li>
                                <li>Careers</li>
                                <li>Blog</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="flex flex-row px-[35.7%] space-x-[2.89%] text-white text-[16px] font-normal">
                    <p>© 2024 Fashionpulse All Rights Reserved</p>
                    <p>Terms Of Use</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </>
    )
}