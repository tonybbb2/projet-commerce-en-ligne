import React, { useEffect, useState, useContext } from "react"
import { Link } from 'react-router-dom'
import { db } from '../Firebase'
import { getDoc, doc, updateDoc, setDoc } from 'firebase/firestore'
import { CartContext } from "../App"

const Cards = ({ cover, title, color, pricing, label }) => {

    const cartContext = useContext(CartContext);

    const hover = (e) => {
        // get the id add
    }

    async function addToCart(size) {
        if (cartContext.cartId != 'cart') {
            const data = {
                [title + " " + color + " " + size]: [
                    {
                        Titre: title,
                        Cover: cover,
                        Color: color,
                        Size: size,
                        Quantity: '1',
                        Price: pricing,
                    }

                ]

            }

            const res = await setDoc(doc(db, cartContext.cartId, 'cart'), data, { merge: true });
        }
    }


    return (
        <Link to="/details/1" className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative p-2'>
            <img className='w-full h-auto block object-cover rounded-lg' src={cover} alt='tkt' />
            <div className='absolute top-0 left-0 w-full h-full text-black group'>
                <div className='absolute top-4 left-4'>
                    <button className="bg-gray-500 bg-opacity-10 text-white text-[18px] font-extrabold py-1 px-3 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mt-2">
                        {label}
                    </button>

                </div>
                <div id='add' className='absolute bottom-24 hidden lg:block  opacity-0 group-hover:opacity-100 left-[15px] bg-black bg-opacity-90 rounded-2xl text-center  w-[250px] h-[80px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
                    <button className=" text-white text-[16px] font-extrabold py-2">
                        Quick Add +
                    </button>
                    <hr className="h-px mx-auto w-[175px] bg-gray-100"></hr>
                    <div className='w-full flex text-center my-2 justify-between px-8 font-semibold text-sm'>
                        <div>
                            <button className='w-full h-full text-white hover:bg-gray-600 hover:rounded-lg' onClick={() => addToCart('XS')}>XS</button>
                        </div>
                        <div>
                            <button className='w-full h-full text-white hover:bg-gray-600 hover:rounded-lg' onClick={() => addToCart('S')}>S</button>
                        </div>
                        <div>
                            <button className='w-full h-full text-white hover:bg-gray-600 hover:rounded-lg' onClick={() => addToCart('MD')}>MD</button>
                        </div>
                        <div>
                            <button className='w-full h-full text-white hover:bg-gray-600 hover:rounded-lg' onClick={() => addToCart('LG')}>LG</button>
                        </div>
                        <div>
                            <button className='w-full h-full text-white hover:bg-gray-600 hover:rounded-lg' onClick={() => addToCart('XL')}>XL</button>
                        </div>
                    </div>
                </div>
            </div>
            <p className='mt-2 text-md font-bold text-white'>{title}</p>
            <p className='text-sm font-semibold text-gray-400'>{color}</p>
            <p className='text-xs font-semibold text-gray-400'>${pricing}</p>
        </Link>
    )
}

export default Cards