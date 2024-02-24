import {Link} from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="search-section">
        <input type="text" className="searchbar" />
        <FaSearch className='search-icon' />
      </div>

      <nav>
        <Link to='/'>Logo</Link>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/presidential'>Presidential Result</Link></li>
          <li><Link to='/paliamentary'>Paliamentary Result</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
