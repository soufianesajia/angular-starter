import {
  Component,
  OnInit,
  ElementRef, ViewChild, AfterViewInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Chart } from 'chart.js';

import { NgxPermissionsService } from 'ngx-permissions';

//import { ChartModule } from 'angular2-highcharts';

@Component({
  selector: 'about',
  styles: [``],
  templateUrl: './about.component.html'
})

/*
*
    <h1>About</h1>
    <div>
      For hot module reloading run
      <pre>npm run start:hmr</pre>
    </div>
    <div>
      <h3>
        patrick@tipe.io
      </h3>
    </div>
    <pre>this.localState = {{ localState | json }}</pre>
* */

export class AboutComponent implements OnInit,AfterViewInit {
  //canvas: any;
  //ctx: any;

  options: Object;

  ngAfterViewInit() {

    var ctx = document.getElementById("myChart");
    if(ctx){
      let myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ["New", "In Progress", "On Hold"],
          datasets: [{
            label: '# of Votes',
            data: [1,2,3],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: false,
          display:true
        }
      });
    }



    var ctx2 = document.getElementById("myChart2");
    if(ctx2){
      var myChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true
              }
            }]
          }
        }
      });
    }


  var line_ChartData = [
      ['Year', 'Sales', 'Expenses'],
      ['2004', 1000, 400],
      ['2005', 1170, 460],
      ['2006', 660, 1120],
      ['2007', 1030, 540]];
    var bubble_ChartData = [
      ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
      ['CAN', 80.66, 1.67, 'North America', 33739900],
      ['DEU', 79.84, 1.36, 'Europe', 81902307],
      ['DNK', 78.6, 1.84, 'Europe', 5523095],
      ['EGY', 72.73, 2.78, 'Middle East', 79716203],
      ['GBR', 80.05, 2, 'Europe', 61801570],
      ['IRN', 72.49, 1.7, 'Middle East', 73137148],
      ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
      ['ISR', 81.55, 2.96, 'Middle East', 7485600],
      ['RUS', 68.6, 1.54, 'Europe', 141850000],
      ['USA', 78.09, 2.05, 'North America', 307007000]];
    var scatter_ChartData = [
      ['Date', 'Sales Percentage'],
      [new Date(2016, 3, 22), 78],
      [new Date(2016, 3, 21, 9, 30, 2), 88],
      [new Date(2016, 3, 20), 67],
      [new Date(2016, 3, 19, 8, 34, 7), 98],
      [new Date(2016, 3, 18, 15, 34, 7), 95],
      [new Date(2016, 3, 16, 7, 30, 45), 89],
      [new Date(2016, 3, 16, 15, 40, 35), 68]
    ];
    var candle_ChartData = [
      ['Day', 'Low', 'Opening value', 'Closing value', 'High'],
      ['Mon', 28, 28, 38, 38],
      ['Tue', 38, 38, 55, 55],
      ['Wed', 55, 55, 77, 77],
      ['Thu', 77, 77, 66, 66],
      ['Fri', 66, 66, 22, 22]
    ];
    var pie_ChartData = [
      ['Task', 'Hours per Day'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7]];
    var bar_ChartData = [
      ['City', '2010 Population', '2000 Population'],
      ['New York City, NY', 8175000, 8008000],
      ['Los Angeles, CA', 3792000, 3694000],
      ['Chicago, IL', 2695000, 2896000],
      ['Houston, TX', 2099000, 1953000],
      ['Philadelphia, PA', 1526000, 1517000]];
    var map_ChartData = [
      ['Country', 'Popularity'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700]
    ];
    var org_ChartData = [
      ['Name', 'Manager', 'ToolTip'],
      [{ v: 'Mike', f: 'Mike<div style="color:red; font-style:italic">President</div>' },
        '', 'The President'],
      [{ v: 'Jim', f: 'Jim<div style="color:red; font-style:italic">Vice President</div>' },
        'Mike', 'VP'],
      ['Alice', 'Mike', ''],
      ['Bob', 'Jim', 'Bob Sponge'],
      ['Carol', 'Bob', '']
    ];
    var line_ChartOptions = {
      title: 'Company Performance',
      curveType: 'function',
      legend: {
        position: 'bottom'
      }
    };
    var bubble_ChartOptions = {
      title: 'Correlation between life expectancy, fertility rate ' +
      'and population of some world countries (2010)',
      hAxis: { title: 'Life Expectancy' },
      vAxis: { title: 'Fertility Rate' },
      bubble: { textStyle: { fontSize: 11 } }

    };
    var candle_ChartOptions = {
      legend: 'none',
      bar: { groupWidth: '100%' }, // Remove space between bars.
      candlestick: {
        fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
        risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
      }
    };
    var scatter_ChartOptions = {
      legend: {
        position: 'bottom'
      },
      title: 'Company Sales Percentage'
    };
    var bar_ChartOptions = {
      title: 'Population of Largest U.S. Cities',
      chartArea: { width: '50%' },
      hAxis: {
        title: 'Total Population',
        minValue: 0,
        textStyle: {
          bold: true,
          fontSize: 12,
          color: '#4d4d4d'
        },
        titleTextStyle: {
          bold: true,
          fontSize: 18,
          color: '#4d4d4d'
        }
      },
      vAxis: {
        title: 'City',
        textStyle: {
          fontSize: 14,
          bold: true,
          color: '#848484'
        },
        titleTextStyle: {
          fontSize: 14,
          bold: true,
          color: '#848484'
        }
      }
    };
    var pie_ChartOptions = {
      title: 'My Daily Activities',
      width: 900,
      height: 500
    };
    var gauge_ChartData = [
      ['Label', 'Value'],
      ['Systolic', 120],
      ['Diastolic', 80]];
    var gauge_ChartOptions = {
      width: 400, height: 120,
      redFrom: 90, redTo: 100,
      yellowFrom: 75, yellowTo: 90,
      minorTicks: 5
    };
    var area_ChartData = [
      ['Year', 'Sales', 'Expenses'],
      ['2013', 1000, 400],
      ['2014', 1170, 460],
      ['2015', 660, 1120],
      ['2016', 1030, 540]
    ];

    var area_ChartOptions = {
      title: 'Company Performance',
      hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
      vAxis: { minValue: 0 }
    };
    var map_ChartOptions = {};
    var org_ChartOptions = {
      allowHtml: true
    };


  }

  public localState: any;

  constructor(
    public route: ActivatedRoute,
    private permissionsService: NgxPermissionsService,
  ) {}

  public ngOnInit() {

    console.log('hello `About` component');




    this.options = {
      title : { text : 'simple chart' },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
    };

    // this.route
    //   .data
    //   .subscribe((data: any) => {
    //     /**
    //      * Your resolved data from route.
    //      */
    //     this.localState = data.yourData;
    //   });

    // const perm = ["sod-admin",
    //   "passive", "Admin",
    //   "StdUser", "stat"];
    //
    // this.permissionsService.loadPermissions(perm);


    /**
     * static data that is bundled
     * var mockData = require('assets/mock-data/mock-data.json');
     * console.log('mockData', mockData);
     * if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
     */
    //this.asyncDataWithWebpack();





  }
  private asyncDataWithWebpack() {
    /**
     * you can also async load mock data with 'es6-promise-loader'
     * you would do this if you don't want the mock-data bundled
     * remember that 'es6-promise-loader' is a promise
     */
    setTimeout(() => {

      System.import('../../assets/mock-data/mock-data.json')
        .then((json) => {
          console.log('async mockData', json);
          this.localState = json;
        });

    });
  }



}
