import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <h1>Futures Toolbox</h1>
      <ul className="nav-bar">
        <li className="nav-item"><Link to="/home">Home</Link></li>
        <li className="nav-item"><Link to="/futuresdetails/Equity">Calculator</Link></li>
        <li className="nav-item"><Link to="/specs">Specs Table</Link></li>
      </ul>
    </div>
  )
}

export default Header