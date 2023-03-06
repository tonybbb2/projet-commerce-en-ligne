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
        </div>
    )
}

export default CartCard