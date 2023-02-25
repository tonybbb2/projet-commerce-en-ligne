import React from 'react'
import { Link } from 'react-router-dom'

const Poster = () => {
    return (
        <section id='poster' className='w-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full md:w-3/4 mx-auto gap-10 py-10'>
                <Link to={'/products/women'} className='w-full  inline-block relative'>
                    <img className='object-cover w-full md:h-[700px] rounded-[28px] transition ease-in-out  hover:scale-105 duration-300' src='https://cdn.shopify.com/s/files/1/0667/0133/collections/w_bottoms.jpg?crop=center&height=448&v=1663354933&width=800' alt='Amplify Short 4"5' />
                    <div className='absolute bottom-5 md:bottom-20 left-8 md:left-16 py-2'>
                        <p className="text-[20px] sm:text-[35px] md:text-6xl  text-white font-extrabold">SHOP </p>
                        <p className="text-[20px] sm:text-[35px] md:text-6xl text-white font-extrabold">FOR HER</p>
                        <p className="text-white mt-1 text-[10px] sm:text-[20px] md:text-lg">Explore Amplify, surface & more </p>
                        <button to={'/products/women'} className="bg-slate-300 bg-opacity-60 hover:text-black hover:bg-white text-white h-[35px] w-[100px] text-[8px] md:text-[14px] md:h-[40px] md:w-[150px] font-extrabold py-2 px-6 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mt-2">
                            SHOP ALL
                        </button>

                    </div>
                </Link>
                <Link to={'/products/men'} className='w-full relative inline-block '>
                    <img className='object-cover  md:h-[700px] rounded-[28px] transition ease-in-out  hover:scale-105 duration-300' src='https://cdn.shopify.com/s/files/1/0667/0133/collections/m_sweater.jpg?crop=center&height=448&v=1663354669&width=800' alt='Amplify Short 4"5' />
                    <div className='absolute bottom-5 md:bottom-20 right-8 md:right-16 py-2 text-right'>
                        <p className="text-[20px] sm:text-[35px] md:text-6xl text-white font-extrabold">SHOP </p>
                        <p className="text-[20px] sm:text-[35px] md:text-6xl text-white font-extrabold">FOR HIM</p>
                        <p className="text-white mt-1 text-[10px] sm:text-[20px] md:text-lg">Explore Amplify, surface & more </p>
                        <button to={'/products/men'} className="bg-slate-300 bg-opacity-60 hover:text-black hover:bg-white text-white h-[35px] w-[100px] text-[8px] md:text-[14px] md:h-[40px] md:w-[150px] font-extrabold py-2 px-6 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mt-2">
                            SHOP ALL
                        </button>

                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Poster