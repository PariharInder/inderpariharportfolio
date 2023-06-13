import { FC } from 'react'
import CallToAction from './CallToAction'
import { headingVariants } from './ui/Headings'

interface HeroBannerProps {

}

const HeroBanner: FC<HeroBannerProps> = ({ }) => {
    return (
        <div className="flex flex-col md:ml-20">
            <div className="text-center md:text-left font-light text-3xl md:text-5xl flex flex-col">
                <span>
                    Hi, I am <span className={headingVariants({variant: 'headingTealPrimary', size: 'lg'})}>INDER PARIHAR</span> and,
                </span>
                <span>
                    I turn ideas into solutions using <span className={headingVariants({variant: 'headingOrangeSecondary', size: 'default'})}>&lt;code/&gt;</span>.
                </span>
            </div>
            <CallToAction />
        </div>
    )
}

export default HeroBanner