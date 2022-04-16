import React from 'react'
import {NavLink } from 'react-router-dom'
export const Navbar = () => {

    const AuthLink = ()=>(
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/logout">logout</NavLink>
        </li>
      </ul>
    )
    const GestLink = (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={({ isActive }) => isActive? "nav-link  active": 'nav-link '} aria-current="page" to="/signin">login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive }) => isActive? "nav-link  active": 'nav-link '}  to="/signup">register</NavLink>
        </li>
      </ul>
    )

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className={({ isActive }) => isActive? "nav-link  active": 'nav-link '} aria-current="page" to="/">Home</NavLink>
          </li>
          { GestLink }
        </ul>
      </div>
    </div>
  </nav>
  )
}
