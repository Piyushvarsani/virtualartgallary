import React, { useEffect, useState } from 'react'
import logoImage from '../asset/Logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping'

import { Link, NavLink } from 'react-router-dom'
import LogOutBtn from './LogOutBtn'
import LoginBtn from './LoginBtn'
import { useSelector } from 'react-redux';

export default function Navbar({ isLogIn, handleLogIn }) {
    const cart = useSelector(state => state.cart)

    function handleLogout() {
        localStorage.removeItem('user')
        handleLogIn(false)
    }

    return (
        <header className='flex justify-between items-center px-7 h-24 fixed right-0 left-0 backdrop-blur-[2px] border-b-slate-400'>
            <Link to={'/'} className='w-44 z-50'>
                <img src={logoImage} alt="art logo" className='w-full' />
            </Link>
            <nav className='flex justify-between items-center font-CormorantUnicase text-xl'>
                <NavLink to={'/store'} className='mr-8 font-semibold'>
                    Art Store
                </NavLink>

                {isLogIn ? <LogOutBtn onLogout={handleLogout} /> : <LoginBtn />}

                <NavLink to={'user/cart'} className='px-5 py-2 rounded-md font-semibold flex justify-between items-center relative'>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span className='absolute right-0 top-0 h-5 w-5 bg-red-300 rounded-full flex justify-center items-center'>{cart.length}</span>
                </NavLink>


            </nav>
        </header>
    )
}
