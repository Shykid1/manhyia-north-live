import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import './Navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className='logo' >
          <img src="logo.png" alt="logo"/>
          <p className="logo-text">MANHYIA NORTH LIVE</p>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <IoMenu />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/presidential">Presidential</Link>
            </li>
            <li>
              <Link to="/paliamentary">Paliamentary</Link>
            </li>
            <li>
              <Link to="/mission">Mission</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar