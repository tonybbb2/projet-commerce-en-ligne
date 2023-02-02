import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';

export const Navbar = () => {


    return (
        <div>
            <div className='flex'>
                <div className='flex-none w-52 h-20'>
                </div>
                <div className='grow flex justify-between items-center w-full h-20 top-0 text-slate-200 rounded-b-[2rem] bg-black px-16 border border-slate-400'>
                    <div>
                        <p className='uppercase font-normal text-xl font-sans tracking-tight italic'>FITNESS RATS</p>
                    </div>
                    <div className='lg:flex px-2 hidden lg:block mr-[50px] font-extrabold'>
                        <p className='px-2 uppercase text-sm'>Men</p>
                        <p className='px-2 uppercase text-sm'>Women</p>
                    </div>
                    <div className='flex'>
                        <BsSearch className='text-2xl mr-2'/>
                        <AiOutlineShoppingCart className='text-2xl mr-2'/>
                        <CgProfile className='text-2xl'/>
                    </div>
                </div>
                <div className='flex-none w-52 h-20'>
                </div>
            </div>
        </div>
    )
}

export default Navbar
