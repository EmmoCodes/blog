import React from 'react'
import '../../App.scss'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink className="link" to="/adminpanel">
        Admin Panel
      </NavLink>
    </nav>
  )
}

export default Navbar
