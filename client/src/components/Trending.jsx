import React  from 'react'
import Cards from './Cards'
import { db } from '../Firebase'
import { getDoc, doc } from 'firebase/firestore'

import { useEffect } from 'react'



const Trending = () => {
    useEffect(() => {
        const clothesRef = doc(db, 'clothes/urls')

        const fetchClothes = async () => {
            // const braPath = doc(clothesRef, 'Bra_small_icon')
            const bra = await getDoc(clothesRef)
            if (bra.exists()) {
                return('Document data:', bra.data());
            } else {
                return('No such document!');
            }
        }
        
        const result = fetchClothes()
        .catch(console.error)
        result.then(value => {
            console.log(value)
        })

    }, [])

    return (
        <section id='Recommended' className='w-full h-full'>
            <div className='w-full md:h-1/4'>
                <div className='md:px-64 text-center md:text-left'>
                    <p className='font-bold text-white uppercase  text-md md:text-2xl '>shop</p>
                    <span className='font-extrabold text-white uppercase  text-md md:text-3xl'>Recommended</span>
                </div>
                <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative px-30 lg:px-60 mt-4'>
                    {/* {
                        product && allProducts.map((product, index) => {
                            return <Cards cover={product.cover} key={index} title={'Amplify Short 4"5'} color={'black'} pricing={'$52.00'} />
                        })
                    } */}
                </div>
            </div>
        </section>
    )
}

export default Trending