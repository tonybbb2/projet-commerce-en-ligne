import React, { useState, useEffect, useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { CartContext } from "../App"
import { Alert } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom'
import Cookies from "js-cookie";

export const MyCheckoutForm = () => {

    const cartContext = useContext(CartContext);
    const [clientSecret, setClientSecret] = useState("");
    const [email, setEmail] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const totalPrice = Math.round(cartContext.totalPrice * 100);
    const [showNotification, setShowNotification] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [OrderComplete, setOrderComplete] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();




    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    // Create a payment intent and getting the secret
    useEffect(() => {
        if (totalPrice !== 0 && email !== '') {
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
    }, [cartContext.totalPrice, email, totalPrice]);

    // Function to clear cartItems cookie
    function clearCartItemsCookie() {
        if (OrderComplete) {
            navigate("/");
            cartContext.setCartItems([]);
        }
    }

    // Function to clear cartItems cookie reload
    function clearCartItemsCookieReload() {
        if (OrderComplete) {
            Cookies.set("cartItems", "");
        }
    }


    useEffect(() => {
        // Add event listener for beforeunload event
        window.addEventListener('beforeunload', clearCartItemsCookieReload);
    }, [OrderComplete]);




    // Make the payment after filling the form properly
    const makePayment = async (event) => {
        event.preventDefault(); // prevent form submission

        // Validate form fields
        const firstName = event.target.elements.firstName.value;
        if (!firstName) {
            setErrorMessage("Please enter your first name")
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 5000);
            return;
        }

        const lastName = event.target.elements.lastName.value;
        if (!lastName) {
            setErrorMessage("Please enter your last name")
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 5000);
            return;
        }

        const email = event.target.elements.email.value;
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setErrorMessage("Please enter a valid email address")
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 5000);
            return;
        }

        const address = event.target.elements.address.value;
        if (!address) {
            setErrorMessage("Please enter your address")
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 5000);
            return;
        }

        const city = event.target.elements.city.value;
        if (!city) {
            setErrorMessage("Please enter your city")
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 5000);
            return;
        }

        const postcode = event.target.elements.postcode.value;
        if (!postcode || !/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(postcode)) {
            setErrorMessage("Please enter a valid postcode")
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 5000);
            return;
        }

        const nameOnCard = event.target.elements["Name on card"].value;
        if (!nameOnCard) {
            setErrorMessage("Please enter the name on your card")
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 5000);
            return;
        }

        // Validate CardElement
        const cardElement = elements.getElement(CardElement);
        const cardValidationResult = await stripe.createToken(cardElement);
        if (cardValidationResult.error) {
            setErrorMessage(cardValidationResult.error.message)
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 5000);
            return;
        }
        setIsLoading(true);

        await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        setIsLoading(false);
        setOrderComplete(true);
    }

    return (
        <div>
            {showNotification && (
                <div className="fixed bottom-1/8 left-1/2 transform -translate-x-1/2 w-7/12 rounded-lg shadow-md py-6 px-8 z-50">
                    <Alert color="red" className="text-lg text-white text-center">
                        {errorMessage}
                    </Alert>
                </div>
            )}
            {OrderComplete ? (
                <div className="mt-48 flex flex-col items-center justify-center">
                    <h1 className="text-5xl text-white text-center font-extrabold">Thank You for Your Order</h1>
                    <p className="mt-4 text-2xl text-white text-center font-bold">Your order has been received and is being processed. We appreciate your business!</p>
                    <button className="mt-6 w-72 px-6 py-2 text-xl text-white font-medium rounded-lg bg-green-500 hover:bg-green-700" onClick={clearCartItemsCookie}>Continue to homepage</button>
                </div>
            ) : (
                <div>
                    <h2 className="font-bold md:text-xl text-heading text-white">Shipping Address
                    </h2>
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
                                    <input name="lastName" type="text" placeholder="Last Name"
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
                                    <input name="address" type="text" placeholder="Address"
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
                                        hidePostalCode: true

                                    }} />
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button
                                id="submit" className="w-full px-6 py-2 text-white font-bold rounded-lg bg-green-500 hover:bg-green-700" disabled={totalPrice !== 0 ? false : true}>{isLoading ? (
                                    <div className="flex items-center justify-center">
                                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 018 8v-2a6 6 0 00-6-6H16z"
                                            />
                                        </svg>
                                        Processing
                                    </div>
                                ) : (
                                    'Process'
                                )}</button>
                        </div>
                    </form>
                </div>
            )
            }
        </div>

    );
};