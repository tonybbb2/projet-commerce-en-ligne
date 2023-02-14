import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";


const CartCard = ({ title, color, size, pricing, cover, quantity }) => {
    return (
        <div>
            <div className="flex space-x-4">
                <div>
                    <img src={cover} alt={title}
                        className="w-32" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-white">{title}</h2>
                    <p className="text-sm text-white opacity-60">{color}</p>
                    <p className="text-sm text-white opacity-60">{size}</p>
                    <span className="text-white ">{pricing} USD</span>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            {/* <div className="flex flex-row">
                <article className="flex flex-col rounded-[1.5rem] p-[2rem] pb-[1rem] border border-secondary/20 shadow-xl transition-all duration-[1s] ease-out-expo active:scale-95 h-60 my-5 border-gray-700">
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <div className="grid gap-[5px]">
                                <p className="text-white text-xl font-bold" rv-text="item.product_title | productTitle">{title}</p>
                                <p className="text-white text-base opacity-60" rv-text="item.product_title | productColorname">{color}</p>
                                <span className="text-white text-base opacity-60" rv-text="item.variant_title">{size}</span>
                            </div>
                            <span className="text-white mt-auto font-bold" rv-html="item.price | money Currency.currentCurrency">{pricing} USD</span>
                        </div>
                        <div className="ml-20">
                            <img className="lazyload-fade absolute-tl wh-full-cover rounded-[1rem] ls-is-cached lazyloaded h-32" rv-src="item.image | product_image_size 'medium'" src={cover}></img>
                        </div>
                    </div>
                    {/* <div className="w-full flex items-center justify-between pt-[10px] mt-[10px] text-[1.2rem] border-t border-secondary/20">
                        <button className="h-[30px] w-[30px] flex-center p-[5px] rounded-full transition-all hover-supported:hover:bg-pastel-red active:bg-pastel-red">
                            <FaTrash className='text-white md:text-2xl mr-2 hidden md:block' />
                        </button>
                        <button className="h-[30px] flex-center py-[5px] px-[20px] rounded-full transition-all hover-supported:hover:bg-secondary/20 active:bg-secondary/20">
                            <AiOutlineMinus className='text-white md:text-2xl mr-2 hidden md:block' />
                        </button>
                        <span className="text-white" rv-text="item.quantity">{quantity}</span>
                        <button className="h-[30px] flex-center py-[5px] px-[20px] rounded-full transition-all hover-supported:hover:bg-secondary/20 active:bg-secondary/20">
                            <AiOutlinePlus className='text-white md:text-2xl mr-2 hidden md:block' />
                        </button>

                        <span className="text-white font-bold rv-html= item.line_price | money Currency.currentCurrency">{pricing} USD</span>

                    </div> */}
            {/* </article>
            </div> */}
        </div>
    )
}

export default CartCard