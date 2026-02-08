import { Route, Routes, useLocation } from 'react-router'
import './App.css'
import MainLayout from './layouts/main-layout'
import Home from './pages/home/home'
import NotFound from './pages/not-found'
import Contact from './pages/contact/contact'
import { AnimatePresence } from 'framer-motion'
import ScrollToTop from './components/scroll-to-top'
import About from './pages/about/about'
import Courses from './pages/courses/courses'
import CourseProvider from './contexts/CourseProvider'
import Downloads from './pages/downloads/downloads'


function App() {
  const location = useLocation()

  return (
    <CourseProvider>
      <ScrollToTop />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>

          <Route element={<MainLayout />}>
            <Route path="" element={<Home />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/downloads" element={<Downloads />} />

          </Route>

          <Route path="*" element={<NotFound />} />

        </Routes>
      </AnimatePresence>

    </CourseProvider>

  )
}

export default App
