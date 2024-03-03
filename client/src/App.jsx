import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './views/Home'
import Paliamentary from './views/Paliamentary'
import Presidential from './views/Presidential'
import Login from './views/Auth/Login'
import './App.css'
import Dashboard from './views/Home/Dashboard'

const App = () => {
  return (
    
    <BrowserRouter>
      
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/presidential" element={<Presidential />} />
          <Route path="/paliamentary" element={<Paliamentary />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
