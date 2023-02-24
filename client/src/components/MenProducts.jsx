import React, { useEffect, useState } from "react"
import { db } from '../Firebase'
import { getDoc, doc, updateDoc, getDocs, collection, query, where } from 'firebase/firestore'
import BigCards from "./BigCards"

function MenProducts() {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        //Function to fetch and set the products
        const fetchClothes = async () => {
            const myQuery = query(collection(db, "clothes2"), where("gender", "==", "men"))
            const querySnapshot = await getDocs(myQuery);

            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });

            setProducts(querySnapshot)
        }

        fetchClothes()
    }, [])

    return (
        <section>
            <div className='w-full h-full'>
                <h1 className='text-4xl text-center py-12 uppercase font-semibold text-white italic'>Men Products</h1>
                <div className='flex justify-center'>
                    <div className='w-3/4 h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 '>
                        {
                            products &&
                            products.docs.map((doc, index) => {
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

export { MenProducts };
