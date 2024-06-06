import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  @Input()
  label!: string;
  @Input()
  total!: string;
  @Input()
  percentage!: string;

  Highcharts = Highcharts;
  chartOptions = {};

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor: '#FCFFC5',
        borderwidth: 0,
        margin: [2, 2, 2, 2],
        height:60,
      },

      title: {
        text: null
    },
    tooltip: {
          
      split: true,
      outside: true,
  },
  legend:{
    enabled: false,
  },
  credits: {
    enabled: false,
  },

  exporting: {
    enabled: false,
  },
  xAxis: {    // the 'x' axis or 'category' axis.
    categories: ['jan', 'feb', 'mar', 'apr', 'may'],
    lables: {
      enabled: false,
    },
    title: {
      text: null
  },
  startOnTick: false,
endOnTick: false,
tickOptions: [],
},

yAxis: {    // the 'x' axis or 'category' axis.
  categories: ['jan', 'feb', 'mar', 'apr', 'may'],
  lables: {
    enabled: false,
  },
  title: {
    text: null
},
startOnTick: false,
endOnTick: false,
tickOptions: [],
},
  series: [{
    data:[71, 78, 39, 66]
  }],
                
      //colors: ['crimson','#000', 'rgb(102,203,22)', '#6EC7ED'],
       
    }

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
    
  }

}
