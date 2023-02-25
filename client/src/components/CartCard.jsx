import React, { useEffect, useState, useContext } from "react"
import { FaTrash } from 'react-icons/fa';
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { CartContext } from "../App"
import Cookies from "js-cookie";


const CartCard = ({ title, color, size, pricing, cover, quantity }) => {

    const cartContext = useContext(CartContext);

    // Remove an item from the cart based on its name, size, and color
    const deleteFromCart = () => {
        const newCartItems = cartContext.cartItems.filter((item) => {
            return !(item.Titre === title && item.Size === size && item.Color === color);
        });
        cartContext.setCartItems(newCartItems);
    };

    // Save cart data to cookies whenever the cartItems state changes
    useEffect(() => {
        Cookies.set("cartItems", JSON.stringify(cartContext.cartItems));
    }, [cartContext.cartItems]);


    return (
        <div>
            <div className="flex flex-row">
                <div>
                    <img src={cover} alt={title}
                        className="w-32" />
                </div>
                <div className='w-full ml-2'>
                    <h2 className="text-xl font-bold text-white">{title}</h2>
                    <p className="text-sm text-white opacity-60">{color}</p>
                    <p className="text-sm text-white opacity-60">{size}</p>
                    <p className="text-sm text-white opacity-60">Quantity: {quantity}</p>
                    <span className="text-white ">{pricing} USD</span>
                </div>
                <div className="items-end">
                    <button onClick={deleteFromCart}><AiOutlineClose className="w-6 h-6 text-white" /></button>
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