
import { useState } from 'react';
import './App.css'
import { BarDemos } from './DemoChartJS/BarDemos';
import { ComponentsDemo } from './DemoChartJS/ComponentsDemo';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  const [archivo] = useState('datosJSON/ContentConfig.json')

  return (
    <>
      <div key="init" className="container-xxl">
        <ComponentsDemo archivo={archivo}/>
      </div>
    </>
  )
}

export default App


// <BarDemos />
// <ComponentsDemo/>
