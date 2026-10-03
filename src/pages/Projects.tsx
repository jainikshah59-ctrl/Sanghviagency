import { useState } from 'react'
import { Band, CtaBand, PageHead } from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS, PROJECT_FILTERS } from '../data/site'

export default function Projects() {
  const [f, setF] = useState('All Projects')
  const list = PROJECTS.filter((p) => f === 'All Projects' || p.sector === f)
  return (
    <>
      <PageHead title="Projects Portfolio" sub="500+ projects supplied across residential, commercial, industrial, and infrastructure sectors." />
      <Band tone="gray">
        <div className="flex flex-wrap gap-2 mb-10" role="tablist">
          {PROJECT_FILTERS.map((x) => <button key={x} role="tab" aria-selected={f === x} onClick={() => setF(x)} className={`rounded-full px-5 py-2 text-sm border transition-colors duration-300 ${f === x ? 'bg-gray-900 text-white border-gray-900' : 'bg-white border-gray-300 hover:border-gray-900'}`}>{x}</button>)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">{list.map((p, i) => <ProjectCard key={p.title} p={p} i={i} cta="Learn More" />)}</div>
      </Band>
      <CtaBand title="Need Steel for Your Next Project?" copy="Get a quick quote on WhatsApp. We respond within minutes during business hours." secondary={['Call Now', '/contact']} />
    </>
  )
}
