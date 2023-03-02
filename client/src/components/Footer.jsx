import React from 'react'
import { BsSearch, BsFillInfoCircleFill, BsInstagram, BsFacebook } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineMenu, AiOutlineClose, AiFillTwitterCircle, AiOutlineYoutube } from 'react-icons/ai';

const Footer = () => {
    return (

        <footer class="p-12 md:p-32  rounded-lg shadow ">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                    <span class="self-center text-2xl font-semibold italic whitespace-nowrap dark:text-white">Fitness Rats</span>
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-md text-gray-500 sm:text-center dark:text-gray-300">© 2023 | <a href="#" class="hover:underline">Fitness Rats</a>. All Rights Reserved.
            </span>
            <span class="block text-xs text-white font-extrabold sm:text-center py-2">LEARN MORE | DREAM MORE | BE MORE.
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