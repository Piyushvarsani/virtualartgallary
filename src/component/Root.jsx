import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

export default function Root() {
    const [isLogIn, setIsLogIn] = useState('')

    function handleLogIn(bool) {
        setIsLogIn(bool)
    }

    useEffect(() => {
        setIsLogIn(!!localStorage.getItem('user'))
    }, [])


    return (
        <>
            <Navbar isLogIn={isLogIn} handleLogIn={handleLogIn} />
            <Outlet context={[handleLogIn]} />
        </>
    )
}
