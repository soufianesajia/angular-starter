import { Injectable } from '@angular/core';
import { GoogleChartsBaseService } from './GoogleChartsBaseService';
import { AreaChartConfig } from './../_models/AreaChartConfig';


declare var google: any;

@Injectable()
export class GoogleAreaChartService extends GoogleChartsBaseService {

  constructor() { super(); }


  public BuildAreaChart(elementId: String, data: any[], config: AreaChartConfig) : void {
    var chartFunc = () => { return new google.visualization.AreaChart(document.getElementById(<string>elementId)); };
    var options = {
      title : config.title,
      height : config.height,
      width : config.width,


    };

    this.buildChart(data, chartFunc, options);
  }
}
