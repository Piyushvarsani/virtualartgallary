import React from 'react'

export default function ExibitionComponent({ img, title, description }) {
    return (
        <div className='md:h-min md:flex md:justify-between md:gap-10 md:mb-7'>
            <div className='w-full'>
                <img src={img} alt="exibition" className='w-full h-full object-cover' />
            </div>
            <div className='w-full'>
                <h3 className='uppercase font-Inter text-lg mb-4'>{title}</h3>
                <p className='text-sm font-Inter mb-3'>{description}</p>
                <button className='underline text-gray-600'>TICKET</button>
            </div>
        </div>
    )
}
