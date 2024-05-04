import React from 'react'
import FlexContent from '../component/FlexContent'

export default function About() {
    return (
        <section>
            <FlexContent section='About' info='Welcome to our art gallery featuring contemporary and cutting-edge art' para="We are pleased to showcase a wide range of artists from around the world who use a variety of mediums such as painting, sculpture, photography and mixed media to create thought-provoking and visually stunning pieces. Each exhibit is carefully curated to challenge and engage our visitors with topics ranging from social commentary and political activism to personal stories and abstract expressions. Our gallery space is designed to enhance the viewing experience, with ample natural light, spacious rooms, and clean lines that draw attention to the artwork. Whether you're an avid art collector or simply a connoisseur of contemporary art, our gallery offers a dynamic and immersive experience that's sure to inspire and captivate." />
            <img src="./src/asset/about.jpg" alt="art gallary" className='w-full h-96 object-cover' />
        </section>

    )
}
