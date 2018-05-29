export class PieChartConfig {
  title: string;
  pieHole: number;
  width:number;
  height:number;

  constructor(title: string, pieHole: number, width: number, height: number) {
    this.title = title;
    this.pieHole = pieHole;
    this.width = width;
    this.height = height;
  }
}
