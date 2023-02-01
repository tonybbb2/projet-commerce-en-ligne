import React, { useState, useEffect } from 'react'


export const Hero = () => {
    return (
        <div>
            <section className="p-[5rem] till-desktop:p-[3rem] till-phone:p-[5vw] py-[1.5rem]">
                <div className="grid-container mx-auto max-w-[var(--container-md-max-width)] relative size-1 ">
                    <div className="tile group alphalete-poster " data-block-index="0">
                        <div className="relative tile-media-container clipped absolute-tl w-8/12 mx-auto hover:scale-105 transition-all duration-500 cursor-pointer">
                            <video data-expand="-100" controls="" loop muted autoPlay className="lazyload-fade tile-media tile-video-default  tile-video-has-mobile lazyloading rounded-3xl">
                                <source src={"https://cdn.shopify.com/videos/c/o/v/ffae4ba3aff04a7ca9788caab7da5714.mp4"} type="video/mp4" />
                            </video>
                            <div className="absolute bottom-10 left-10">
                                <p className="text-4xl text-white font-extrabold">TRAIN LIKE A BEAST</p>
                                <p className="text-4xl text-white font-extrabold">LOOK LIKE A BEAUTY</p>
                                <p className="text-white mt-1">Often imitated, never duplicated</p>
                                <button class="bg-slate-300 bg-opacity-60 hover:text-black hover:bg-white text-white font-extrabold py-2 px-6 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mt-2">
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero