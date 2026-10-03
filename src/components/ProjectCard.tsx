import { ArrowRight } from 'lucide-react'
import { EASE, SafeImg } from './ui'
import { waLink } from '../data/site'

type P = { title: string; loc: string; supply: string; sector?: string }
/** Reference case-study card: rounded-2xl media, hover-expanding CTA */
export default function ProjectCard({ p, i, cta = 'View Project' }: { p: P; i: number; cta?: string }) {
  return (
    <a href={waLink(`Hello Sanghvi Agency, I'd like to know more about supply like "${p.title}" (${p.loc}).`)} target="_blank" rel="noreferrer" className="group block cursor-pointer">
      <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
        <SafeImg alt={`${p.title} - ${p.loc}`} className="absolute inset-0 w-full h-full"
          fallback={<span className={`text-2xl sm:text-3xl font-medium tracking-tight ${i % 2 ? 'text-gray-900' : 'text-gray-900'}`}>{p.supply}</span>} />
        <span className={`absolute bottom-4 right-4 flex items-center bg-[#F26522] text-white rounded-full p-1.5 transition-[padding] ${EASE} group-hover:pl-5`}>
          <span className={`max-w-0 opacity-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all ${EASE} group-hover:max-w-[8rem] group-hover:opacity-100 group-hover:mr-3`}>{cta}</span>
          <span className="w-8 h-8 rounded-full bg-white text-[#F26522] flex items-center justify-center"><ArrowRight size={15} /></span>
        </span>
      </div>
      <h3 className="mt-3 text-lg font-medium">{p.title}</h3>
      <p className="text-sm text-gray-600">{p.loc} — {p.supply}</p>
    </a>
  )
}
