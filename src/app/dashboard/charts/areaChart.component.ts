import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import { CalendarChartConfig } from './../../_models/CalendarChartConfig';
import { GoogleCalendarChartService } from './../../_services/GoogleCalendarChartService';

declare var google: any;

@Component({
  selector: 'area-chart',
  template: '<div id="{{elementId}}" style="width: auto; height: auto"></div>'
})
export class AreaChartComponent implements OnInit,OnChanges {


  @Input() data: any[];
  @Input() config: CalendarChartConfig;
  @Input() elementId: String;

  constructor(private _calendarChartService: GoogleCalendarChartService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this._calendarChartService.BuildCalendarChart(this.elementId, this.data, this.config);
  }

}
