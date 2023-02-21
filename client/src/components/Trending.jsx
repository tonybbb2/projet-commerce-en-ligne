import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { db } from '../Firebase'
import { getDoc, doc } from 'firebase/firestore'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Trending = () => {

    const [product, setProduct] = useState(null)
    const [everyProduct, setEveryProduct] = useState(null)

    useEffect(() => {
        // Function to fetch and set the product detail
        const clothesRef = doc(db, 'clothes/urls')

        const fetchClothes = async () => {
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
            setProduct(value)

        })
    }, [])

    const allProducts = []

    // if (product) {
    //     for (const key in product) {
    //         product[key].forEach((url, index) => {
    //             if (index < 10) {
    //                 allProducts.push({
    //                     cover: url.replace(/\s/g, '')
    //                 })
    //             }
    //         })
    //     }
    // }


    return (
        <section id='Recommended' className='w-full h-full'>
            <div className='w-full md:h-1/4'>
                <div className='md:px-64 text-center md:text-left'>
                    <p className='font-bold text-white uppercase  text-md md:text-2xl '>shop</p>
                    <span className='font-extrabold text-white uppercase  text-md md:text-3xl'>Trending</span>
                </div>

                <div id='slider' className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative px-30 lg:px-60 mt-4 '>
                    {
                        product && allProducts.map((product, index) => {
                            return <Cards cover={product.cover} key={index} title={'Amplify Short 4"5'} color={'black'} pricing={52.00} label={'🔥'} />
                        })
                    }
                </div>

            </div>
        </section>
    )
}

export default Trending