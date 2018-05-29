import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import { ColumnChartConfig } from './../../_models/ColumnChartConfig';
import { GoogleColumnChartService } from './../../_services/GoogleColumnChartService';

declare var google: any;

@Component({
  selector: 'column-chart',
  template: '<div id="{{elementId}}" style="width: 100%; height: 100%"></div>'
})
export class ColumnChartComponent implements OnInit,OnChanges {


  @Input() data: any[];
  @Input() config: ColumnChartConfig;
  @Input() elementId: String;

  constructor(private _columnChartService: GoogleColumnChartService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this._columnChartService.BuildColomnChart(this.elementId, this.data, this.config);
  }

}
