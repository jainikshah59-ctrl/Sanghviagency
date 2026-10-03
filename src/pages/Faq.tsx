import { Band, CtaBand, PageHead } from '../components/Layout'
import { Accordion } from '../components/ui'
import { FAQ } from '../data/site'

export default function Faq() {
  return (
    <>
      <PageHead title="Frequently Asked Questions" sub="Everything you need to know about ordering steel from Sanghvi Agency." />
      <Band><div className="max-w-4xl"><Accordion items={FAQ} /></div></Band>
      <CtaBand title="Still Have Questions?" copy="Reach out directly." primary={['Contact Us', '/contact']} secondary={['Request Quote', '/request-quote']} />
    </>
  )
}
