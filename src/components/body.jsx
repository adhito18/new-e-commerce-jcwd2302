
import Pic1 from "./../supports/assets/rewards-carousel-3_tcm121-77066.webp"
import Pic2 from"./../supports/assets/rewards-carousel-2_tcm121-77065.webp"
import Pic3 from "./../supports/assets/rewards-carousel-1_tcm121-77064.webp"
import { Link } from "react-router-dom"

export default function Home(){
    return(
        <>
        <div className="flex bg-neutral-300">
            <div className="basis-2/5 border-r-4">
                <div className="sticky h-screen bottom-0 flex justify-center items-center overflow-hidden">
                    <div>
                        <h1 className="my-fs-30 font-bold">
                            Merry sipping ⛄️
                        </h1>
                    </div>
                </div>
            </div>
            <div className="basis-3/5">
                {/* Kanan: Section1 */}
                <div className="pl-12 pt-8 mb-6">
                    <h1 className='font-bold'>PURWADHIKA® REWARDS</h1>
                    <div className="pl-2 pt-4 font-semibold text-xl flex">
                        <div className='flex flex-col items-center w-6/12'>
                            <img src={Pic1} alt='Carousel-1' className='w-11/12 rounded-xl' />
                            <p className='pl-3 pt-4'>
                                Let us treat you—earn and redeem Stars for free drinks, food and more.
                            </p>
                        </div>
                        <div className='flex flex-col items-center w-6/12'>
                            <img src={Pic2} alt='Carousel-2' className='w-11/12 rounded-xl' />
                            <p className='pl-3 pt-4'>
                                Customize your order in the app and pick it up when it’s ready.
                            </p>
                        </div>
                        <div className='flex flex-col items-center w-6/12'>
                            <img src={Pic3} alt='Carousel-3' className='w-11/12 rounded-xl' />
                            <p className='pl-3 pt-4'>
                                Stop in on your birthday for a special treat on the house.
                            </p>
                        </div>
                    </div>
                    <button className='my-bg-dark my-light rounded-full px-3 py-1 mt-4 ml-3 font-semibold'>
                        Join now
                    </button>
                    <button className='my-dark rounded-full px-3 py-1 ml-3' style={{ border: '1px solid black' }} >
                        Learn more
                    </button>
            </div>
            <div className="fixed right-12 bottom-1 mb-10">
                <button className="x font-bold text-white bg-emerald-700 flex items-center px-5 py-4 rounded-full">
                    <Link to='/Menu'>
                        Start an Order
                    </Link>
                </button>
            </div>


            {/* KANAN: Section2 */}
            <div className='py-10 my-bg-light flex justify-center '>
                {/* Section2: Card1 */}
                <div >
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2021</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <div className='flex justify-between my-bg-main p-3 rounded-md mt-2'>
                        <div className='flex justify-between'>
                            <div>
                                <h1 className='my-fs-20 my-light'>
                                    Iced
                                </h1>
                                <p className='my-light'>
                                    Cool off and uplift
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='flex justify-between my-bg-main p-3 rounded-md mt-3'>
                        <div className='flex justify-between'>
                            <div>
                                <h1 className='my-fs-20 my-light'>
                                    Hot
                                </h1>
                                <p className='my-light'>
                                    warm up and get going
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        
        </>
        
    )
}