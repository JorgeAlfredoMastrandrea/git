
import './App.css'
import { BarDemos } from './DemoChartJS/BarDemos';
import { ComponentsDemo } from './DemoChartJS/ComponentsDemo';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
      <div key="init" className="container-xxl">
        <ComponentsDemo/>
      </div>
    </>
  )
}

export default App


// <BarDemos />
