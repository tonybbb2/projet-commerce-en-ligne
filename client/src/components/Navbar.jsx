import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineMenu } from 'react-icons/ai';

export const Navbar = () => {

    const [scroll, setScroll] = useState(false)

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
            <div className={ scroll ? 'flex justify-between items-center mx-auto md:w-2/3 h-10 fixed z-[100] top-0 text-slate-200 rounded-b-[2rem] bg-black  px-16 border border-slate-400' : 'flex justify-between items-center mx-auto md:w-2/3 h-16 fixed z-[100] top-0 text-slate-200 rounded-b-[2rem] bg-black px-16 border border-slate-400'} >
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
                    <AiOutlineMenu className='text-3xl ml-2 md:hidden' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
