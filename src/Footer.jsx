export default function Footer(){

    return(
        <>
            <div className="bg-bold-green md:h-[23.5rem] h-[24.375rem]">

                <div className="flex flex-col-reverse md:flex-row space-x-[9.78vw] ml-0 md:ml-[7.93%] pr-0 py-[63px]">
                    {/* Left column of Footer */}
                    <div className="flex flex-col md:space-y-[1.9375rem] space-y-[0.875rem]">
                        <p className="font-helvetica mt-[1.875rem] md:mt-0 text-black font-bold text-[2.5rem]">FASHIONPULSE</p>
                        <div className="flex flex-col font-urbanist text-white text-[16px] font-medium">
                            <p>2089 Allen Avenue, Ikeja, Lagos/</p>
                            <p>+234 000 888 999 88/</p>    
                        </div> 

                        <p className="font-urbanist text-white text-[16px] font-medium">Info@Fashionpulse.com</p>
                    </div>

                    {/*Right column of Footer*/}
                    <div className="flex flex-row ml-0 font-urbanist font-medium md:space-x-[4.63vw]">
                        
                        {/*Resources section*/}
                        <div className="flex flex-col space-y-[1.8125rem]">
                            <p className="text-dark-green">Resources</p>
                            <ul className=" text-white space-y-[0.9375rem]">
                                <li>Shop Men</li>
                                <li>Shop Women</li>
                                <li>Best Sellers</li>
                                <li>Gift Cards</li>
                            </ul>
                        </div>

                        {/*New and Featued section*/}
                        <div className="md:flex flex-col space-y-[1.8125rem] hidden">
                            <p className="text-dark-green">New & Featured</p>
                            <ul className=" text-white space-y-[0.9375rem]">
                                <li>New Arrivals</li>
                                <li>Shop sale up to 48% off</li>
                                <li>Best Sellers</li>
                            </ul>
                        </div>

                        {/*Help Section*/}
                        <div className="flex flex-col space-y-[1.8125rem]">
                            <p className="text-dark-green">Help</p>
                            <ul className=" text-white space-y-[0.9375rem]">
                                <li>Contact US</li>
                                <li>FAQs</li>
                                <li>Shipping And Returns</li>
                                <li>Order Tracking</li>
                            </ul>
                        </div>

                        {/*Company*/}
                        <div className="flex flex-col space-y-[1.8125rem]">
                            <p className="text-dark-green">Company</p>
                            <ul className=" text-white space-y-[0.9375rem]">
                                <li>About US</li>
                                <li>Careers</li>
                                <li>Blog</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="flex flex-row mx-auto w-[33.10vw] space-x-[2.89%] text-white text-[16px] font-normal">
                    <p>© 2024 Fashionpulse All Rights Reserved</p>
                    <p>Terms Of Use</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </>
    )
}