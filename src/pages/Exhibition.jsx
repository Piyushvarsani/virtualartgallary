import React from 'react'
import ExibitionComponent from '../component/ExibitionComponent'

const exhibitions = [
    {
        id: 1,
        img: './src/asset/exhibition-1.jpg',
        title: 'Colors of Being',
        description: "This is oil paintings that celebrates the essence of existence through vibrant pastels and invigorating greens. The abstract paintings featured in this exhibition are a visual representation of the beauty and complexity of life. Soft pastel colors create a soothing atmosphere that invites the viewer to immerse themselves in the art. At the same time, dynamic bursts of greenery add a sense of vitality and energy, bringing the paintings to life. Each work in this exhibition is a unique expression of the artist's vision, colorfully and captivatingly conveying the essence of life."
    },
    {
        id: 2,
        img: './src/asset/exhibition-2.jpg',
        title: 'solution',
        description: "This is an exciting exhibition that features a stunning collection of abstract paintings in bright and vibrant colors. Works by talented contemporary artists that are used to explore dynamics, texture and movement using bold brushstrokes, geometric shapes and contrasting hues. Each painting represents a unique solution to a creative challenge, the collection as a whole offers a striking visual feast for art lovers and collectors alike. The bright colors used throughout the expression evoke a sense of energy and positivity, attention is manifested in the beauty and sensitivity of abstract art. Whether you're a longtime fan of abstract painting or just want to discover something new and exciting, Solution promises to be an unforgettable experience."
    },
    {
        id: 3,
        img: './src/asset/exhibition-3.jpg',
        title: 'Street art',
        description: "This is a fascinating photography exhibition showcasing the vibrant and colorful world of street art. The exhibition features photographs of walls painted by talented street artists from around the world. Every photograph is a celebration of creativity as artists use the walls as a canvas to bring their unique visions to life."
    },
]

export default function Exhibition() {
    return (
        <section>
            <div className='px-6 py-7'>
                <h2 className='text-3xl uppercase font-CormorantUnicase mb-3'>Exhibition</h2>
                {
                    exhibitions.map(exhibition => <ExibitionComponent img={exhibition.img} title={exhibition.title} description={exhibition.description} key={exhibition.id} />)
                }
            </div>
        </section>
    )
}
