import React, { useState, useEffect } from 'react'
import { AiOutlineShoppingCart, AiOutlineTwitter } from 'react-icons/ai';
import { BsSearch, BsFillInfoCircleFill, BsInstagram, BsFacebook } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineMenu, AiOutlineClose, AiFillTwitterCircle, AiOutlineYoutube } from 'react-icons/ai';
import { FiHelpCircle } from 'react-icons/fi'
import { FaTruckLoading, FaShoppingBag } from 'react-icons/fa'
import { GiReturnArrow } from 'react-icons/gi'

export const Navbar = () => {

    const [scroll, setScroll] = useState(false)
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    }


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
    }, [])


    return (
        <div className='flex justify-center'>
            <div className={scroll ? 'flex justify-between opacity-90 items-center mx-auto md:w-2/3 h-10 fixed z-[100] top-0 text-slate-200 rounded-b-[2rem] bg-black  px-16 border border-slate-400' : 'flex justify-between items-center mx-auto md:w-2/3 h-16 fixed z-[100] top-0 text-slate-200 rounded-b-[2rem] bg-black px-16 border border-slate-400'} >
                <div>
                    <p className='uppercase font-normal text-[18px] md:text-xl font-sans tracking-tight italic'>FITNESS RATS</p>
                </div>
                <div className='md:flex px-2 hidden md:block mr-[50px] font-extrabold text-gray-300'>
                    <p className='px-2 uppercase text-sm'>Men</p>
                    <p className='px-2 uppercase text-sm'>Women</p>
                </div>
                <div className='flex'>
                    <BsSearch className='text-lg md:text-2xl mr-2 hidden md:block' />
                    <AiOutlineShoppingCart className='text-lg md:text-2xl mr-2 hidden md:block' />
                    <CgProfile className='text-lg md:text-2xl hidden md:block' />
                    {
                        nav ? <AiOutlineClose onClick={handleNav} className='text-3xl ml-2 md:hidden' /> : <AiOutlineMenu onClick={handleNav} className='text-3xl ml-2 md:hidden' />
                    }
                </div>
            </div>
            <div className={nav ? 'md:hidden fixed w-full inset-x-0 bottom-0  bg-black/80 z-[100]' : ''}>
                <div className={nav ? ' fixed inset-x-0 bottom-0 overflow-y-scroll scroll-smooth scrollbar-hide mx-auto rounded-t-[50px] border-[1px] backdrop-blur-sm border-slate-500 w-[97%] h-[80%] bg-opacity-90 bg-black p-10 ease-in duration-500' :
                    'hidden ease-in duration-500'
                }>
                        {/* <div className='flex w-full items-center justify-between'>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose size={25} />
                            </div>
                        </div> */}
                        <form>
                            <div class="relative">
                                <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border-[1px] rounded-lg bg-black backdrop-blur-sm bg-opacity-90 " placeholder="Search ..." required />
                                <hr class="h-px mx-auto my-8 w-[15rem] sm:w-[35rem] bg-gray-300 border-0"></hr>
                                <div className='grid grid-cols-2 gap-1'>
                                    <div className='text-center font-bold text-white uppercase'>
                                        <p className='font-extrabold text-white uppercase'>MEN</p>
                                        <ul class="space-y-4 text-slate-300 list-none list-inside text-xs p-10">
                                            <li>
                                                Shorts
                                            </li>
                                            <li>
                                                Joggers
                                            </li>
                                            <li>
                                                Short Sleeves
                                            </li>
                                            <li>
                                                Tank Tops
                                            </li>
                                            <li>
                                                Stringers
                                            </li>
                                            <li>
                                                Long Sleeves
                                            </li>
                                            <li>
                                                Hoodies & Jackets
                                            </li>
                                            <li>
                                                Accessories
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='text-center font-bold text-white uppercase'>
                                        <p className='font-extrabold text-white uppercase '>WOMEN</p>
                                        <ul class="space-y-4 text-slate-300 list-none list-inside text-xs p-10">
                                            <li>
                                                Sports Bras
                                            </li>
                                            <li>
                                                Shorts
                                            </li>
                                            <li>
                                                Leggings
                                            </li>
                                            <li>
                                                Tank Tops
                                            </li>
                                            <li>
                                                Shirts & Crops
                                            </li>
                                            <li>
                                                Hoodies & Jackets
                                            </li>
                                            <li>
                                                Joggers
                                            </li>
                                            <li>
                                                Dresses & Skirts
                                            </li>
                                        </ul></div>
                                </div>
                                <hr class="h-px mx-auto my-8 w-[15rem] sm:w-[35rem] bg-gray-300 border-0"></hr>
                                <div className='grid grid-cols-2'>
                                    <div className='sm:p-5'>
                                        <div className='w-[165px] sm:w-[275px] inline-block relative'>
                                            <img className='w-full h-auto block object-cover rounded-lg' src='https://cdn.shopify.com/s/files/1/0538/2658/4736/files/01BF-NEW_042-port_800x.jpg?v=1668864373' alt='tkt' />
                                            <div className='absolute top-0 left-0 w-full h-full text-black'>
                                                <div className='absolute top-4 left-4'>
                                                    <button className="bg-gray-500 bg-opacity-80 text-white text-[12px] font-extrabold py-1 px-3 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mt-2">
                                                        All Men
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='sm:p-5'>
                                        <div className='w-[165px] sm:w-[275px] inline-block relative'>
                                            <img className='w-full h-auto block object-cover rounded-lg' src='https://cdn.shopify.com/s/files/1/0538/2658/4736/files/JanColorBlocks_05-port_800x.jpg?v=1673718145' alt='tkt' />
                                            <div className='absolute top-0 left-0 w-full h-full text-black'>
                                                <div className='absolute top-4 left-4'>
                                                    <button className="bg-gray-500 bg-opacity-80 text-white text-[12px] font-extrabold py-1 px-3 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mt-2">
                                                        All Women
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <hr class="h-px mx-auto my-8 w-[15rem] sm:w-[35rem] bg-gray-300 border-0"></hr>
                                <div className='w-full text-left'>
                                    <ul class="space-y-6 p-8 text-slate-300 list-none list-inside text-md ">
                                        <li className='flex'>
                                            <CgProfile className='text-2xl mr-2' /> Sign In
                                        </li>
                                        <li className='flex'>
                                            <FiHelpCircle className='text-2xl mr-2' /> Help Center
                                        </li>
                                        <li className='flex'>
                                            <FaTruckLoading className='text-2xl mr-2' /> Shipping Info
                                        </li>
                                        <li className='flex'>
                                            <GiReturnArrow className='text-2xl mr-2' /> Returns & Exchanges
                                        </li>
                                        <li className='flex'>
                                            <FaShoppingBag className='text-2xl mr-2' /> Careers
                                        </li>
                                        <li className='flex'>
                                            <BsFillInfoCircleFill className='text-2xl mr-2' /> About Us
                                        </li>
                                    </ul>

                                </div>
                                <hr class="h-px mx-auto my-8 w-[15rem] sm:w-[35rem] bg-gray-300 border-0"></hr>
                                <div className='w-full flex justify-between text-white text-2xl'>
                                    <BsFacebook />
                                    <BsInstagram />
                                    <AiFillTwitterCircle />
                                    <AiOutlineYoutube />
                                </div>
                            </div>
                        </form>
                </div>

            </div>
        </div>
    )
}

export default Navbar
