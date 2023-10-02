import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-html2pdf-02';
  res = "  <!DOCTYPE html>  <html lang=\"en\">  <head>      <meta charset=\"UTF-8\">      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">      <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">      <title>07</title>      <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN\" crossorigin=\"anonymous\">            <script src=\"https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.js\"></script>      <link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">      <script type=\"text/javascript\" src=\"https://www.gstatic.com/charts/loader.js\"></script>      <script type=\"text/javascript\">          google.charts.load('current', {'packages':['bar']});          google.charts.setOnLoadCallback(drawChart_1);          function drawChart_1() {            var data = google.visualization.arrayToDataTable([              ['Year', 'Sales', 'Expenses', 'Profit'],              ['2014', 1000, 400, 200],              ['2015', 1170, 460, 250],              ['2016', 660, 1120, 300],              ['2017', 1030, 540, 350]            ]);                var options = {              chart: {                title: 'Company Performance',                subtitle: 'Sales, Expenses, and Profit: 2014-2017',              },              bars: 'horizontal' // Required for Material Bar Charts.            };                var chart_1 = new google.charts.Bar(document.getElementById('barchart_material_1'));              chart_1.draw(data, google.charts.Bar.convertOptions(options));                    }      </script>  </head>  <body>      <div class=\"container d-flex justify-content-center mt-50 mb-50\">          <div class=\"row\">              <div class=\"col-md-12 text-right mb-3\">                  <button class=\"btn btn-primary\" id=\"download\"> download pdf</button>              </div>              <div class=\"col-md-12\">                  <div class=\"card\" id=\"invoice\">                      <div class=\"card-header bg-transparent header-elements-inline\">                          <h6 class=\"card-title text-primary\">Sale invoice</h6>                      </div>                      <div class=\"w3-container w3-center\">                          <p>The w3-container class is an important w3.CSS class.</p>                      </div>                                                                <div class=\"w3-cell-row\">                          <div class=\"w3-container w3-red w3-cell w3-center\" style=\"width: 50%;height: 50%;\">                              <h3>Friend request</h3>                                                          <div id=\"barchart_material_1\"></div>                              <h5>John Doe</h5>                                                  <button class=\"w3-button w3-green\">Accept</button>                              <button class=\"w3-button w3-red\">Decline</button>                                              </div>                                 </div>                      <script>                                                          window.onload = function () {                          document.getElementById(\"download\")                              .addEventListener(\"click\", () => {                                  const invoice = this.document.getElementById(\"invoice\");                                  console.log(invoice);                                  console.log(window);                                  var opt = {                                      margin: [10,0,10,0],                                      filename: 'myfile.pdf',                                      image: { type: 'jpeg', quality: 0.95 },                                      html2canvas: { scale: 1 },                                      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }                                  };                                  html2pdf().from(invoice).set(opt).save();                              })                      }                  </script>                                </body>              </html>    ";  
}