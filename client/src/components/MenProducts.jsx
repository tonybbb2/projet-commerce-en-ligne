import React, { useEffect, useState } from "react"
import { db } from '../Firebase'
import { getDoc, doc, updateDoc } from 'firebase/firestore'

function MenProducts() {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        // Function to fetch and set the product detail
        const clothesRef = doc(db, 'clothes/urls_homme')

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
            setProducts(value)
        })
    }, [])

    return (
        <div className="">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {
                        products &&
                        Object.entries(products).map(([id, url]) => (
                            <a key={id} className="group">
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                    <img
                                        src={url}
                                        alt={id}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-300">PRODUCT NAME</h3>
                                <p className="mt-1 text-lg font-medium text-gray-400">0.00$</p>
                            </a>
                        ))}
                </div>
            </div>
        </div>

    );
}

export { MenProducts };
