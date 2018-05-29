import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import { ComboChartConfig } from './../../_models/ComboChartConfig';
import { GoogleComboChartService } from './../../_services/GoogleComboChart.service';

declare var google: any;

@Component({
  selector: 'combo-chart',
  template: '<div id="{{elementId}}" style="width: 100%; height: 100%"></div>'
})
export class ComboChartComponent implements OnInit,OnChanges {


  @Input() data: any[];
  @Input() config: ComboChartConfig;
  @Input() elementId: String;

  constructor(private _comboChartService: GoogleComboChartService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this._comboChartService.BuildComboChart(this.elementId, this.data, this.config);
  }

}
