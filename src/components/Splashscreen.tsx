'use client'
import { FC, useEffect, useRef } from 'react'
import anime from 'animejs/lib/anime.es.js'

interface SplashscreenProps {
  finishLoading: () => void
}

const Splashscreen: FC<SplashscreenProps> = ({ finishLoading }) => {
  const loaderRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLSpanElement>(null)
  const waitRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const animateLoader = () => {
      const loader = anime.timeline({
        complete: finishLoading,
      })

      loader.add({
        targets: loaderRef.current,
        rotate: '90deg',
        duration: 4000,
        easing: 'easeInOutCirc',
        loop: true,
      })
    }

    const animateLogo = () => {
      anime.timeline()
        .add({
          targets: logoRef.current,
          opacity: [0, 1],
          translateY: ['-20px', '0'],
          easing: 'easeOutCirc',
          duration: 1500,
        })
        .add({
          targets: logoRef.current,
          opacity: 1,
          translateY: '0',
          easing: 'linear',
          duration: 1000,
        })
    }

    const animateWaitText = () => {
      anime.timeline()
        .add({
          targets: waitRef.current,
          opacity: [0, 1],
          translateX: ['-20px', '0'],
          easing: 'easeOutCirc',
          duration: 1500,
        })
        .add({
          targets: waitRef.current,
          opacity: 1,
          translateX: '0',
          easing: 'linear',
          duration: 1000,
        })
    }

    animateLoader()
    animateLogo()
    animateWaitText()
  }, [finishLoading])

  return (
    <div className='flex flex-col h-screen items-center justify-center bg-neutral-700/60'>
      <div ref={loaderRef} className='w-12 h-12 border-4 border-dashed border-white-200 rounded-full animate-spin'></div>
      <span id="logo" ref={logoRef} className='text-4xl mt-10 text-white font-extrabold'>
        <span className="fade-in">inder</span><span className="fade-in">parihar.ca</span>
      </span>
      <span className='text-white text-xl underline' ref={waitRef} id="wait">
        Please wait while the page loads...
      </span>
    </div>
  )
}

export default Splashscreen
