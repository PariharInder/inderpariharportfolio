'use client'
import { FC } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

interface ImageSliderProps {
    images:any
}

const ImageSlider: FC<ImageSliderProps> = ({images}) => {
    return (
    <Carousel>
        {images.map((image: any) => (
        <div key={image.url} className='mt-2'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.url} alt={image.alt} />
        </div>
    ))}
    </Carousel>
    )
}

export default ImageSlider