import React from 'react'
import logo from '../img/logo.png'

export default props => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href=""><img src={logo} width="45" height="45" alt="logo"/></a>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="">Home
            <span className="sr-only">(current)</span>
          </a>
        </li>
      </ul>
      <div className="my-2 my-lg-0">
        qualquer outra coisa
      </div>
    </nav>
  </header>
)
