import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
    const token = localStorage.getItem('user')
    if (!token) alert('you must login')

    return (
        <div>
            {token ? <Outlet /> : <Navigate to={'/login'} />}
        </div>
    )
}
