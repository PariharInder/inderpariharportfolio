'use client'
import { FC, useEffect, useRef } from 'react'
import anime from 'animejs/lib/anime.es.js'

interface SplashscreenProps {
  finishLoading: () => void
}

const Splashscreen: FC<SplashscreenProps> = ({ finishLoading }) => {
  const phrasesRef = useRef<HTMLUListElement>(null)


  useEffect(() => {
    const phrases = phrasesRef.current?.querySelectorAll('li')

    if (phrases) {
      phrases.forEach((phrase, index) => {
        anime({
          targets: phrase,
          opacity: [0, 1], // Fade in animation
          translateY: [20, 0], // Move down animation
          delay: 500 * index, // Delay for each phrase
          duration: 1000, // Animation duration
          complete: () => {
            setTimeout(() => {
              anime({
                targets: phrase,
                opacity: [1, 0], // Fade out animation
                translateY: [0, -20], // Move up animation
                duration: 1000, // Animation duration
                complete: index === phrases.length - 1 ? finishLoading : undefined // Call the finishLoading function when animations complete for the last phrase
              })
            }, 2000) // Delay before each phrase disappears
          },
        })
      })
    }
  }, [finishLoading])

  return (
    <div className='flex flex-col h-screen items-center justify-center bg-black text-white font-light font-sans'>
      <ul ref={phrasesRef} className='flex flex-col text-center py-10 text-2xl md:text-3xl list-none'>
        <li>Experience Excellence:</li>
        <li>Ignite Innovation, Optimize Processes,</li>
        <li>Drive Efficiency.</li>
      </ul>
      <span>©inderparihar.ca</span>
    </div>
  )
}

export default Splashscreen
