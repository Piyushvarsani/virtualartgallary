import React, { useEffect, useState } from 'react'
import Category from '../component/Category'
import SingleArtCard from '../component/SingleArtCard'
import { useSearchParams } from 'react-router-dom'

export default function ArtStore() {
    const [arts, setArts] = useState([])
    const [categories, setCategories] = useState([])

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        async function getArtData() {
            try {
                const data = await fetch('https://artjson.vercel.app/arts')
                const res = await data.json()
                setArts(res);
            } catch (err) {
                console.log(err.message);
            }
        }
        getArtData()

        setSearchParams({ type: 'all' })
    }, [])

    useEffect(() => {
        async function getCategory() {
            try {
                const data = await fetch('https://artjson.vercel.app/catagories')
                const res = await data.json()
                setCategories(res);
            } catch (err) {
                console.log(err.message);
            }
        }
        getCategory()
    }, [])

    function handleClearFilter() {
        setSearchParams({ type: 'all' })
    }

    const filteredArts = searchParams.get('type') === 'all' ? arts : arts.filter(item => item.catagory === searchParams.get('type'))

    return (
        <section className='py-24 px-10'>
            <div className='sm:flex sm:flex-col md:flex md:flex-row md:items-center gap-2 mb-5'>
                <div className='py-2 font-bold px-3 md:border-r-2 md:border-gray-500'>Category</div>
                <div className="flex gap-3 overflow-x-auto overflow-y-hidden px-2 py-2">
                    {
                        categories.length > 0 ? (categories.map((category, index) => <Category category={category} key={index} />)) : (<h3>Loading..</h3>)
                    }
                    <button onClick={handleClearFilter}>clear</button>
                </div>
            </div>


            <div className="sm:grid grid-cols-2  md:grid md:grid-cols-3 gap-4">
                {
                    filteredArts.length > 0 ? (filteredArts.map(art => <SingleArtCard artid={art.id} thumbnail={art.thumbnail} name={art.name} description={art.Disctiption} key={art.id} />)) : (<h3>Loading..</h3>)
                }

            </div>
        </section>

    )
}
