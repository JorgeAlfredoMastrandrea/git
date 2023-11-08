import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div className="container-xxl ">

        <div className="row ">
          <div className="col-sm text-center text-bg-primary">
            Diagramas de barras
          </div>
        </div>

        <div className="row ">
          <div className="col-sm text-center text-bg-secondary">
            Barras verticales
          </div>
          <div className="col-sm text-center text-bg-success">
            Barras horizontales
          </div>
          <div className="col-sm text-center text-bg-danger">
            Barras apiladas
          </div>
          <div className="col-sm text-center text-bg-warning">
            Barras agrupadas
          </div>
        </div>
      </div>
    </>
  )
}

export default App
