'use client'
import HeroBanner from "@/components/HeroBanner"
import Splashscreen from "@/components/Splashscreen"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Home() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome)

  useEffect(() => {
    if (isLoading)
      return
  }, [isLoading])

  return (
    <main className="flex flex-col h-screen md:-mt-20 justify-center text-white">
      {isLoading && isHome ? (
            <Splashscreen finishLoading={() => setIsLoading(false)} />
          ) : (
            <div>
              <HeroBanner />
            </div>
          )
      }
    </main>
  )
}
