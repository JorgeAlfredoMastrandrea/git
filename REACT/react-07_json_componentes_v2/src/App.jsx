
import { useState } from 'react';
import './App.css'
import { BarDemos } from './DemoChartJS/BarDemos';
import { ComponentsDemo } from './DemoChartJS/ComponentsDemo';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  const [archivo] = useState('datosJSON/Layout_3.json')

  return (
    <>
      <div
        key="init"
        className="container-xxl p-0"
        style={{}}>
        <ComponentsDemo archivo={archivo} />
      </div >
    </>
  )
}



export default App


// <BarDemos />
// <ComponentsDemo/>
// 'datosJSON/ContentConfig.json'
// 'datosJSON/Layout_1.json'

/*
alineado y centrado el contenido en el medio : className="container d-flex align-items-center justify-content-center"
*/

/*
 <div
        key="init"
        className="container d-flex align-items-center justify-content-center"
        style={{
          top: '50%',
          left: '50%',
          width: '60em',
          height: '30em',
          transform: 'translate(-50%, -50%)',
          border: '1px solid #666',
          backgroundColor: "#b9faac",
          position: 'fixed',
        }}>
        <ComponentsDemo archivo={archivo} />
      </div >


*/