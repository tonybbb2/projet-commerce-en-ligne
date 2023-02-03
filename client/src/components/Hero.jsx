import React from 'react'


export const Hero = () => {
    return (
        <section id='Hero' className="w-full h-full py-[6rem]">
            <div className="grid-container mx-auto  max-w-[var(--container-md-max-width)] relative size-1 ">
                <div className="tile group alphalete-poster " data-block-index="0">
                    <div className="relative tile-media-container clipped absolute-tl  w-[80%] md:w-[75%] mx-auto">
                        <video data-expand="-100" controls="" loop muted autoPlay className="lazyload-fade tile-media tile-video-default  tile-video-has-mobile lazyloading rounded-3xl">
                            <source src={"https://cdn.shopify.com/videos/c/o/v/ffae4ba3aff04a7ca9788caab7da5714.mp4"} type="video/mp4" />
                        </video>
                        <div className="absolute bottom-10 left-10">
                            <p className="text-[10px] md:text-4xl text-white font-extrabold">TRAIN LIKE A BEAST</p>
                            <p className="text-[10px] md:text-4xl text-white font-extrabold">LOOK LIKE A BEAUTY</p>
                            <p className="text-white mt-1 text-[10px] md:text-xl">Often imitated, never duplicated</p>
                            <button className="bg-slate-300 bg-opacity-60 hover:text-black hover:bg-white text-white h-[35px] w-[70px] text-[8px] md:text-[14px] md:h-[40px] md:w-[150px] font-extrabold py-2 px-6 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mt-2">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero