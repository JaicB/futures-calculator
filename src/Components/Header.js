import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img10 from '../hamburger.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="header">
      <h1><Link to="/home">Futures Toolbox</Link></h1>
      <ul className="nav-bar">
        <li className="nav-item"><Link to="/home">Home</Link></li>
        <li className="nav-item"><Link to="/futuresdetails/Equity">Calculator</Link></li>
        <li className="nav-item"><Link to="/specs">Specs Table</Link></li>
      </ul>
      <img
        onClick={toggleMenu}
        src={img10}
        className='hamburger'
        alt='hamburger' />
      <ul className={`mobile-nav-bar ${isMenuOpen ? null : 'mobile-nav-hide'}`}>
        <li onClick={() => setIsMenuOpen(false)} className="mobile-nav-item"><Link to="/home">Home</Link></li>
        <li onClick={() => setIsMenuOpen(false)} className="mobile-nav-item"><Link to="/futuresdetails/Equity">Calculator</Link></li>
        <li onClick={() => setIsMenuOpen(false)} className="mobile-nav-item"><Link to="/specs">Specs Table</Link></li>
      </ul>
    </div>
  )
}

export default Header