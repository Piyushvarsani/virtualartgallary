import React, { useEffect } from 'react'

export default function Hero() {

    return (
        <section className="bg-[url('./asset/hero-bg.jpg')] h-screen text-4xl flex justify-center items-center">
            <div className='w-[70%] h-[40%]'>
                <h1 className=' font-CormorantUnicase text-[200%] flex flex-col justify-between h-full uppercase'>
                    <span>Discover</span>
                    <div className='flex flex-col self-center '>
                        <span className='mb-5'>The Wealth</span>
                        <span>of Art</span>
                    </div>
                    <span className='text-right text-white'>In Gold</span>
                </h1>
            </div>
        </section>
    )
}
