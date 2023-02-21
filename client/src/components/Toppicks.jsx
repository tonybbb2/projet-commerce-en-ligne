import React from 'react'
import Cards from './Cards'

const Toppicks = () => {
    return (
        <section id='Toppicks' className='w-full h-full'>
            <div className='w-full md:h-1/4'>
                <div className='md:px-64 text-center md:text-left'>
                    <p className='font-bold text-white uppercase  text-md md:text-2xl '>Shop</p>
                    <span className='font-extrabold text-white uppercase  text-md md:text-3xl'>Top Picks</span>
                </div>
                <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative px-30 lg:px-60 mt-4'>
                    <Cards cover={'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310133_1000x.jpg?v=1668811498'} title={'Amplify Short 4"5'} color={'black'} pricing={52.00}/>
                    <Cards cover={'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310133_1000x.jpg?v=1668811498'} title={'Amplify Short 4"5'} color={'black'} pricing={52.00}/>
                    <Cards cover={'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310133_1000x.jpg?v=1668811498'} title={'Amplify Short 4"5'} color={'black'} pricing={52.00}/>
                    <Cards cover={'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310133_1000x.jpg?v=1668811498'} title={'Amplify Short 4"5'} color={'black'} pricing={52.00}/>
                    <Cards cover={'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310133_1000x.jpg?v=1668811498'} title={'Amplify Short 4"5'} color={'black'} pricing={52.00}/>
                    <Cards cover={'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310133_1000x.jpg?v=1668811498'} title={'Amplify Short 4"5'} color={'black'} pricing={52.00}/>
                    
                </div>
            </div>
        </section>
    )
}

export default Toppicks