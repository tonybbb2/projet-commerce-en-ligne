import { doc, updateDoc } from "firebase/firestore"
import React from "react"
import { db } from "../Firebase"
import CartCard from "./CartCard"

function Checkout() {


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
                        <form className="justify-center w-full mx-auto" method="post" action>
                            <div className="rounded-xl p-[2rem] pb-[1rem] border border-secondary/20 shadow-xl transition-all duration-[1s] ease-out-expo active:scale-95 my-5 border-neutral-500">
                                <div className="space-x-0 lg:flex lg:space-x-4">
                                    <div className="w-full lg:w-1/2">
                                        <label className="block mb-3 text-sm font-semibold text-neutral-300">First
                                            Name</label>
                                        <input name="firstName" type="text" placeholder="First Name"
                                            className="w-full px-4 py-3 text-sm border bg-neutral-800 border-neutral-500 placeholder-neutral-400 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-500" />
                                    </div>
                                    <div className="w-full lg:w-1/2 ">
                                        <label className="block mb-3 text-sm font-semibold text-neutral-300">Last
                                            Name</label>
                                        <input name="Last Name" type="text" placeholder="Last Name"
                                            className="w-full px-4 py-3 text-sm border bg-neutral-800 border-neutral-500 placeholder-neutral-400 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-500" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="w-full">
                                        <label
                                            className="block mb-3 text-sm font-semibold text-neutral-300">Email</label>
                                        <input name="Last Name" type="text" placeholder="Email"
                                            className="w-full px-4 py-3 text-sm border bg-neutral-800 border-neutral-500 placeholder-neutral-400 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-500" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="w-full">
                                        <label
                                            className="block mb-3 text-sm font-semibold text-neutral-300">Address</label>
                                        <input name="Address" type="text" placeholder="Address"
                                            className="w-full px-4 py-3 text-sm border bg-neutral-800 border-neutral-500 placeholder-neutral-400 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-500" />
                                    </div>
                                </div>
                                <div className="space-x-0 lg:flex lg:space-x-4 mt-4">
                                    <div className="w-full lg:w-1/2">
                                        <label
                                            className="block mb-3 text-sm font-semibold text-neutral-300">City</label>
                                        <input name="city" type="text" placeholder="City"
                                            className="w-full px-4 py-3 text-sm border bg-neutral-800 border-neutral-500 placeholder-neutral-400 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-500" />
                                    </div>
                                    <div className="w-full lg:w-1/2 ">
                                        <label className="block mb-3 text-sm font-semibold text-neutral-300">
                                            Postcode</label>
                                        <input name="postcode" type="text" placeholder="Post Code"
                                            className="w-full px-4 py-3 text-sm border bg-neutral-800 border-neutral-500 placeholder-neutral-400 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-500" />
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div>
                            <h2 className="font-bold md:text-xl text-heading text-white">Payement Informations
                            </h2>
                            <form className="justify-center w-full mx-auto" method="post" action>
                                <div className="rounded-xl p-[2rem] pb-[1rem] border border-secondary/20 shadow-xl transition-all duration-[1s] ease-out-expo active:scale-95 my-5 border-neutral-500">
                                    <div>
                                        <div className="w-full">
                                            <label
                                                className="block mb-3 text-sm font-semibold text-neutral-300">Card number</label>
                                            <input name="Card number" type="text" placeholder="Card number"
                                                className="w-full px-4 py-3 text-sm border bg-neutral-800 border-neutral-500 placeholder-neutral-400 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-500" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div className="w-full">
                                            <label
                                                className="block mb-3 text-sm font-semibold text-neutral-300">Name on card</label>
                                            <input name="Name on card" type="text" placeholder="Name on card"
                                                className="w-full px-4 py-3 text-sm border bg-neutral-800 border-neutral-500 placeholder-neutral-400 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-500" />
                                        </div>
                                    </div>
                                    <div className="space-x-0 lg:flex lg:space-x-4 mt-4">
                                        <div className="w-full lg:w-1/2">
                                            <label
                                                className="block mb-3 text-sm font-semibold text-neutral-300">Expiration date (MM / YY)</label>
                                            <input name="Expiration date (MM / YY)" type="text" placeholder="Expiration date (MM / YY)"
                                                className="w-full px-4 py-3 text-sm border bg-neutral-800 border-neutral-500 placeholder-neutral-400 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-500" />
                                        </div>
                                        <div className="w-full lg:w-1/2 ">
                                            <label className="block mb-3 text-sm font-semibold text-neutral-300">
                                                Security code</label>
                                            <input name="Security code" type="text" placeholder="Security code"
                                                className="w-full px-4 py-3 text-sm border bg-neutral-800 border-neutral-500 placeholder-neutral-400 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-500" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <button
                                        className="w-full px-6 py-2 text-white font-bold rounded-lg bg-green-500 hover:bg-green-700">Process</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="flex flex-col w-full ml-0 md:ml-6 lg:ml-12 lg:w-3/5">
                        <div className="pt-12 md:pt-0 2xl:ps-4">
                            <h2 className="text-xl font-bold text-white">Order Summary
                            </h2>
                            <div className="rounded-xl p-[2rem] pb-[1rem] border border-secondary/20 shadow-xl transition-all duration-[1s] ease-out-expo active:scale-95 my-5 border-neutral-500">
                                <div className="mt-8">
                                    <div className="flex flex-col space-y-4">
                                        <CartCard title={'DAD HAT'} color={'White'} size={'Adjustable'} pricing={'28.00'} cover={'https://cdn.shopify.com/s/files/1/0538/2658/4736/products/WhiteWolfHeadHat2_f175ba50-4906-40af-966a-3bd25c8e535e_1000x.jpg?v=1673718721'} quantity={'1'} />
                                        <CartCard title={'AMPLIFY SHORT 4.5"'} color={'Black'} size={'S'} pricing={'48.00'} cover={'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310133_1000x.jpg?v=1668811498'} quantity={'1'} />
                                    </div>
                                </div>
                                <div className="flex p-4 mt-4">
                                    <h2 className="text-xl font-bold text-white">2 ITEMS</h2>
                                </div>
                                <div
                                    className="flex items-center w-full py-4 text-sm font-semibold border-b border-neutral-500 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0 text-white">
                                    Subtotal: <span className="ml-2 text-white">$40.00</span></div>
                                <div
                                    className="flex items-center w-full py-4 text-sm font-semibold border-b border-neutral-500 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0 text-white">
                                    Shipping: <span className="ml-2 text-white">$10</span></div>
                                <div
                                    className="flex items-center w-full py-4 text-sm font-semibold border-b border-neutral-500 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0 text-white">
                                    Total: <span className="ml-2 text-white">$50.00</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export { Checkout }