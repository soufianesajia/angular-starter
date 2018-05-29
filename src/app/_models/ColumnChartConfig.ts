export class ColumnChartConfig {
  title: string;
  vAxis: string;
  hAxis: string;
  vAxisTitle : string;
  hAxisTitle : string;
  width: number;
  height: number;

  constructor(title: string,
              vAxis: string,
              hAxis: string,
              vAxisTitle : string,
              hAxisTitle : string,
              width: number,
              height: number
              ) {
    this.title = title;
    this.vAxis = vAxis;
    this.hAxis = hAxis;
    this.vAxisTitle = vAxisTitle;
    this.hAxisTitle = hAxisTitle;
    this.width = width;
    this.height = height;
  }
}
