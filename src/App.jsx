import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portrait from './pages/Portrait'
import Videography from './pages/Videography'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portrait" element={<Portrait />} />
        <Route path="/videography" element={<Videography />} />
      </Routes>
      <Footer />
    </>
  )
}
