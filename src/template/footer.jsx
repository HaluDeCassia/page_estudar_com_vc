import React from 'react'
import own from '../img/Norberta-Professora.png'
import logo from '../img/logo.png'
import perfil from '../img/perfil.jpg'

export default props => (
  <footer>
    <div className="py-md-2 bg-footer col pr-0 d-none d-lg-block">
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
          <li className="nav-item nav-link text-light font-smaller">
            ©2018 Estudar.com.vc
          </li>
        </ul>
      </div>
    </div>
    <div className="col pr-0 d-sm-block d-md-block d-lg-none">
      <ul className="nav fixed-bottom shadow navbar-light bg-light justify-content-center">
        <li className="nav-item">
          <a className="nav-link text-secondary" href="" title="Home"><img className="rounded-circle" src={logo} width="25" height="25" alt="logo"/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="" title="Ver plano"><i className="fa fa-credit-card"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="" title="Fale conosco"><i className="fa fa-comments"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="" title="Sobre"><i className="fa fa-info-circle"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="" title="Perfil"><img className="rounded-circle img-thumbnail" src={perfil} width="30" height="30" alt="Foto de Perfil"/></a>
        </li>
      </ul>
    </div>
  </footer>
)
