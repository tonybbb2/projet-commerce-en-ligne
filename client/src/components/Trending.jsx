import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { db } from '../Firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Trending = () => {

    const [product, setProduct] = useState(null)
    const [everyProduct, setEveryProduct] = useState(null)

    useEffect(() => {
        //Function to fetch and set the products
        const fetchClothes = async () => {

            const myQuery = query(collection(db, "clothes2"), where("gender", "==", "women"))
            const querySnapshot = await getDocs(myQuery);

            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
            });

            setProduct(querySnapshot)
        }
        
        //run the function
        fetchClothes()
    }, [])


    return (
        <section id='Recommended' className='w-full h-full'>
            <div className='w-full md:h-1/4'>
                <div className='md:px-64 text-center md:text-left'>
                    <p className='font-bold text-white uppercase  text-md md:text-2xl '>shop</p>
                    <span className='font-extrabold text-white uppercase  text-md md:text-3xl'>Trending</span>
                </div>

                <div id='slider' className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative px-30 lg:px-60 mt-4 '>
                    {
                        product && product.docs.map(doc => {
                            const product = doc.data()

                            return product.colorways.map(colorway =>
                                <Cards
                                cover={colorway.imgURL}
                                    key={`${doc.id}:${colorway.color.replace(/\s/g, '').toLowerCase()}`}
                                    id={doc.id}
                                    color={colorway.color.replace(/\s/g, '').toLowerCase()}
                                    title={doc.data().title}
                                    pricing={doc.data().price}  label={'????'}
                                />
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
}

export default Trending