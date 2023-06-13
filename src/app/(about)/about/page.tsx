import { headingVariants } from "@/components/ui/Headings";

export default function Home() {
  return (
    <main className="flex flex-col h-screen justify-center">
      <span className={headingVariants({ variant: 'headingOrangeSecondary', size: 'lg' })}>
        A little about me
      </span>
    </main>
  )
}