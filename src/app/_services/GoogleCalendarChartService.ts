import { Injectable } from '@angular/core';
import { GoogleChartsBaseService } from './GoogleChartsBaseService';
import { CalendarChartConfig } from './../_models/CalendarChartConfig';


declare var google: any;

@Injectable()
export class GoogleCalendarChartService extends GoogleChartsBaseService {

  constructor() { super(); }


  public BuildCalendarChart(elementId: String, data: any[], config: CalendarChartConfig) : void {
    var chartFunc = () => { return new google.visualization.Calendar(document.getElementById(<string>elementId)); };
    var options = {
      title : config.title,
      height : config.height/4,
      width : config.width/4,
      calendar: { cellSize: 8, dayOfWeekLabel : 'DLMMJVS' },

    };

    this.buildChart(data, chartFunc, options);
  }
}
