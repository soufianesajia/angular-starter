import { Injectable } from '@angular/core';
import { GoogleChartsBaseService } from './GoogleChartsBaseService';
import { ComboChartConfig } from './../_models/ComboChartConfig';


declare var google: any;

@Injectable()
export class GoogleComboChartService extends GoogleChartsBaseService {

  constructor() { super(); }

  public BuildComboChart(elementId: String, data: any[], config: ComboChartConfig) : void {
    var chartFunc = () => { return new google.visualization.ComboChart(document.getElementById(<string>elementId)); };
    var options = {
      title : config.title,
      vAxis: {title: config.vAxis},
      hAxis: {title: config.hAxis},
      seriesType: 'bars',
      // width: config.width/4,
      // height: config.height/4,
    };

    this.buildChart(data, chartFunc, options);
  }
}
