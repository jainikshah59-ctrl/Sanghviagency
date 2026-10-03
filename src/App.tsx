import { Route, Routes } from 'react-router-dom'
import { Layout, PageHead } from './components/Layout'
import { Btn } from './components/ui'
import Home from './pages/Home'
import About from './pages/About'
import { Products, ProductDetail } from './pages/Products'
import { Brands, BrandDetail, Category } from './pages/Brands'
import Projects from './pages/Projects'
import Gallery from './pages/Gallery'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import RequestQuote from './pages/RequestQuote'
import Legal from './pages/Legal'
import { Cat, CATS } from './data/brands'

const NotFound = () => <PageHead title="Page not found" sub="The page you’re looking for doesn’t exist."><Btn to="/">Back to Home</Btn></PageHead>

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:slug" element={<ProductDetail />} />
        <Route path="brands" element={<Brands />} />
        {(Object.keys(CATS) as Cat[]).map((c) => [
          <Route key={c} path={CATS[c].base.slice(1)} element={<Category cat={c} />} />,
          <Route key={c + 'd'} path={`${CATS[c].base.slice(1)}/:slug`} element={<BrandDetail cat={c} />} />,
        ])}
        <Route path="projects" element={<Projects />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="request-quote" element={<RequestQuote />} />
        <Route path="privacy-policy" element={<Legal kind="privacy" />} />
        <Route path="terms-and-conditions" element={<Legal kind="terms" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
