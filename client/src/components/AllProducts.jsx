import React, { useEffect, useState } from "react"
import { db } from '../Firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'
import BigCards from "./BigCards"
import { useSearchParams } from "react-router-dom"

function AllProducts() {
    const [searchParams] = useSearchParams();
    const [products, setProducts] = useState()
    const [filteredProducts, setFilteredProducts] = useState()
    const queryURL = searchParams.get("query") || ""
    const queryWords = queryURL.split(" ")

    useEffect(() => {
        //Function to fetch and set the products
        const fetchClothes = async () => {
            const myQuery = query(collection(db, "clothes2"))

            const querySnapshot = await getDocs(myQuery);

            querySnapshot.forEach(doc => {
                //const p = doc.data();
                //console.log(doc.data());
            });

            setProducts(querySnapshot)
        }

        fetchClothes()
    }, [])

    useEffect(() => {
        const filterProducts = () => {

            const newFilteredProducts = products.docs.filter(doc => {
                const p = doc.data()
                console.log(p)

                for (const word of queryWords) {
                    if (
                        p.description.toLowerCase().includes(word.toLowerCase()) ||
                        p.title.toLowerCase().includes(word.toLowerCase()) ||
                        p.type.toLowerCase().includes(word.toLowerCase())
                    ) {
                        return true
                    }
                }

                return false

            })

            setFilteredProducts(newFilteredProducts)
        }

        if (products) {
            filterProducts()
        } else {
            setFilteredProducts(products)
        }
    }, [products, queryURL])

    return (
        <section>
            <div className='w-full h-full'>
                <h1 className='text-4xl text-center py-12 uppercase font-semibold text-white'>Results for: <i>{queryURL}</i></h1>
                <div className='flex justify-center'>
                    <div className='w-3/4 h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 '>
                        {
                            filteredProducts &&
                            filteredProducts.map(doc => {
                                const product = doc.data()

                                return product.colorways.map(colorway =>
                                    <BigCards
                                        img={colorway.imgURL}
                                        key={`${doc.id}:${colorway.color.replace(/\s/g, '').toLowerCase()}`}
                                        id={doc.id}
                                        color={colorway.color.replace(/\s/g, '').toLowerCase()}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>

    );
}

export { AllProducts };
