import React, { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { db } from '../Firebase'
import { getDoc, doc, updateDoc, getDocs, collection, query, where } from 'firebase/firestore'
import { CartContext } from "../App"

function Details() {
    const [product, setProduct] = useState(null)
    const [selectedSize, setSelectedSize] = useState("")
    const cartContext = useContext(CartContext);
    const { id } = useParams()

    function addToCart() {

    }


    useEffect(() => {
        //Function to fetch and set the product
        const fetchProduct = async () => {
            const productDoc = doc(db, "clothes2", id);
            const docSnap = await getDoc(productDoc);
            setProduct(docSnap.data())
        }

        fetchProduct()
    }, [])


    return (
        <section className="text-gray-400 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                {
                    product &&
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">

                        <img
                            alt="Product Image"
                            className="lg:w-1/2 w-full object-cover object-center rounded-[20px] border"
                            src={product.colorways[0].imgURL}
                        />

                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">By Fitness Rats</h2>
                            <h1 className="text-gray-300 text-3xl title-font font-medium mb-5">{product.title}</h1>
                            <p className="leading-relaxed">{product.description}</p>


                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                <div className="flex items-center">
                                    <span className="mr-3">Size</span>
                                    <div className="relative">
                                        <select
                                            className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10"
                                            onChange={e => setSelectedSize(e.target.value)}
                                        >
                                            <option value="SM">SM</option>
                                            <option value="M">M</option>
                                            <option value="L">L</option>
                                            <option value="XL">XL</option>
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-300">$0.00</span>
                                <button
                                    className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                                    onClick={addToCart}
                                    value={selectedSize}
                                >Add to cart</button>
                            </div>
                        </div>
                    </div>}
            </div>

        </section>
    )
}

export { Details }