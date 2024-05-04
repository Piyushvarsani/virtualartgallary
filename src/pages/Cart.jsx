import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../component/CartItem';

export default function Cart() {
    const cardItems = useSelector(state => state.cart)
    console.log(cardItems);

    return (
        <div className='px-24'>
            <div className='pt-24 '>
                {cardItems.length > 0 ?
                    cardItems.map(item => <CartItem key={item.id} id={item.id} image={item.thumbnail} name={item.name} price={item.price} />)
                    : 'empty cart'}
            </div>
            <div className='text-right mb-5'>
                Total: <span className='font-semibold'>{cardItems.reduce((accVal, currVal) => accVal + currVal.price, 0)}</span>
            </div>
            {
                cardItems.length > 0 && <button className='bg-green-500 w-full py-3 rounded-md text-lg font-semibold text-white'>Checkout</button>
            }
        </div>
    )
}
