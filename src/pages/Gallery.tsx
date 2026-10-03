import { Band, PageHead } from '../components/Layout'
import { SafeImg } from '../components/ui'
import { GALLERY } from '../data/site'

export default function Gallery() {
  return (
    <>
      <PageHead title="Photo Gallery" sub="Take a visual tour of our warehouse, steel inventory, loading logistics, and supply operations." />
      <Band tone="gray">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GALLERY.map((g, i) => (
            <figure key={g}>
              {/* drop photos into /public/gallery/1.jpg … 6.jpg — tiles fall back gracefully until then */}
              <SafeImg src={`/gallery/${i + 1}.jpg`} alt={g} className="w-full aspect-[4/3] rounded-2xl" />
              <figcaption className="mt-2 text-sm text-gray-600">{g}</figcaption>
            </figure>
          ))}
        </div>
      </Band>
    </>
  )
}
