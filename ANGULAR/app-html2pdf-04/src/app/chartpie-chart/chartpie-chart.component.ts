import { Component, OnInit } from '@angular/core';
declare var google:any;

@Component({
  selector: 'app-chartpie-chart',
  templateUrl: './chartpie-chart.component.html',
  styleUrls: ['./chartpie-chart.component.scss']
})
export class ChartpieChartComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(this.drawChart);    
  }

  drawChart(){
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Mushrooms', 3],
      ['Onions', 1],
      ['Olives', 1], 
      ['Zucchini', 1],
      ['Pepperoni', 2]
    ]);

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, null);
  }

}
