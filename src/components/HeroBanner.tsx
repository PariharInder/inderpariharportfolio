import { FC } from 'react'

interface HeroBannerProps {

}

const HeroBanner: FC<HeroBannerProps> = ({ }) => {
    return (
        <div className="text-center md:text-left font-light text-3xl md:text-5xl md:ml-20 flex flex-col">
            <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                Hi, I am <span className="text-4xl md:text-6xl font-extrabold">INDER PARIHAR</span> and,
            </span>
            <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                I turn ideas into solutions using <span className='font-bold'>&lt;code/&gt;</span>.
            </span>
        </div>
    )
}

export default HeroBanner