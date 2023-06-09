import React from 'react'
import { Outlet,Link } from 'react-router-dom'

export const Navbar = () => {
  return (<>


    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand text-white">Navbar</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-white" to="/"  action>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/About-Us" >About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/Services" >Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="" tag='a' >Contact Us</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
      </>
  )
}
