import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleArtCard({ artid, thumbnail, name, description }) {
    return (
        <Link to={`/store/${artid}`}>
            <div className="w-full h-[500px] rounded-md overflow-hidden transition-all duration-150 hover:border-2 hover:border-gray-200">
                <div className="w-full h-[60%]">
                    <img src={thumbnail} alt={name} className="w-full h-full object-cover" />
                </div>
                <div className="p-2 h-[40%] flex flex-col">
                    <h2 className="font-semibold text-lg mb-3">{name}</h2>
                    <p className='mb-4 line-clamp-3'>{description}</p>
                    <span className='px-3 py-1 rounded-md bg-slate-200 transition-all duration-200 hover:bg-gray-300 self-start'>FREE delivery</span>
                </div>
            </div>
        </Link>
    )
}
