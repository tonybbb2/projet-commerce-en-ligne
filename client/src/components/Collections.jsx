import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { db } from '../Firebase'
import { getDoc, doc } from 'firebase/firestore'
import  BigCards  from './BigCards'
import Cards from './Cards'


export const Collections = () => {

  const [product, setProduct] = useState([])

  const location = useLocation()
  useEffect(() => { setProduct(location.state.data) }, [])

  console.log(location)

  return (
    <section>
      <div className='w-full h-full'>
        <h1 className='text-4xl text-center py-12 uppercase font-semibold text-white italic'>{location.state.category}</h1>
        <div className='flex justify-center'>
          <div className='w-3/4 h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 '>
            {product.map((item, index) => {
              return (
                <BigCards img={item.replace(/\s/g, '')} key={index}/>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
