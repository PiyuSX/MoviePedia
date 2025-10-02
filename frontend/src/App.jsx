import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Browse from './pages/Browse'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative min-h-screen'>
        <Toaster />
        <Navbar />
        <Routes>
           <Route path='/' element={<Home />} />
            <Route path='/auth/*' element={<Auth />} />
            <Route path='/browse' element={<Browse />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App