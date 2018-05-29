export class ComboChartConfig {
  title: string;
  vAxis: string;
  hAxis: string;
  width: number;
  height: number;

  constructor(title: string, vAxis: string, hAxis: string , width: number, height: number) {
    this.title = title;
    this.vAxis = vAxis;
    this.hAxis = hAxis;
    this.width = width;
    this.height = height;
  }
}
