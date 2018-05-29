
import { Injectable } from '@angular/core';
import { GoogleChartsBaseService } from './GoogleChartsBaseService';
import { ColumnChartConfig } from './../_models/ColumnChartConfig';


declare var google: any;

@Injectable()
export class GoogleColumnChartService extends GoogleChartsBaseService {

  constructor() { super(); }


  public BuildColomnChart(elementId: String, data: any[], config: ColumnChartConfig) : void {
    var chartFunc = () => { return new google.visualization.ComboChart(document.getElementById(<string>elementId)); };
    var options = {
      title : config.title,
      vAxis: {title: config.vAxisTitle},
      hAxis: {title: config.hAxisTitle},
      seriesType: 'bars'
    };

    this.buildChart(data, chartFunc, options);
  }
}
