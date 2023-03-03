import React, { useState, useEffect } from 'react'
import { AiOutlineShoppingCart, AiOutlineTwitter } from 'react-icons/ai';
import { BsSearch, BsFillInfoCircleFill, BsInstagram, BsFacebook } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineMenu, AiOutlineClose, AiFillTwitterCircle, AiOutlineYoutube, AiOutlineSearch } from 'react-icons/ai';
import { FiHelpCircle } from 'react-icons/fi'
import { FaTruckLoading, FaShoppingBag } from 'react-icons/fa'
import { GiReturnArrow } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { db } from '../Firebase'
import { getDoc, doc } from 'firebase/firestore'

export const Navbar = () => {

    const [scroll, setScroll] = useState(false)
    const [nav, setNav] = useState(false)
    const [expand, setExpand] = useState(false)
    const [expandwomen, setExpandWomen] = useState(false)
    const [product, setProduct] = useState(null)
    const [menproduct, setmenProduct] = useState(null)
    const [querySearch, setQuerySearch] = useState("")

    const handleNav = () => {
        setNav(!nav);
    }


    const handleExpand = () => {
        setExpand(!expand);
    }

    const handleExpandWomen = () => {
        setExpandWomen(!expandwomen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 70) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

    }, [])

    return (
        <div>
            <div className='w-full h-6 bg-black mx-auto md:w-2/3 top-0 text-slate-200 border-[1px] border-[#3d3d3d] border-y-[#3d3d3d] hidden md:block ' >
                <div className='flex justify-between px-14 py-[2px]'>
                    <div>
                        <p className='text-[10px] font-bold text-gray-300 py-[1px]'>Free Shipping on all orders over $100</p>
                    </div>
                    <div>
                        <Link to='/login'>
                            <p className='text-[12px] font-bold text-gray-300'>Login</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className={scroll ? 'flex justify-between opacity-90 fixed items-center mx-auto md:w-2/3 h-10 z-[100] top-0  text-slate-200 rounded-b-[2rem] bg-black  px-16 border border-slate-400' : 'flex justify-between items-center mx-auto md:w-2/3 h-16  z-[100] top-0 text-slate-200 rounded-b-[2rem] border-[1px] border-[#3d3d3d] bg-black px-16 '} >
                    <div>
                        <Link to={'/'} className='uppercase font-normal text-[18px] md:text-xl font-sans tracking-tight italic'>FITNESS RATS</Link>
                    </div>
                    <div className='md:flex px-2 hidden md:block mr-[50px] font-extrabold text-gray-300'>
                        <p className='-ml-[30px] uppercase text-sm hover:border-t' onMouseOver={handleExpand}>Men</p>
                        <p className='ml-4 uppercase text-sm hover:border-t' onMouseOver={handleExpandWomen}>Women</p>
                    </div>
                    <div className='flex'>
                        <input type="text" className='rounded mr-2 text-black' value={querySearch} onChange={e => setQuerySearch(e.target.value)} />

                        <Link to={`/products?query=${querySearch}`} onClick={() => setQuerySearch("")}>
                            <AiOutlineSearch className='text-lg md:text-xl mr-3 hidden md:block' />
                        </Link>


                        <Link to={'/checkout'}>
                            <AiOutlineShoppingCart className='text-lg md:text-xl mr-2 hidden md:block' />
                        </Link>

                        <CgProfile className='text-lg md:text-2xl hidden' />
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
                            <div className="relative">
                                <div className='grid grid-cols-2 gap-1'>
                                    <div className='text-center font-bold text-white uppercase'>
                                        <p className='font-extrabold text-white uppercase'>MEN</p>
                                        <ul className="space-y-4 text-slate-300 list-none list-inside text-xs p-10">
                                            <li>
                                                <Link to="/collections/shorts">
                                                Shorts
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/collections/joggers">
                                                Joggers
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/collections/ShortSleeves">
                                                Short Sleeves
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/collections/Tanks">
                                                Tank Tops
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/collections/stringers">
                                                Stringers
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/collections/LongSleeves">
                                                Long Sleeves
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/collections/hoodies">
                                                Hoodies & Jackets
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/collections/accessories">
                                                Accessories
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='text-center font-bold text-white uppercase'>
                                        <p className='font-extrabold text-white uppercase '>WOMEN</p>
                                        <ul className="space-y-4 text-slate-300 list-none list-inside text-xs p-10">
                                            <li>
                                                <Link to="/collections/SportBras">
                                                Sports Bras
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/collections/shortshorts">
                                                Shorts
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/collections/leggings">
                                                Leggings
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/collections/Tanks">
                                                Tank Tops
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/collections/LongSleeves">
                                                Shirts & Crops
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/collections/hoodies">
                                                Hoodies & Jackets
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/collections/Joggers">
                                                Joggers
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/collections/skirt">
                                                Dresses & Skirts
                                                </Link>
                                            </li>
                                        </ul></div>
                                </div>
                                <hr className="h-px mx-auto my-8 w-[15rem] sm:w-[35rem] bg-gray-300 border-0"></hr>
                                <div className='grid grid-cols-2'>
                                    <Link to={'/products/men'} className='sm:p-5'>
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
                                    </Link>
                                    <Link to={'/products/women'} className='sm:p-5'>
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
                                    </Link>

                                </div>
                                <hr className="h-px mx-auto my-8 w-[15rem] sm:w-[35rem] bg-gray-300 border-0"></hr>
                                <div className='w-full text-left'>
                                    <ul className="space-y-6 p-8 text-slate-300 list-none list-inside text-md ">
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
                                <hr className="h-px mx-auto my-8 w-[15rem] sm:w-[35rem] bg-gray-300 border-0"></hr>
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
            {expand ?
                <div onMouseLeave={handleExpand} className={scroll ? 'fixed inset-x-0 top-[54px] h-[28rem] z-[100] border-x-[1px] border-[#3d3d3d] mx-auto bg-opacity-90 bg-black hidden md:block md:w-2/3 text-slate-200 rounded-[15px]' : 'fixed inset-x-0 top-[64px] h-[28rem] z-[100] border-x-[1px] border-[#3d3d3d] mx-auto bg-opacity-90 bg-black hidden md:block  rounded-b-2xl md:w-2/3 text-slate-200'} >
                    <hr className="h-px mx-auto my-8 w-[15rem] sm:w-[75rem] bg-gray-400 border-0"></hr>
                    <div className='grid grid-cols-2'>
                        <div className='grid grid-rows-4 text-center'>
                            <div className='row-span-3'>
                                <p className='text-md font-bold uppercase'>products</p>
                                <div className='grid grid-cols-2'>
                                    <div>
                                        <ul className="space-y-2 text-slate-300 list-none text-left list-inside text-md p-10">
                                            <li>
                                                <Link to="/collections/shorts">
                                                    Shorts
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/collections/joggers">
                                                    Joggers
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/collections/shortsleeve">
                                                    Short Sleeves
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/collections/tanks">
                                                    Tank Tops
                                                </Link>
                                            </li>

                                        </ul></div>
                                    <div><ul className="space-y-2 text-slate-300 list-none   text-left list-inside text-md p-10">
                                        <li>
                                            <Link to="/collections/shirts">
                                                Shirts
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/collections/hoodie">
                                                Hoodies & Jackets
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/collections/swimtrunk">
                                                Swim Trunks
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/collections/Skirts">
                                                Dresses & Skirts
                                            </Link>
                                        </li>

                                    </ul></div>
                                </div>
                            </div>
                            <div><hr className="h-px mx-auto w-[15rem] sm:w-[25rem] bg-gray-400 border-0"></hr>
                                <div className='p-8 flex justify-between text-white text-2xl '>
                                    <CgProfile className=' mr-2' />
                                    <FiHelpCircle className='mr-2' />
                                    <FaTruckLoading className='mr-2' />
                                    <GiReturnArrow className='mr-2' />
                                    <FaShoppingBag className='mr-2' />
                                    <BsFillInfoCircleFill className=' mr-2' />
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2'>
                            <div>
                                <div className='text-center'>
                                    <div className='w-[150px] sm:w-[275px] inline-block relative'>
                                        <img className='w-[170px] md:w-full sm:h-[345px] block object-cover rounded-lg' src='https://cdn.shopify.com/s/files/1/0667/0133/files/11BFHaze_19.jpg?crop=center&height=300&v=1670864224&width=250' alt='tkt' />
                                        <div className='absolute top-0 left-0 w-full h-full text-black'>
                                            <div className='absolute top-4 left-4'>
                                                <button className="bg-gray-500 bg-opacity-80 text-white text-[12px] font-extrabold py-1 px-3 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mt-2">
                                                    New Arrivals
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to={'/products/men'}>
                                <div className='text-center'>
                                    <div className='w-[150px] sm:w-[275px] inline-block relative'>
                                        <img className='w-[170px] md:w-full sm:h-[345px] block object-cover rounded-lg' src='https://cdn.shopify.com/s/files/1/0538/2658/4736/files/01BF-NEW_042-port_800x.jpg?v=1668864373' alt='tkt' />
                                        <div className='absolute top-0 left-0 w-full h-full text-black'>
                                            <div className='absolute top-4 left-4'>
                                                <button className="bg-gray-500 bg-opacity-80 text-white text-[12px] font-extrabold py-1 px-3 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mt-2">
                                                    All Men
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                :
                false}
            {expandwomen ?
                <div onMouseLeave={handleExpandWomen} className={scroll ? 'fixed inset-x-0 top-[54px] h-[28rem] z-[100] border-x-[1px] border-[#3d3d3d] mx-auto bg-opacity-90 bg-black hidden md:block md:w-2/3 text-slate-200 rounded-[15px]' : 'fixed inset-x-0 top-[64px] h-[28rem] z-[100] border-x-[1px] border-[#3d3d3d] mx-auto bg-opacity-90 bg-black hidden md:block md:w-2/3 rounded-b-2xl text-slate-200'} >
                    <hr className="h-px mx-auto my-8 w-[15rem] sm:w-[75rem] bg-gray-400 border-0"></hr>
                    <div className='grid grid-cols-2'>
                        <div className='grid grid-rows-4 text-center'>
                            <div className='row-span-3'>
                                <p className='text-md font-bold uppercase'>products</p>
                                <div className='grid grid-cols-2'>
                                    <div>
                                        <ul className="space-y-2 text-slate-300 list-none text-left list-inside text-md p-10">
                                            <li>
                                                <Link to="/collections/sportbras">
                                                    Sports Bras
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/collections/shortshorts">
                                                    Shorts
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/collections/leggings">
                                                    Leggings
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/collections/tanktops">
                                                    Tank Tops
                                                </Link>
                                            </li>

                                        </ul></div>
                                    <div><ul className="space-y-2 text-slate-300 list-none   text-left list-inside text-md p-10">

                                        <li>
                                            <Link to="/collections/longsleeve">
                                                Long Sleeve
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/collections/hoodies">
                                                Hoodies & Jackets
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/collections/joggers">
                                                Joggers
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/collections/skirt">
                                                Dresses & Skirts
                                            </Link>
                                        </li>

                                    </ul></div>
                                </div>
                            </div>
                            <div><hr className="h-px mx-auto w-[15rem] sm:w-[25rem] bg-gray-400 border-0"></hr>
                                <div className='p-8 flex justify-between text-white text-2xl '>
                                    <CgProfile className=' mr-2' />
                                    <FiHelpCircle className='mr-2' />
                                    <FaTruckLoading className='mr-2' />
                                    <GiReturnArrow className='mr-2' />
                                    <FaShoppingBag className='mr-2' />
                                    <BsFillInfoCircleFill className=' mr-2' />
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div>
                                <div className='text-center'>
                                    <div className='w-[150px] sm:w-[275px] inline-block relative'>
                                        <img className='w-full h-[345px] block object-cover rounded-lg' src='https://cdn.shopify.com/s/files/1/0667/0133/files/JanColorBlocks_48-port_800x.jpg?v=1673682173' alt='tkt' />
                                        <div className='absolute top-0 left-0 w-full h-full text-black'>
                                            <div className='absolute top-4 left-4'>
                                                <button className="bg-gray-500 bg-opacity-80 text-white text-[12px] font-extrabold py-1 px-3 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mt-2">
                                                    New Arrivals
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to={'/products/women'}>
                                <div className='text-center'>
                                    <div className='w-[150px] sm:w-[275px] inline-block relative'>
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
                            </Link>
                        </div>
                    </div>
                </div>
                :
                false}
        </div>
    )
}

export default Navbar
