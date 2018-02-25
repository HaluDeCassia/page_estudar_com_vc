import React from 'react'
import logo from '../img/logo.png'
import perfil from '../img/perfil.jpg'

export default props => (
  <header className="d-none d-lg-block">
    <nav className="fixed-top shadow rounded-0 navbar navbar-expand-lg navbar-light bg-light ">
      <a className="navbar-brand" href="">
        <img src={logo} width="45" height="45" alt="logo"/>
      </a>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item d-none d-sm-block">
          <a className="nav-link" href=""><i className="fa fa-credit-card"></i> Ver Planos
          </a>
        </li>
        <li className="nav-item text-left lineh-1 d-sm-none">
          <a className="nav-link mt-less" href="">
            <strong>Halú</strong> <br />
            <span className="absolute font-smaller">FGV</span>
          </a>
        </li>
      </ul>
      <ul className="navbar-nav my-2 my-lg-0 ">
        <li className="nav-item d-sm-none">
          <a className="nav-link" href=""><i className="fa fa-credit-card"></i> Ver Planos
          </a>
        </li>
          <li className="nav-item d-none d-sm-block">
            <a className="nav-link" href=""><i className="fa fa-comments"></i>  Fale Conosco
            </a>
          </li>
          <li className="nav-item d-none d-sm-block">
            <a className="nav-link" href="">
              <img className="img-fluid img-thumbnail rounded-circle " src={perfil} width="35" height="35" alt="logo"/>
            </a>
          </li>
          <li className="nav-item lineh-1 text-left d-none d-sm-block">
            <a className="nav-link" href="">
              <strong>Halú</strong> <br />
              <span className="absolute font-smaller">FGV</span>
            </a>
          </li>
        </ul>
    </nav>
  </header>
)
