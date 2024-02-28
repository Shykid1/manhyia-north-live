import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Appbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './views/Home'
import Paliamentary from './views/Paliamentary'
import Presidential from './views/Presidential'
import Login from './views/Auth/Login'
import Mission from './views/Mission'
import Contact from './views/Contact'
import './App.css'
import Dashboard from './views/Home/Dashboard'

const App = () => {
  return (
    
    <BrowserRouter>
    <Appbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="paliamentary" element={<Paliamentary />} />
          <Route path="presidential" element={<Presidential />} />
          <Route path="/login" element={<Login />} />
          <Route path="mission" element={<Mission />} />
          <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
