import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({ cover, title, color, pricing, label }) => {

    const hover = (e) => {
        e.target.children[1].classList.toggle('hidden')
    }



    return (
        <Link to="/details/1" className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative p-2'>
            <img className='w-full h-auto block object-cover rounded-lg' src={cover} alt='tkt' />
            <div className='absolute top-0 left-0 w-full h-full text-black' onMouseOver={hover}>
                <div className='absolute top-4 left-4'>
                    <button className="bg-gray-500 bg-opacity-80 text-white text-[12px] font-extrabold py-1 px-3 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mt-2">
                        {label}
                    </button>

                </div>
                <div className='absolute bottom-24 left-[15px] hidden'>
                    <button className="bg-black bg-opacity-80 text-white text-[14px] w-[250px] h-[40px] font-extrabold  py-1 px-3 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 mt-2">
                        Add To Cart
                    </button>
                </div>
            </div>
            <p className='mt-2 text-md font-bold text-white'>{title}</p>
            <p className='text-sm font-semibold text-gray-400'>{color}</p>
            <p className='text-xs font-semibold text-gray-400'>{pricing}</p>
        </Link>
    )
}

export default Cards