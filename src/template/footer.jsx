import React from 'react'
import own from '../img/Norberta-Professora.png'

export default props => (
  <footer className="bg-footer px-md-3 ">
    <div className="col ">
      <div className="col-md-1 d-lg-none">
        <img className="img-fluid mt-1" src={own} alt="logo"/>
      </div>
      <div className="col-md-1 float-right d-none d-md-block">
        <img className="img-fluid mt-1" src={own} alt="logo"/>
      </div>
      <div className="col">
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link text-light" href="">Termos de uso</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="">Política de Privacidade</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="">Blog</a>
          </li>
        </ul>
      </div>
      <div className="col">
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link text-light font-smaller" href="">©2018 Estudar.com.vc</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
)
