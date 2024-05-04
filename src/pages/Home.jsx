import React from 'react'
import Hero from '../pages/Hero'
import About from '../pages/About'
import Exhibition from '../pages/Exhibition'
import ArtStudio from '../pages/ArtStudio'

export default function Home() {
    return (
        <main className=''>
            <Hero />
            <About />
            <Exhibition />
            <ArtStudio />
        </main>
    )
}
