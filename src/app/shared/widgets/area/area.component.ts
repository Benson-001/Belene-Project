import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrl: './area.component.css'
})
export class AreaComponent implements OnInit{

  chartOptions!: {};

  Highcharts: typeof Highcharts = Highcharts;
 

  title = 'HighCharts Example in Angular';

  constructor () {}

 
  ngOnInit () {
     this.chartOptions = {
      chart: {
        type: 'line'
      },
  
      xAxis: {    // the 'x' axis or 'category' axis.
          categories: ['jan', 'feb', 'mar', 'apr', 'may']
      },
  
      title: {
          text: 'Collaterals',
          backgroundColor: '#FCFFC5',
      },
  
      credits: {
        enabled: false,
      },
  
      exporting: {
        enabled: true,
      },
  
      series: [
        { "name": "Vehicle", "data": [52, 17, 22, 19, 51] },
        { "name": "Fixed Deposit", "data": [32, 13, 29, 20, 12] },
        { "name": "Real Estate", "data": [6, 21, 48, 23, 49] },
        { "name": "Others", "data": [10, 36, 52, 23, 49] }
      ],
      
      colors: ['crimson','#000', 'rgb(102,203,22)', '#6EC7ED'],
  
      tooltip: {
         
      }
    }

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
}