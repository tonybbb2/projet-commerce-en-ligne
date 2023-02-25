import React, { useState, useEffect, useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { CartContext } from "../App"

export const MyCheckoutForm = () => {

    const cartContext = useContext(CartContext);
    const [clientSecret, setClientSecret] = useState("");
    const [email, setEmail] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const totalPrice = Math.round(cartContext.totalPrice * 100);


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    // Create a payment intent and getting the secret
    useEffect(() => {
        if (totalPrice != 0 && email != '') {
            fetch("http://localhost:4000/create-payment-intent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ price: totalPrice, receipt_email: email }),
            })
                .then(res => res.json())
                .then((data) => {
                    setClientSecret(data.clientSecret);
                });
        }
    }, [cartContext.totalPrice, email]);



    // Make the payment after filling the form properly
    const makePayment = async () => {
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });
    }

    return (
        <form className="justify-center w-full mx-auto" id="payment-form" onSubmit={makePayment}>
            <div className="rounded-xl p-[2rem] pb-[1rem] border border-secondary/20 shadow-xl transition-all duration-[1s] ease-out-expo active:scale-95 my-5 border-neutral-500">
                <div className="space-x-0 lg:flex lg:space-x-4">
                    <div className="w-full lg:w-1/2">
                        <label className="block mb-3 text-sm font-semibold text-neutral-300">First
                            Name</label>
                        <input name="firstName" type="text" placeholder="First Name"
                            className="w-full px-4 py-3 text-sm border bg-neutral-800 border-neutral-500 placeholder-neutral-400 text-neutral-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-500" />
                    </div>
                    <div className="w-full lg:w-1/2 ">
                        <label className="block mb-3 text-sm font-semibold text-neutral-300">Last
                            Name</label>
                        <input name="Last Name" type="text" placeholder="Last Name"
                            className="w-full px-4 py-3 text-sm border bg-neutral-800 border-neutral-500 placeholder-neutral-400 text-neutral-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-500" />
                    </div>
                </div>
                <div className="mt-4">
                    <div className="w-full">
                        <label
                            className="block mb-3 text-sm font-semibold text-neutral-300">Email</label>
                        <input type="email" id="email" value={email} onChange={handleEmailChange} placeholder="Email"
                            className="w-full px-4 py-3 text-sm border bg-neutral-800 border-neutral-500 placeholder-neutral-400 text-neutral-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-500" />
                    </div>
                </div>
                <div className="mt-4">
                    <div className="w-full">
                        <label
                            className="block mb-3 text-sm font-semibold text-neutral-300">Address</label>
                        <input name="Address" type="text" placeholder="Address"
                            className="w-full px-4 py-3 text-sm border bg-neutral-800 border-neutral-500 placeholder-neutral-400 text-neutral-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-500" />
                    </div>
                </div>
                <div className="space-x-0 lg:flex lg:space-x-4 mt-4">
                    <div className="w-full lg:w-1/2">
                        <label
                            className="block mb-3 text-sm font-semibold text-neutral-300">City</label>
                        <input name="city" type="text" placeholder="City"
                            className="w-full px-4 py-3 text-sm border bg-neutral-800 border-neutral-500 placeholder-neutral-400 text-neutral-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-500" />
                    </div>
                    <div className="w-full lg:w-1/2 ">
                        <label className="block mb-3 text-sm font-semibold text-neutral-300">
                            Postcode</label>
                        <input name="postcode" type="text" placeholder="Post Code"
                            className="w-full px-4 py-3 text-sm border bg-neutral-800 border-neutral-500 placeholder-neutral-400 text-neutral-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-500" />
                    </div>
                </div>
            </div>
            <h2 className="font-bold md:text-xl text-heading text-white">Payement Informations
            </h2>
            <div className="rounded-xl p-[2rem] pb-[1rem] border border-secondary/20 shadow-xl transition-all duration-[1s] ease-out-expo active:scale-95 my-5 border-neutral-500">
                <div>
                    <div className="w-full">
                        <label
                            className="block mb-3 text-sm font-semibold text-neutral-300">Name on card</label>
                        <input name="Name on card" type="text" placeholder="Name on card"
                            className="w-full px-4 py-3 text-sm border bg-neutral-800 border-neutral-500 placeholder-neutral-400 text-neutral-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-500" />
                    </div>
                </div>
                <div className="mt-4">
                    <div className="w-full">
                        <label
                            className="block mb-3 text-sm font-semibold text-neutral-300">Card number</label>
                        <CardElement id="card-element" className="w-full px-4 py-3 text-sm border bg-neutral-800 border-neutral-500 placeholder-neutral-400 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-500" options={{
                            style: {
                                base: {
                                    color: '#D4D4D4',
                                },
                            },

                        }} />
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <button
                    id="submit" className="w-full px-6 py-2 text-white font-bold rounded-lg bg-green-500 hover:bg-green-700">Process</button>
            </div>
        </form>

    );
};