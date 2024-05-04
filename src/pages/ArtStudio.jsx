import React from 'react'
import FlexContent from '../component/FlexContent'

export default function ArtStudio() {
    return (
        <div>
            <FlexContent section='ARt Studio' info='unique art space that inspires creativity' para="Bright and versatile space, ideal for a variety of creative events. The studio has plenty of natural light and a flexible layout that can be adapted to suit a range of needs, from small workshops to larger events. The walls are adorned with beautiful artwork, providing an inspiring backdrop for any creative endeavor. In addition to the spacious main hall, the studio also has a photography area, complete with professional lighting and equipment, making it the perfect location for photographers looking to capture stunning shots." />
            <div className='sm:w-full sm:grid sm:grid-cols-2 sm:grid-rows-2 md:grid md:grid-cols-4 md:grid-rows-1 gap-2'>
                <div>
                    <img src="./src/asset/art-1.jpg" alt="art studio" className='object-cover w-full rounded-md' />
                </div>
                <div>
                    <img src="./src/asset/art-2.jpg" alt="art studio" className='object-cover w-full rounded-md' />
                </div>
                <div>
                    <img src="./src/asset/art-3.jpg" alt="art studio" className='object-cover w-full rounded-md' />
                </div>
                <div>
                    <img src="./src/asset/art-4.jpg" alt="art studio" className='object-cover w-full rounded-md' />
                </div>
            </div>
        </div>
    )
}
