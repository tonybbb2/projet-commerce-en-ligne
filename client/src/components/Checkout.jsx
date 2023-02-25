import { doc, getDoc } from "firebase/firestore"
import React, { useEffect, useState, useContext } from "react"
import { CartContext } from "../App"
import { db } from "../Firebase"
import CartCard from "./CartCard"
import Cookies from "js-cookie";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { MyCheckoutForm } from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51Me6rsLc792vO51uOCXiHqlfRk1GG4zaE1AiiUWwE80bCmDiqb8lUeQ9sYQFYbsNbpLQHL8RCblGpgNqY5ByRqOM00r8CiClI1", {
    locale: 'en'
});

function Checkout() {

    const cartContext = useContext(CartContext);
    const [subtotalPrice, setsubtotalPrice] = useState(0);


    // Load cart data from cookies
    useEffect(() => {
        const savedCartItems = Cookies.get("cartItems");
        if (savedCartItems) {
            cartContext.setCartItems(JSON.parse(savedCartItems));
        }
    }, []);


    // Calculate total price
    useEffect(() => {
        if (cartContext.cartItems.length > 0) {
            const totalPrice = cartContext.cartItems.reduce((acc, item) => acc + parseFloat(item.Price), 0);
            setsubtotalPrice(totalPrice.toFixed(2));
            cartContext.settotalPrice((totalPrice + 20).toFixed(2))
        }
    }, [cartContext.cartItems]);


    return (
        <div>
            <div className="mt-10">
                <h1 className="flex items-center justify-center uppercase font-extrabold text-white text-md lg:text-3xl">Checkout
                </h1>
            </div>
            <div className="container p-12 mx-auto">
                <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                    <div className="flex flex-col md:w-full ">
                        <h2 className="font-bold md:text-xl text-heading text-white">Shipping Address
                        </h2>
                        <Elements stripe={stripePromise}>
                            <MyCheckoutForm />
                        </Elements>
                    </div>
                    <div className="flex flex-col w-full ml-0 md:ml-6 lg:ml-12 lg:w-3/5">
                        <div className="pt-12 md:pt-0 2xl:ps-4">
                            <h2 className="text-xl font-bold text-white">Order Summary
                            </h2>
                            <div className="rounded-xl p-[2rem] pb-[1rem] border border-secondary/20 shadow-xl transition-all duration-[1s] ease-out-expo active:scale-95 my-5 border-neutral-500">
                                <div className="mt-8">
                                    <div className="flex flex-col space-y-4">
                                        {cartContext.cartItems && cartContext.cartItems.length > 0 && cartContext.cartItems.map((item, index) => (
                                            <CartCard
                                                key={index}
                                                title={item.Titre}
                                                color={item.Color}
                                                size={item.Size}
                                                pricing={item.Price}
                                                cover={item.Cover}
                                                quantity={item.Quantity}
                                            />
                                        ))}
                                        {(!cartContext.cartItems || cartContext.cartItems.length === 0) && <p className="text-xl font-bold text-white">Your cart is empty</p>}
                                    </div>
                                </div>
                                <div className="flex p-4 mt-4">
                                    <h2 className="text-xl font-bold text-white">{cartContext.cartItems.length} ITEMS</h2>
                                </div>
                                <div
                                    className="flex items-center w-full py-4 text-sm font-semibold border-b border-neutral-500 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0 text-white">
                                    Subtotal: <span className="ml-2 text-white">${subtotalPrice}</span></div>
                                <div
                                    className="flex items-center w-full py-4 text-sm font-semibold border-b border-neutral-500 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0 text-white">
                                    Shipping: <span className="ml-2 text-white">$20</span></div>
                                <div
                                    className="flex items-center w-full py-4 text-sm font-semibold border-b border-neutral-500 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0 text-white">
                                    Total: <span className="ml-2 text-white">${cartContext.totalPrice}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export { Checkout }