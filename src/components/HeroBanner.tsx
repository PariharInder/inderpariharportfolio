import { FC } from 'react'
import CallToAction from './CallToAction'

interface HeroBannerProps {

}

const HeroBanner: FC<HeroBannerProps> = ({ }) => {
    return (
        <div className="flex flex-col md:ml-20">
            <div className="text-center md:text-left font-light text-3xl md:text-5xl flex flex-col">
                <span>
                    Hi, I am <span className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-teal-500 to-purple-500 text-transparent bg-clip-text">INDER PARIHAR</span> and,
                </span>
                <span>
                    I turn ideas into solutions using <span className='font-bold bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 text-transparent bg-clip-text'>&lt;code/&gt;</span>.
                </span>
            </div>
            <CallToAction />
        </div>
    )
}

export default HeroBanner