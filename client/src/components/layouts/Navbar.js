import React from 'react'
import {useDispatch , useSelector} from  'react-redux'
import {NavLink } from 'react-router-dom'
import { Logout } from '../../reducers/auth'
export const Navbar = () => {

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.Auth.isAuthenticated)
    const AuthLink =(
      isAuthenticated &&
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" style={{ cursor:'pointer' }} aria-current="page" onClick={e=>dispatch(Logout())}>logout</a>
        </li>
      </ul>
    )
    const GestLink = (
      !isAuthenticated &&
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
          { GestLink } {AuthLink}
        </ul>
      </div>
    </div>
  </nav>
  )
}
