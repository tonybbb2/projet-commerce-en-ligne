import { doc, getDoc } from "firebase/firestore"
import React, { useEffect, useState, useContext } from "react"
import { CartContext } from "../App"
import { db } from "../Firebase"
import CartCard from "./CartCard"


// import {
//     Elements,
//     CardElement,
//     useStripe,
//     useElements,
// } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// // import { ElementsConsumer, PaymentElement, Elements } from '@stripe/react-stripe-js';
// // import { loadStripe } from '@stripe/stripe-js';

// // const stripePromise = loadStripe('pk_test_51Me6rsLc792vO51uOCXiHqlfRk1GG4zaE1AiiUWwE80bCmDiqb8lUeQ9sYQFYbsNbpLQHL8RCblGpgNqY5ByRqOM00r8CiClI1');

function Checkout() {

    const cartContext = useContext(CartContext);
    const [subtotalPrice, setsubtotalPrice] = useState(0);
    const [totalPrice, settotalPrice] = useState(0);
    // const stripe = loadStripe(
    //     "pk_test_51Me6rsLc792vO51uOCXiHqlfRk1GG4zaE1AiiUWwE80bCmDiqb8lUeQ9sYQFYbsNbpLQHL8RCblGpgNqY5ByRqOM00r8CiClI1"
    // );




    useEffect(() => {
        // Function to fetch and set the cart
        if (cartContext.cartId != 'cart') {

            const cartRef = doc(db, `${cartContext.cartId}/cart`)

            const fetchCart = async () => {
                const cart = await getDoc(cartRef)
                if (cart.exists()) {
                    return ('Document data:', cart.data());
                } else {
                    return ('No such document!');
                }
            }

            const result = fetchCart()
                .catch(console.error)
            result.then(value => {
                cartContext.setCart(value);
            })
        }
    }, [cartContext.cartId])

    useEffect(() => {

        //Reformatter les données provenant de firebase
        for (const propertyName in cartContext.cart) {
            if (Object.hasOwnProperty.call(cartContext.cart, propertyName)) {
                const itemsArray = cartContext.cart[propertyName];

                for (const item of itemsArray) {
                    const { Titre, Cover, Color, Size, Quantity, Price } = item;
                    cartContext.setcartItems(prevCartItems => [...prevCartItems, item]);
                    console.log(Titre, Cover, Color, Size, Quantity, Price);

                }
            }
        }
    }, [cartContext.cart])

    // Calculate total price
    useEffect(() => {
        if (cartContext.cartItems.length > 0) {
            const totalPrice = cartContext.cartItems.reduce((acc, item) => acc + parseFloat(item.Price), 0);
            settotalPrice(totalPrice.toFixed(2));
            setsubtotalPrice((totalPrice + 20).toFixed(2))
        }
    }, [cartContext.cartItems]);


    return (
        <div>
            <div className="mt-10">
                <h1 className="flex items-center justify-center uppercase font-extrabold text-white text-md lg:text-3xl">Checkout
                </h1>
            </div>
            {/* <Elements stripe={stripe}>
                <CheckoutForm />
            </Elements> */}
            <div className="container p-12 mx-auto">
                <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                    <div className="flex flex-col md:w-full ">
                        <h2 className="font-bold md:text-xl text-heading text-white">Shipping Address
                        </h2>
                        <form className="justify-center w-full mx-auto">
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
                            <h2 className="font-bold md:text-xl text-heading text-white">Payement Informations
                            </h2>
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
                                    Subtotal: <span className="ml-2 text-white">${totalPrice}</span></div>
                                <div
                                    className="flex items-center w-full py-4 text-sm font-semibold border-b border-neutral-500 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0 text-white">
                                    Shipping: <span className="ml-2 text-white">$20</span></div>
                                <div
                                    className="flex items-center w-full py-4 text-sm font-semibold border-b border-neutral-500 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0 text-white">
                                    Total: <span className="ml-2 text-white">${subtotalPrice}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

// function CheckoutForm() {
//     const [isPaymentLoading, setPaymentLoading] = useState(false);
//     const stripe = useStripe();
//     const elements = useElements();
//     const payMoney = async (e) => {
//         e.preventDefault();
//         if (!stripe || !elements) {
//             return;
//         }
//         setPaymentLoading(true);
//         const clientSecret = getClientSecret();
//         const paymentResult = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//                 card: elements.getElement(CardElement),
//                 billing_details: {
//                     name: "Faruq Yusuff",
//                 },
//             },
//         });
//         setPaymentLoading(false);
//         if (paymentResult.error) {
//             alert(paymentResult.error.message);
//         } else {
//             if (paymentResult.paymentIntent.status === "succeeded") {
//                 alert("Success!");
//             }
//         }
//     };

//     return (
//         <div
//             style={{
//                 padding: "3rem",
//             }}
//         >
//             <div
//                 style={{
//                     maxWidth: "500px",
//                     margin: "0 auto",
//                 }}
//             >
//                 <form
//                     style={{
//                         display: "block",
//                         width: "100%",
//                     }}
//                     onSubmit={payMoney}
//                 >
//                     <div
//                         style={{
//                             display: "flex",
//                             flexDirection: "column",
//                             alignItems: "center",
//                         }}
//                     >
//                         <CardElement
//                             className="card"
//                             options={{
//                                 style: {
//                                     base: {
//                                         backgroundColor: "white"
//                                     }
//                                 },
//                             }}
//                         />
//                         <button
//                             className="pay-button"
//                             disabled={isPaymentLoading}
//                         >
//                             {isPaymentLoading ? "Loading..." : "Pay"}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

export { Checkout }