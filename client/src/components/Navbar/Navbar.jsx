import Searchbar from '../Searchbar' 
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import './Navbar.css'


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleToggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
    <Searchbar/>
    <nav className="navbars">
      <div className='logo' >
        <img src="logo.png" alt="logo"/>
        <p className="logo-text">MANHYIA NORTH LIVE</p>
      </div>
      <div className="menu-icon" onClick={handleToggleNavbar}>
        <IoMenu />
      </div>
      <div className={`nav-elements ${showNavbar ? 'active' : ''}`}>
        <Link className='elements' to="/" onClick={handleToggleNavbar}>Home</Link>
        <Link className='elements' to="/login" onClick={handleToggleNavbar}>Login</Link>
        <Link className='elements' to="/presidential" onClick={handleToggleNavbar}>Presidential</Link>
        <Link className='elements' to="/paliamentary" onClick={handleToggleNavbar}>Paliamentary</Link>
        <Link className='elements' to="/mission" onClick={handleToggleNavbar}>Mission</Link>
        <Link className='elements' to="/contact" onClick={handleToggleNavbar}>Contact</Link>
      </div>
    </nav>
    </>
  );
};


export default Navbar