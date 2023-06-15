'use client'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import SocialMediaButtons from '@/components/SocialMediaButtons'
import Splashscreen from '@/components/Splashscreen'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome)

  useEffect(() => {
    if (isLoading)
      return
  }, [isLoading])

  return (
    <html lang="en">
      <body>
        <div className={cn(" bg-black", inter.className)}>
          {isLoading && isHome ? (
            <Splashscreen finishLoading={() => setIsLoading(false)} />
          ) : (
            <div>
              <NavBar />
              {children}
              <SocialMediaButtons />
              <Footer />
            </div>
          )
          }
        </div>
      </body>
    </html>
  )
}
