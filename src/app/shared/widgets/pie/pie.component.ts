import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'pie',
        plotShadow: false
      },
      title: {
        text: 'Browser market shares January, 2015 to May, 2015'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: 'black'
            }
          }
        }
      },
      series: [{
        name: 'Brands',
        type: 'pie',
        data: [
          { name: 'Microsoft Internet Explorer', y: 56.33 },
          { name: 'Chrome', y: 24.03, sliced: true, selected: true },
          { name: 'Firefox', y: 10.38 },
          { name: 'Safari', y: 4.77 },
          { name: 'Opera', y: 0.91 },
          { name: 'Proprietary or Undetectable', y: 0.2 }
        ]
      }]
    };

    // Initialize the exporting module
    HC_exporting(Highcharts);

    // Ensure the chart resizes correctly
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }

}
