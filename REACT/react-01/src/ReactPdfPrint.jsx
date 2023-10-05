// react google charts
// npm install --save react-google-charts
// https://www.react-google-charts.com/

// react bootstrap
// npm install react-bootstrap bootstrap
// https://react-bootstrap.netlify.app/docs/getting-started/introduction

// react-to-pdf-printing
// npm install react-to-print
// https://www.npmjs.com/package/react-to-print
// https://github.com/gregnb/react-to-print
// https://medium.com/@massoud-sharifi/reacttoprint-8f9d35b3e2d7

/*
Can react-to-print be used to download a PDF without using the Print Preview window?
No. We aren't able to print a PDF as we lose control once the print preview window opens. 
However, it should be very easy to use react-to-print to take the information you need an pass it to a library that can generate a PDF.
*/


import React, { useState , useRef } from 'react'
import { Chart } from 'react-google-charts';
import { useReactToPrint } from 'react-to-print';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import "../src/paginaSetUp.css";


export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
};

export const ReactPdfPrint = () => {  
  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,    

    documentTitle:'Gráfico 1',
    //onAfterPrint: ()=> alert('Se imprimió ')    
    //onBeforePrint: () => console.log(componentRef.current),
    //onAfterPrint: ()=> alert('Se imprimió ')
  });  

  return (
    // ref = { componentRef } 
    <>           
      <div ref = { componentRef } class="container-fluid justify-content-center mt-3" className="print-preview">               
        <div class="row">
          <div class="col bg-success"></div>
          <div class="col-10 bg-warning">
            <div className="cabecera"></div> 
            <h1 className='text-center my-3 border p-2'>Gráfico</h1>
            <p style={{textAlign:"justify"}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Molestias, aperiam, nihil blanditiis nobis ad modi delectus nemo vel enim dignissimos in. 
              Itaque quos nisi autem error nemo pariatur provident dolore?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Molestias, aperiam, nihil blanditiis nobis ad modi delectus nemo vel enim dignissimos in. 
                         
            </p>
            <div class=".img-fluid. max-width: 100%; ">
              <div class="d-flex justify-content-center align-items-center">
                <Chart
                  chartType="Bar"
                  width="148mm"
                  height="400px"
                  data={data}
                  options={options}
                />
              </div>
            </div> 
          </div>
          <div class="col bg-success"></div>
        </div>  
        
        <p style={{textAlign:"justify"}}>
            Andres es un mentiroso que no le importa el trabajo Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Molestias, aperiam, nihil blanditiis nobis ad modi delectus nemo vel enim dignissimos in. 
            Itaque quos nisi autem error nemo pariatur provident dolore?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Molestias, aperiam, nihil blanditiis nobis ad modi delectus nemo vel enim dignissimos in. 
            Itaque quos nisi autem error nemo pariatur provident dolore?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Molestias, aperiam, nihil blanditiis nobis ad modi delectus nemo vel enim dignissimos in. 
            Itaque quos nisi autem error nemo pariatur provident dolore?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Molestias, aperiam, nihil blanditiis nobis ad modi delectus nemo vel enim dignissimos in. 
                       
          </p>

        <div className="page-break"></div>      

        <div class="row">
          <div className="cabecera"></div>        
          <h1 className='text-center my-3 border p-2'>Gráfico</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Molestias, aperiam, nihil blanditiis nobis ad modi delectus nemo vel enim dignissimos in. 
            Itaque quos nisi autem error nemo pariatur provident dolore?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Molestias, aperiam, nihil blanditiis nobis ad modi delectus nemo vel enim dignissimos in. 
            Itaque quos nisi autem error nemo pariatur provident dolore?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Molestias, aperiam, nihil blanditiis nobis ad modi delectus nemo vel enim dignissimos in. 
            Itaque quos nisi autem error nemo pariatur provident dolore?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Molestias, aperiam, nihil blanditiis nobis ad modi delectus nemo vel enim dignissimos in. 
            Itaque quos nisi autem error nemo pariatur provident dolore?
          </p>
          <div style={{width:"50%"}}>
            <div class="center-block">
              <Chart
                chartType="Bar"
                width="100%"
                height="400px"
                data={data}
                options={options}
              />
              </div>
          </div>
        </div>

        <div className="page-break"></div>      

        <div class="row">
          <div className="cabecera"></div>        
          <h1 className='text-center my-3 border p-2'>Gráfico</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Molestias, aperiam, nihil blanditiis nobis ad modi delectus nemo vel enim dignissimos in. 
            Itaque quos nisi autem error nemo pariatur provident dolore?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Molestias, aperiam, nihil blanditiis nobis ad modi delectus nemo vel enim dignissimos in. 
            Itaque quos nisi autem error nemo pariatur provident dolore?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Molestias, aperiam, nihil blanditiis nobis ad modi delectus nemo vel enim dignissimos in. 
            Itaque quos nisi autem error nemo pariatur provident dolore?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Molestias, aperiam, nihil blanditiis nobis ad modi delectus nemo vel enim dignissimos in. 
            Itaque quos nisi autem error nemo pariatur provident dolore?
          </p>
          <div style={{width:"50%"}} class="col-xs-12">
            <div class="center-block">
              <Chart
                chartType="Bar"
                width="100%"
                height="400px"
                data={data}
                options={options}
              />
              </div>
          </div>
        </div>    


      </div>   
      
      <div class="container d-flex justify-content-center mt-50 mb-50">        
        <div class="row">
          <Button class="btn btn-danger" onClick={handlePrint}>Print</Button>
        </div>
      </div>      
    </>
  )
}