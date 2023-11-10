
import { useState } from 'react';
import './App.css'
import { BarDemos } from './DemoChartJS/BarDemos';
import { ComponentsDemo } from './DemoChartJS/ComponentsDemo';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  const [archivo] = useState('datosJSON/Layout_1.json')

  return (
    <>
      <div key="init" className="container d-flex align-items-center justify-content-center">
        <ComponentsDemo archivo={archivo} />
      </div>
    </>
  )
}

export default App


// <BarDemos />
// <ComponentsDemo/>
// 'datosJSON/ContentConfig.json'
