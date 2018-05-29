import { GoogleChartsBaseService } from './GoogleChartsBaseService';
import { Injectable } from '@angular/core';
import { PieChartConfig } from '../_models/PieChartConfig';

declare var google: any;

@Injectable()
export class GooglePieChartService extends GoogleChartsBaseService {

  constructor() { super(); }

  public BuildPieChart(elementId: String, data: any[], config: PieChartConfig) : void {
    var chartFunc = () => { return new google.visualization.PieChart(document.getElementById(elementId.toString())); };

    var options = {
      title: config.title,
      pieHole: config.pieHole,
      //width: config.width/4,
      //height: config.height/4,
    };

    this.buildChart(data, chartFunc, options);
  }
}
