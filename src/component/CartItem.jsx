import React from 'react'
import { useDispatch } from 'react-redux'
import { removeProduct } from '../store/cart/cartSlice'

export default function CartItem({ id, name, image, price }) {
    const dispatch = useDispatch()

    function handleRemoveItem(id) {
        dispatch(removeProduct(id))
    }
    return (
        <div className='border-2 h-36 flex mb-4'>
            <div className='h-full w-48 mr-5'>
                <img className='h-full w-full object-cover' src={image} alt={name} />
            </div>
            <div className='flex justify-between items-start flex-1 p-3'>
                <div className='flex flex-col justify-between item'>
                    <h3 className='text-lg font-semibold'>{name}</h3>
                    <div className='mb-3'>price: {price}</div>
                    <div>Qty: 1</div>
                </div>
                <button onClick={() => handleRemoveItem(id)} className='bg-slate-400 px-4 py-2 text-white rounded-md'>remove</button>
            </div>
        </div>
    )
}

