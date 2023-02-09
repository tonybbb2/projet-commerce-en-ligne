import React from "react"
import CartCard from "./CartCard"

function Cart() {

    return (
        <div >
            <div className="xl:w-8/12 lg:w-11/12 mx-auto mt-10">
                <h1 className="text-white font-extrabold text-3xl">YOUR BAG</h1>
            </div>
            <div className='xl:w-8/12 lg:w-11/12 h-16 rounded-md bg-black mx-auto mt-4 text-slate-200 border-[1px] border-[#3d3d3d] border-y-[#3d3d3d] hidden md:block' >
                <div className='flex justify-between px-14 py-[2px]'>
                    <div className="py-4">
                        <p className='text-lg font-bold text-gray-300'>TOTAL: 112.00 USD</p>
                    </div>
                    <div className="py-2">
                        <button id="checkout-btn" className="rounded-md border-2 border-green-500 bg-green-500 hover:bg-green-600" type="submit" name="checkout">
                            <p className="font-extrabold mx-6 my-2">CHECKOUT</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row xl:flex-row lg:flex-row sm:flex-col justify-center">
                <div className="flex flex-col mx-10 my-10">
                    <CartCard title={'OUTLINED WOLF HEAD DAD HAT'} color={'White'} size={'Adjustable'} pricing={'28.00'} cover={'https://cdn.shopify.com/s/files/1/0538/2658/4736/products/WhiteWolfHeadHat2_f175ba50-4906-40af-966a-3bd25c8e535e_1000x.jpg?v=1673718721'} quantity={'1'} />
                    <CartCard title={'OUTLINED WOLF HEAD DAD HAT'} color={'White'} size={'Adjustable'} pricing={'28.00'} cover={'https://cdn.shopify.com/s/files/1/0538/2658/4736/products/WhiteWolfHeadHat2_f175ba50-4906-40af-966a-3bd25c8e535e_1000x.jpg?v=1673718721'} quantity={'1'} />
                </div>
                <div className="flex flex-col mx-10 my-10">
                    <CartCard title={'OUTLINED WOLF HEAD DAD HAT'} color={'White'} size={'Adjustable'} pricing={'28.00'} cover={'https://cdn.shopify.com/s/files/1/0538/2658/4736/products/WhiteWolfHeadHat2_f175ba50-4906-40af-966a-3bd25c8e535e_1000x.jpg?v=1673718721'} quantity={'1'} />
                    <CartCard title={'OUTLINED WOLF HEAD DAD HAT'} color={'White'} size={'Adjustable'} pricing={'28.00'} cover={'https://cdn.shopify.com/s/files/1/0538/2658/4736/products/WhiteWolfHeadHat2_f175ba50-4906-40af-966a-3bd25c8e535e_1000x.jpg?v=1673718721'} quantity={'1'} />
                </div>
            </div>
        </div>

    )
}

export default Cart