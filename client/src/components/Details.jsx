
function Details() {


    return (
        <section class="text-gray-400 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="Product Image" class="lg:w-1/2 w-full object-cover object-center rounded-[20px] border" src="https://cdn.shopify.com/s/files/1/0538/2658/4736/products/AmplifyRestockMay310083_1000x.jpg?v=1673719047" />
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                        <h1 class="text-gray-300 text-3xl title-font font-medium mb-5">PRODUCT NAME</h1>
                        <p class="leading-relaxed">PRODUCT DETAIL: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis quis nibh mollis accumsan. Pellentesque in nunc pharetra, tempor turpis in, blandit lectus. Nulla convallis, eros nec feugiat efficitur, turpis ipsum ornare mi, non sodales tellus sapien sit amet dolor. Nunc efficitur faucibus dignissim. Sed tristique purus quis metus fermentum, ut tempus tellus viverra. Donec ut mi ac massa lobortis sollicitudin. Fusce vitae risus eu dolor vestibulum luctus ac a lectus. Sed quis ipsum libero. Integer mattis quis lectus ut varius. Morbi mattis erat sed consequat sagittis. Praesent a magna commodo, fermentum enim in, feugiat ante. Vivamus ultrices eleifend ante vitae aliquet. Duis rhoncus suscipit enim quis laoreet.</p>
                        
                        
                        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                            <div class="flex items-center">
                                <span class="mr-3">Size</span>
                                <div class="relative">
                                    <select class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                                        <option>SM</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                    <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                            <span class="title-font font-medium text-2xl text-gray-300">$0.00</span>
                            <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                                
                            >Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Details }