import React, { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'

export default function Login() {
    const [handleLogIn] = useOutletContext()

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const navigate = useNavigate()

    function onHandleLogin(e) {
        e.preventDefault()
        localStorage.setItem('user', JSON.stringify({ user, pass }))
        navigate('/')
        handleLogIn(true)
    }

    return (
        <>
            <div className='h-screen flex flex-col justify-center items-center bg-slate-50'>
                <h2 className='text-3xl font-bold mb-5'>LogIn</h2>
                <form action="" className='flex flex-col w-96 h-60 justify-between p-6 rounded-md bg-gray-100'>
                    <input type="email" placeholder='Enter Email' onChange={(e) => setUser(e.target.value)} className='h-12 rounded-md px-3 placeholder:text-xl border' />
                    <input type="password" placeholder='Enter Password' onChange={(e) => setPass(e.target.value)} className='h-12 rounded-md px-3 placeholder:text-xl border' />
                    <button onClick={onHandleLogin} className='h-12 rounded-md px-3 placeholder:text-xl bg-slate-200 font-semibold'>Login</button>
                </form>
            </div>


        </>
    )
}
