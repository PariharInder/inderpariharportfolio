import ProjectsCatalogue from "@/components/ProjectsCatalogue"
import ProjectsSection from "@/components/ProjectsSection"

export default function Home() {
    return (
      <div className="flex flex-col h-max justify-start md:pt-10 px-5 md:px-20 text-white">
        <ProjectsSection />
        <ProjectsCatalogue />
      </div>
    )
  }
  