import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { addProduct } from '../store/cart/cartSlice'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useDispatch } from 'react-redux'


export default function SingleArtProduct() {
    const [singleArt, setSingleArt] = useState([])

    const { id } = useParams()
    const dispatch = useDispatch()


    useEffect(() => {
        async function getSingleArt() {
            try {
                const data = await fetch(`https://artjson.vercel.app/arts/${id}`)
                const res = await data.json()
                setSingleArt(res);
            } catch (err) {
                console.log(err.message);
            }
        }
        getSingleArt()
    }, [id])

    function handleAddCard(addCartProduct) {
        dispatch(addProduct(addCartProduct))
    }

    return (
        <div className="h-screen">
            <div className="px-4 md:flex pt-24">
                <div className="mb-5 flex w-full flex-col gap-2 md:w-[70%] lg:flex-row-reverse relative">
                    <img src={singleArt.thumbnail} alt="" className="rounded-md lg:w-[80%]" />
                    <div className="flex h-24 w-full gap-2 lg:w-[20%] lg:flex-col">
                        {
                            singleArt?.photos?.length > 0 ? (
                                <>
                                    <img src={singleArt.photos[0]} alt="art image" className="h-full rounded-md border-2 border-gray-400 lg:h-80 lg:w-full lg:object-cover" />
                                    <img src={singleArt.photos[1]} alt="art image" className="rounded-md border-2 border-gray-400 lg:h-80 lg:w-full lg:object-cover" />
                                </>
                            ) : (
                                <h2>loading..</h2>
                            )
                        }

                    </div>
                    <FontAwesomeIcon icon={faHeart} className='text-3xl absolute right-4 top-4 bg-white p-3 rounded-full' />
                </div>
                <div className="px-3 md:w-[70%]">
                    <h3 className="mb-4 text-4xl font-semibold">{singleArt.name}</h3>
                    <h3 className="mb-4 text-2xl font-semibold">&#8377; {`${singleArt.price}`}</h3>
                    <p className="mb-4">{singleArt.Disctiption}</p>
                    <div className="mb-9 text-xl font-normal">rating : <span className='font-semibold'>{singleArt.review}</span> <span className='text-lg'>stars</span></div>
                    <button className="w-full rounded-full bg-slate-800 py-4 text-2xl text-white" onClick={() => handleAddCard(singleArt)}>Add to cart</button>
                </div>
            </div>
        </div >

    )
}
