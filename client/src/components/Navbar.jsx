import React, { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';

export const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [shadow, setShadsow] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY > 70) {
                setShadsow(true)
            } else {
                setShadsow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, [])

    return (
        <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100] bg-[#0f0f0f] text-white'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <div>
                    <p className='text-3xl uppercase font-bold'>Fitness Rats</p>
                </div>
                <div>
                    <ul className='hidden md:flex'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Men</li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Women</li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Shop All</li>
                    </ul>
                </div>
                <div className='flex flex-row'>
                    <BsSearch size={25} />
                    <AiOutlineShoppingCart size={25} />
                </div>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/80' : ''}>
                <div className={nav ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' :
                    'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose size={25} />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Construisons quelque chose ensemble!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
