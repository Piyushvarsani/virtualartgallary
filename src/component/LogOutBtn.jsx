import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LogOutBtn({ onLogout }) {
    const navigate = useNavigate()

    function onHandleLogOut(e) {
        e.preventDefault()
        localStorage.clear()
        onLogout()
        navigate('/')
    }

    return (
        <>
            <button onClick={onHandleLogOut} className={`px-5 py-2 rounded-md font-semibold flex justify-between items-center bg-red-500 text-white`}>
                LogOut
            </button>
        </>
    )
}
