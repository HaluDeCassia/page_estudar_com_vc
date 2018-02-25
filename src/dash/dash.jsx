import React from 'react'

export default props => (
  <div className="row">
    <div className="col-sm-12">
      <h1 className="font-bigger text-secondary font-weight-bold">Matérias personalizadas FGV</h1>
    </div>
    <div className="col">
      <div className="row text-center">
        <div className="col-6 col-md-3 my-4 ">
          <a href="">
            <div className="bg-badge dash-circle notify-badge font-weight-bold p-2 text-light mt-3">118</div>
            <div className="col btn circle-hover bg-person dash-circle text-light font-icon">
              <i class="fas fa-chart-area"></i>
            </div>
            <p className="text-secondary font-big">Cálculo 1</p>
          </a>
        </div>
        <div className="col-6 col-md-3 my-4 ">
          <a href="">
            <div className="bg-badge dash-circle notify-badge font-weight-bold p-2 text-light mt-3">236</div>
            <div className="col btn circle-hover bg-person dash-circle text-light font-icon">
              <i class="fas fa-calculator"></i>
            </div>
            <p className="text-secondary font-big">Contabilidade</p>
          </a>
        </div>
        <div className="col-6 col-md-3 my-4 ">
          <a href="">
            <div className="bg-badge dash-circle notify-badge font-weight-bold p-2 text-light mt-3">47</div>
            <div className="col btn circle-hover bg-person dash-circle text-light font-icon">
              <i class="fas fa-pen-square"></i>
            </div>
            <p className="text-secondary font-big">Controladoria</p>
          </a>
        </div>
        <div className="col-6 col-md-3 my-4 ">
          <a href="">
            <div className="bg-badge dash-circle notify-badge font-weight-bold p-2 text-light mt-3">113</div>
            <div className="col btn circle-hover bg-person dash-circle text-light font-icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <p className="text-secondary font-big">Estatística 1</p>
          </a>
        </div>
        <div className="col-6 col-md-3 my-4 ">
          <a href="">
            <div className="bg-badge dash-circle notify-badge font-weight-bold p-2 text-light mt-3">139</div>
            <div className="col btn circle-hover bg-person dash-circle text-light font-icon">
              <i class="fas fa-money-bill-alt"></i>
            </div>
            <p className="text-secondary font-big">Finanças</p>
          </a>
        </div>
        <div className="col-6 col-md-3 my-4 ">
          <a href="">
            <div className="bg-badge dash-circle notify-badge font-weight-bold p-2 text-light mt-3">117</div>
            <div className="col btn circle-hover bg-person dash-circle text-light font-icon">
              <i class="fas fa-globe"></i>
            </div>
            <p className="text-secondary text-truncate font-big">Macroeconomia (Bernanke)</p>
          </a>
        </div>
      </div>
    </div>
  </div>
)
