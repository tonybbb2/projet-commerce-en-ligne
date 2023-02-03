import React, { useState, useEffect } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

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
                <div className={nav ? ' fixed inset-x-0 bottom-0 mx-auto rounded-t-[50px] border-[1px] backdrop-blur-sm border-slate-500 w-[97%] h-[80%] bg-opacity-90 bg-black p-10 ease-in duration-500' :
                    'fixed bottom-[-100%] ease-in duration-500'
                }>
                    <div>
                        {/* <div className='flex w-full items-center justify-between'>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose size={25} />
                            </div>
                        </div> */}
                        <form>
                            <div class="relative">
                                <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border-[1px] rounded-lg bg-black backdrop-blur-sm bg-opacity-90 " placeholder="Search ..." required />
                                <hr class="h-px mx-auto my-8 w-[35rem] bg-gray-300 border-0"></hr>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
