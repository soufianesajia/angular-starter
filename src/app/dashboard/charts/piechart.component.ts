import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import { GooglePieChartService } from './../../_services/GooglePieChartService';
import { PieChartConfig } from './../../_models/PieChartConfig';

declare var google: any;

@Component({
  selector: 'pie-chart',
  template: '<div id="{{elementId}}" style="width: auto; height: auto"></div>'
})
export class PieChartComponent implements OnInit, OnChanges {

  @Input() data: any[];
  @Input() config: PieChartConfig;
  @Input() elementId: String;

  constructor(private _pieChartService: GooglePieChartService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this._pieChartService.BuildPieChart(this.elementId, this.data, this.config);
  }
}
