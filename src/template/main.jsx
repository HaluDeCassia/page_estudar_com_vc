import React from 'react'
import Dash from '../dash/dash.jsx'
import own from '../img/dashboard-norb.png'

export default props => (
  <main className="pt-3 mt-md-5 pt-md-5 mb-4 container">
    <Dash />
    <div className="wow jackInTheBox text-center mb-5 pb-3">
      <img className="img-fluid mt-1" src={own} alt="Norb"/>
    </div>
  </main>
)
