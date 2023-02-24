import React, { useEffect, useState } from "react"
import { db } from '../Firebase'
import { getDoc, doc, updateDoc, getDocs, collection } from 'firebase/firestore'
import BigCards from "./BigCards"

function MenProducts() {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        // // Function to fetch and set the product detail
        // const clothesRef = doc(db, 'clothes/urls_homme')

        // const fetchClothes = async () => {
        //     //const braPath = doc(clothesRef, 'Bra_small_icon')
        //     const bra = await getDoc(clothesRef)
        //     if (bra.exists()) {
        //         return ('Document data:', bra.data());
        //     } else {
        //         return ('No such document!');
        //     }
        // }

        // const result = fetchClothes()
        //     .catch(console.error)
        // result.then(value => {
        //     //console.log(value)
        //     setProducts(value)
        // })

        const fetchClothes = async () => {
            const querySnapshot = await getDocs(collection(db, "clothes2"));

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
                            products.docs.map(doc => {
                                const product = doc.data()

                                return (
                                    <BigCards img={product.colorways[0].imgURL} key={doc.id} id={doc.id} />
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
