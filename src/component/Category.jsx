import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Category({ category }) {

    const [searchParams, setSearchParams] = useSearchParams()

    function handleFilter(type) {
        setSearchParams({ type })
    }

    return (
        <button onClick={() => handleFilter(category)}>
            <span className="rounded-md bg-green-100 px-3 py-1 text-base font-medium w-fit"
            >
                {category}
            </span>
        </button>
    )
}
