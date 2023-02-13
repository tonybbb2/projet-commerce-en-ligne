import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from '../Firebase'
import { getDoc, doc } from 'firebase/firestore'

function Details() {
    const [product, setProduct] = useState(null)
    const [selectedSize, setSelectedSize] = useState("")
    const { id } = useParams()

    function addToCart() {
        // Function to add to cart
    }

    useEffect(() => {
        // Function to fetch and set the product detail
        const clothesRef = doc(db, 'clothes/urls')

        const fetchClothes = async () => {
            //const braPath = doc(clothesRef, 'Bra_small_icon')
            const bra = await getDoc(clothesRef)
            if (bra.exists()) {
                return ('Document data:', bra.data());
            } else {
                return ('No such document!');
            }
        }

        const result = fetchClothes()
            .catch(console.error)
        result.then(value => {
            console.log(value)
            setProduct(value.Bra_big_image)
        })


    }, [])

    return (
        <section className="text-gray-400 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="Product Image" className="lg:w-1/2 w-full object-cover object-center rounded-[20px] border" src="https://cdn.shopify.com/s/files/1/0538/2658/4736/products/AmplifyRestockMay310083_1000x.jpg?v=1673719047" />
                    <div id="default-carousel" className="relative" data-carousel="static">
                        Carousel wrapper
                        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                            {
                                product &&
                                product.map(imageUrl => {
                                    console.log(imageUrl.replace(/\s/g, ''))
                                    return (
                                        <div className="hidden duration-700 ease-in-out" data-carousel-item key={imageUrl.replace(/\s/g, '')}>
                                            <img src={imageUrl.replace(/\s/g, '')} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        Slider indicators
                        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                        </div>
                        Slider controls
                        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>


                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                        <h1 className="text-gray-300 text-3xl title-font font-medium mb-5">PRODUCT NAME</h1>
                        <p className="leading-relaxed">PRODUCT DETAIL: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis quis nibh mollis accumsan. Pellentesque in nunc pharetra, tempor turpis in, blandit lectus. Nulla convallis, eros nec feugiat efficitur, turpis ipsum ornare mi, non sodales tellus sapien sit amet dolor. Nunc efficitur faucibus dignissim. Sed tristique purus quis metus fermentum, ut tempus tellus viverra. Donec ut mi ac massa lobortis sollicitudin. Fusce vitae risus eu dolor vestibulum luctus ac a lectus. Sed quis ipsum libero. Integer mattis quis lectus ut varius. Morbi mattis erat sed consequat sagittis. Praesent a magna commodo, fermentum enim in, feugiat ante. Vivamus ultrices eleifend ante vitae aliquet. Duis rhoncus suscipit enim quis laoreet.</p>


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
                </div>
            </div>

            {/* {
                product &&
                product.map(imageUrl => {
                    return <img src={imageUrl.replace(/\s/g, '')} key={imageUrl} />
                })
            } */}
        </section>
    )
}

export { Details }