'use client'
import Splashscreen from '@/components/Splashscreen'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Inder Parihar - Full Stack Software Engineer',
  description: "I am Inder Parihar, a skilled and passionate full stack software engineer based in Toronto, ON. With expertise in web development, CI/CD, and DevOps, I specialize in crafting robust and scalable applications. Whether you need a dynamic website, a seamless user experience, or a reliable backend infrastructure, I have the skills and experience to bring your ideas to life. Hire me for your web development projects and let's create exceptional digital experiences together.",
  keywords: [
    'backend development',
    'DevOps',
    'cloud technologies',
    'software engineering',
    'optimization',
    'efficiency',
    'robust backend systems',
    'DevOps practices',
    'process optimization',
    'cloud infrastructure',
    'deployment automation',
    'TDD (Test-driven Development)',
    'CI/CD pipeline',
    'automated testing',
    'bug detection',
    'computer programming',
    'data structures',
    'algorithms',
    'Java',
    'scalable software solutions',
    'web development',
    'JavaScript',
    'TypeScript',
    'web frameworks',
    'SQL',
    'NoSQL databases',
    'Linux',
    'networking',
    'operating systems',
    'network communication',
    'programming languages',
    'Node.js',
    'Angular',
    'Express.js',
    'ASP.NET',
    'Jenkins',
    'Azure DevOps',
    'Git',
    'Docker',
    'Linux',
    'Red Hat Enterprise Linux',
    'cloud platforms',
    'Azure',
    'on-prem cloud systems',
    'version control',
    'GitLab',
    'Next.js',
  ],
  author: 'Inder Parihar',
  website: 'https://www.inderparihar.ca',
  social: {
    linkedin: 'https://www.linkedin.com/in/inderparihar/',
    github: 'https://github.com/PariharInder/',
  },
}

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
              {children}
            </div>
          )
          }
        </div>
      </body>
    </html>
  )
}
