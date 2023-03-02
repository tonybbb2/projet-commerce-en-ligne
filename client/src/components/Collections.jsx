import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { db } from '../Firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'
import BigCards from './BigCards'
import Cards from './Cards'


export const Collections = () => {

  const [product, setProduct] = useState(null)
  const { type } = useParams()

  useEffect(() => {
    //Function to fetch and set the products
    const fetchClothes = async () => {

      const myQuery = query(collection(db, "clothes2"), where("type", "==", type))
      const querySnapshot = await getDocs(myQuery);

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });

      setProduct(querySnapshot)
    }

    fetchClothes()
  }, [type])

  return (
    <section>
      <div className='w-full h-full'>
        <h1 className='text-4xl text-center py-12 uppercase font-semibold text-white italic'>{type}</h1>
        <div className='flex justify-center'>
          <div className='w-3/4 h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 '>
            {
              product &&
              product.docs.map(doc => {
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
  )
}
