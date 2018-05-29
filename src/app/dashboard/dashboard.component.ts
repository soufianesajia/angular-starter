
import { Component, HostListener, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { PieChartConfig } from './../_models/PieChartConfig';
import { ElementList } from '../_models/ElementList';
import { ElementLevel } from '../_models/ElementLevel';
import { ElementService } from "../_services/ElementService";



import { ComboChartConfig } from "../_models/ComboChartConfig";
import {ColumnChartConfig} from "../_models/ColumnChartConfig";
import {groupBy, mergeMap, toArray} from "rxjs/operators";
import {from} from "rxjs/observable/from";
import {packageChunkSort} from "@angular/cli/utilities/package-chunk-sort";
import {CalendarChartConfig} from "../_models/CalendarChartConfig";
import {AreaChartComponent} from "./charts/areaChart.component";
import {AreaChartConfig} from "../_models/AreaChartConfig";

declare var google: any;

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  title = 'Reusable charts sample';

  showFilters : boolean = true;

  data1: any[];
  config1: ComboChartConfig;
  elementId1: String;

  data2: any[];
  config2: ColumnChartConfig;
  elementId2: String;

  data3: any[];
  config3: PieChartConfig;
  elementId3: String;

  data4: any[];
  config4: CalendarChartConfig;
  elementId4: String;

  data5: any[];
  config5: AreaChartConfig;
  elementId5: String;

  elementLevel : ElementLevel[];
  elementList : ElementList[];

  selectedLevel: string;
  selectedElement: Int8Array;

  startDate: Date;
  endDate: Date;

  minStartDate = new Date(Date.now() - 4 * 365 * 24 * 60 * 60 * 1000);
  maxStartDate = new Date();


  minEndDate = new Date(Date.now() - 4 * 365 * 24 * 60 * 60 * 1000);
  maxEndDate = new Date();

  startTime ="00:00";
  endTime="00:00";

  elementService: ElementService;

  showProgressBar : boolean = false;

  windowsWidth:number;
  windowsHeight:number;

  constructor(private _elementService: ElementService , private http: HttpClient) {
    this.elementLevel = this._elementService.getElementLevel();
    this.elementList = this._elementService.getElementList();
  }

  ngOnInit(): void {}

  @HostListener('window:resize', ['$event']) resize(e) {
    this.windowsWidth = e.target.innerWidth ;
    this.windowsHeight = e.target.innerHeight;
    this.changeChartsConfig();
  }

  changeChartsConfig() {
    if(this.config1){
      var config1Bis = this.config1;
      config1Bis.height = this.windowsHeight;
      config1Bis.width = this.windowsWidth;
      this.config1 = config1Bis;
    }
    if(this.config2){
      var config2Bis = this.config2;
      config2Bis.height = this.windowsHeight;
      config2Bis.width = this.windowsWidth;
      this.config2 = config2Bis;
    }
  }

  onSelect(level) {
    console.log ('User selected ' + level);
    this.elementList = this._elementService.getElementList().filter( function(o) { return o.level == level});
  }

  onFormSubmit(formValue: any) {

    this.showProgressBar = true;

    alert(JSON.stringify(formValue));

    //params
    var elementLevel = 'elementLevel='+formValue.elementLevel;
    var elementList = 'elementList='+formValue.elementList;
    var startDate = 'startDate='+formValue.startDate.toDateString();
    var endDate = 'endDate='+formValue.endDate.toDateString();
    var startTime='startTime='+formValue.startTime;
    var endTime='endTime='+formValue.endTime;
    var and = '&';

    var params = elementLevel+and+elementList+and+startDate+and+endDate+and+startTime+and+endTime;

    var url = 'http://localhost:8090/consumptionSupervision?'+params;

    console.log(url);

    this.http.get(url).subscribe((res : any) => {

      console.log(res.length);
      console.log(res);

      this.drawTransctionByMonth(res.transactionByMonth);
      this.drawTransctionByStationName(res.transactionByStationName);
      this.drawTransctionByPlugType(res.transactionByPlugtype);
      this.drawtransactionByDay(res.transactionByDay);

      this.showProgressBar = false;

    });


  }

  drawTransctionByMonth(data : any[]){

    var result = data.map(function (obj) {
      return [obj['y'].toString()+'/'+obj['m'].toString(),obj['transactions_number']];
    });

    result.unshift(['Month', 'Trancations Number']);

    this.data1 = result;
    this.config1 = new ComboChartConfig("Transaction by month","Transactions","Month",this.windowsWidth,this.windowsHeight);
    this.elementId1 = 'myPieChart1';
  }

  drawTransctionByStationName(data : any[]){

    var result = data.map(function (obj) {
      return [obj['station_name'].toString(),obj['transactions_number']];
    });

    result.unshift(['station_name', 'Transactions number']);

    this.data2 = result;
    this.config2 = new ColumnChartConfig('Transactions by charger',"Transactions","Stations",
      "vAxis","hAxis", this.windowsWidth,this.windowsHeight);
    this.elementId2 = 'myPieChart2';
  }

   drawTransctionByPlugType(data : any[]){

     var result = data.map(function (obj) {
       return [ obj['plug_type'],obj['transactions_number']];
     });

    result.unshift(['plug_type','Transactions number']);
    this.data3 = result;
    this.config3 = new PieChartConfig('Transaction by plug Type', 0.4,this.windowsWidth,this.windowsHeight);
    this.elementId3 = 'myPieChart3';
  }

  drawtransactionByDay(data : any[]){

    var result = data.map(function (obj) {
      return [ new Date (obj['y'],obj['m']-1,obj['d']),obj['transactions_number']];
    });

    result.unshift(['Date','Transactions number']);
    this.data4 = result;
    this.config4 = new CalendarChartConfig('Transaction by day', this.windowsWidth,this.windowsHeight);
    this.elementId4 = 'myPieChart4';
  }

}
