import React from 'react'
import { BsSearch, BsFillInfoCircleFill, BsInstagram, BsFacebook } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineMenu, AiOutlineClose, AiFillTwitterCircle, AiOutlineYoutube } from 'react-icons/ai';

const Footer = () => {
    return (

        <footer className="p-12 md:p-32  rounded-lg shadow ">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                    <span className="self-center text-2xl font-semibold italic whitespace-nowrap dark:text-white">Fitness Rats</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-md text-gray-500 sm:text-center dark:text-gray-300">© 2023 | <a href="#" className="hover:underline">Fitness Rats</a>. All Rights Reserved.
            </span>
            <span className="block text-xs text-white font-extrabold sm:text-center py-2">LEARN MORE | DREAM MORE | BE MORE.
            </span>
            <div className='w-full flex justify-center text-center text-white text-2xl p-2'>
                <BsFacebook className='mr-2'/>
                <BsInstagram className='mr-2'/>
                <AiFillTwitterCircle className='mr-2'/>
                <AiOutlineYoutube />
            </div>

        </footer>

    )
}

export default Footer