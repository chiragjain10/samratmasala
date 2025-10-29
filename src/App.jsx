import { useEffect, useRef, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home/Home'
import AboutPage from './Pages/About'
import ProductDetails from './Pages/Product/'
import './App.css'
import Contact from './Pages/Contact/Index'
import Whatsapp from './components/Common/Whatsapp'
import Terms from './components/Common/Terms'
import PageNotFound from './components/Common/PageNotFound'
import Preloader from './components/Common/Preloader'
import PopupForm from './components/Common/PopupForm'
import FAQ from './components/Common/FAQ'

function App() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)
  const [showPopup, setShowPopup] = useState(false)
  const loadingTimerRef = useRef(null)
  const triggerLoading = () => {
    if (loadingTimerRef.current) clearTimeout(loadingTimerRef.current)
    setIsLoading(true)
    loadingTimerRef.current = setTimeout(() => setIsLoading(false), 2000)
  }

  useEffect(() => {
    if (window.AOS) {
      try {
        window.AOS.init({
          once: true,
          duration: 700,
          offset: 80,
          easing: 'ease-out-cubic',
        })
        window.AOS.refreshHard()
      } catch (_) {
        // no-op
      }
    }
  }, [])

  // Scroll to top on route change and show preloader for at least 2s
  useEffect(() => {
    window.scrollTo(0, 0)
    triggerLoading()
  }, [location.pathname])

  // Show preloader until full window load, then open popup after 3s (once per refresh)
  useEffect(() => {
    let popupTimer

    const onLoaded = () => {
      popupTimer = setTimeout(() => setShowPopup(true), 3000)
    }

    if (document.readyState === 'complete') {
      onLoaded()
    } else {
      window.addEventListener('load', onLoaded, { once: true })
    }

    return () => {
      if (popupTimer) clearTimeout(popupTimer)
      window.removeEventListener('load', onLoaded)
    }
  }, [])

  useEffect(() => {
    return () => {
      if (loadingTimerRef.current) clearTimeout(loadingTimerRef.current)
    }
  }, [])

  return (
    <>
      <Preloader show={isLoading} text="Loading..." />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products/:productSlug" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Whatsapp />
      <Footer />
      <PopupForm open={showPopup} onClose={() => setShowPopup(false)} />
    </>
  )
}

export default App
