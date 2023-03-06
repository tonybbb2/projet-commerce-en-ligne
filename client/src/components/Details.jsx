import React, { useEffect, useState, useContext } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { db } from '../Firebase'
import { getDoc, doc } from 'firebase/firestore'
import { CartContext } from "../App"
import Cookies from "js-cookie";
import { Alert } from "@material-tailwind/react";

function Details() {

    const cartContext = useContext(CartContext);
    const [searchParams] = useSearchParams();
    const [product, setProduct] = useState(null)
    const [selectedSize, setSelectedSize] = useState("")
    const [color, setColor] = useState(null)
    const { id } = useParams()
    const [showNotification, setShowNotification] = useState(false);

    // Function to add item to cart
    const addToCart = () => {
        // Show notification
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 2000);

        // Create new item
        const newItem = {
            Titre: product.title,
            Cover: product.colorways.find(colorway => colorway.color.toLowerCase().replace(/\s/g, '') === color.toLowerCase()).imgURL,
            Color: color,
            Size: selectedSize,
            Quantity: 1,
            Price: product.price.toFixed(2)
        };

        // Check si il y a deja le meme item dans le panier
        const existingItemIndex = cartContext.cartItems.findIndex(
            (item) => item.Titre === product.title && item.Size === selectedSize && item.Color === color
        );

        if (existingItemIndex >= 0) {
            // Ajoute 1 à la quantité de l'item existant
            const updatedCartItems = [...cartContext.cartItems];
            updatedCartItems[existingItemIndex].Quantity += 1;
            cartContext.setCartItems(updatedCartItems);
        } else {
            // Sinon, ajoute nouvel item au panier
            cartContext.setCartItems([...cartContext.cartItems, newItem]);
        }
    };

    // Save cart data to cookies whenever the cartItems state changes
    useEffect(() => {
        Cookies.set("cartItems", JSON.stringify(cartContext.cartItems));
    }, [cartContext.cartItems]);

    // UseEffect called everytime the id changes
    useEffect(() => {
        //Function to fetch and set the product
        const fetchProduct = async () => {
            const productDoc = doc(db, "clothes2", id);
            const docSnap = await getDoc(productDoc);
            setProduct(docSnap.data())

            // Set URL colorway, if there is
            const urlColor = searchParams.get("color")
            if (urlColor) {
                console.log(urlColor)
                setColor(urlColor)
            } else {
                // Else, set it to first color in colorways
                setColor(docSnap.data().colorways[0].color.toLowerCase().replace(/\s/g, ''))
            }
        }

        fetchProduct()
    }, [id, searchParams])


    return (
        <section className="text-gray-400 body-font overflow-hidden">
            {showNotification && (
                <div className="fixed bottom-1/8 left-1/2 transform -translate-x-1/2 w-8/12 rounded-lg shadow-md py-6 px-8 z-50">
                    <Alert color="green" className="text-lg text-white text-center">
                        Item added to cart
                    </Alert>
                </div>
            )}
            <div className="container px-5 py-24 mx-auto">
                {
                    product &&
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            {/* Product image */}
                            <img
                                alt="Product"
                                className="lg:w-4/2 w-full object-cover object-center rounded-[20px] border mb-5"
                                src={product.colorways.find(colorway => colorway.color.toLowerCase().replace(/\s/g, '') === color.toLowerCase()).imgURL}
                            />
                            <img
                                alt="Product 2"
                                className="lg:w-4/2 w-full object-cover object-center rounded-[20px] border"
                                src={product.colorways.find(colorway => colorway.color.toLowerCase().replace(/\s/g, '') === color.toLowerCase()).imgSideURL}
                            />
                        </div>

                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 static">
                            {/*  Title and description */}
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                {product.colorways.find(colorway => colorway.color.toLowerCase().replace(/\s/g, '') === color.toLowerCase()).color}
                            </h2>
                            <h1 className="text-gray-300 text-3xl title-font font-medium mb-5">{product.title}</h1>
                            <p className="leading-relaxed">{product.description}</p>

                            {/* Colorway picker */}
                            <div className="mt-[1rem] max-h-[22rem] overflow-auto p-[5px] rounded-[1rem] border border-secondary/20 scrollbar-hidden">
                                <div className="grid grid-cols-[repeat(auto-fill,minmax(5rem,1fr))] gap-[5px]">
                                    {
                                        product.colorways.map(colorway => {

                                            return (
                                                <div key={colorway.color} className="pt-[var(--aspectratio-3x4)] w-full transition-all relative cursor-pointer rounded-[5px] border border-transparent clipped-active-scaled-down !border-secondary/30 scale-105">
                                                    <img
                                                        className="lazyload-fade absolute-tl z-[2] wh-full-cover rounded-[4px] ls-is-cached lazyloaded"
                                                        src={colorway.imgIconURL}
                                                        alt={colorway.color}
                                                        onClick={e => setColor(colorway.color.toLowerCase().replace(/\s/g, ''))}
                                                    />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            {/* Size selection */}
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                <div className="flex items-center">
                                    <span className="mr-3">Size</span>
                                    <div className="relative">
                                        {
                                            product.sizes &&
                                            <select
                                                className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10"
                                                onChange={e => setSelectedSize(e.target.value)}
                                            >
                                                {product.sizes.map(size => <option value={size} key={size}>{size}</option>)}
                                            </select>
                                        }

                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Price and Add to cart button */}
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-300">{`$${product.price.toFixed(2)}`}</span>
                                <button
                                    className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                                    onClick={addToCart}
                                    value={selectedSize}
                                >Add to cart</button>
                            </div>
                        </div>
                    </div>
                }
            </div>

        </section>
    )
}

export { Details }