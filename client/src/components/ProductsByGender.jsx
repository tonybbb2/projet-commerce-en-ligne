import React, { useEffect, useState } from "react"
import { db } from '../Firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'
import BigCards from "./BigCards"
import { useParams } from "react-router-dom"

function ProductsByGender() {
    const [products, setProducts] = useState(null)
    const { gender } = useParams()

    useEffect(() => {
        //Function to fetch and set the products
        const fetchClothes = async () => {
            const myQuery = query(collection(db, "clothes2"), where("gender", "==", gender))
            const querySnapshot = await getDocs(myQuery);
            setProducts(querySnapshot)
        }

        fetchClothes()
    }, [gender])

    return (
        <section>
            <div className='w-full h-full'>
                <h1 className='text-4xl text-center py-12 uppercase font-semibold text-white italic'>{gender} Products</h1>
                <div className='flex justify-center'>
                    <div className='w-3/4 h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 '>
                        {
                            products &&
                            products.docs.map(doc => {
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

export { ProductsByGender };
