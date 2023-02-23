import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const totalPrice = 1400; // this means 14 usd and can also be calculated at the backend

export const MyCheckoutForm = () => {

    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();

    // STEP 1: create a payment intent and getting the secret
    useEffect(() => {
        fetch("http://localhost:4000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ price: totalPrice }),
        })
            .then(res => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret);  // <-- setting the client secret here
            });
    }, []);

    // STEP 2: make the payment after filling the form properly
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
                        <input name="Last Name" type="text" placeholder="Email"
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