import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginBtn() {
    return (
        <>
            <Link to={'/login'} className={`px-5 py-2 rounded-md font-semibold flex justify-between items-center bg-green-300`}>
                Log In
            </Link>
        </>
    )
}
