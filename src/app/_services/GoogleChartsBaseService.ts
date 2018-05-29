declare var google: any;

export class GoogleChartsBaseService {
  constructor() {
    google.charts.load('current', {'packages':['corechart','bar','calendar','table']});
  }

  protected buildChart(data: any[], chartFunc: any, options: any) : void {
    var func = (chartFunc, options) => {

      var datatable = google.visualization.arrayToDataTable(data);
      chartFunc().draw(datatable, options);

      // var components = [
      //   {type: 'igoogle', datasource: 'https://spreadsheets.google.com/tq?key=pCQbetd-CptHnwJEfo8tALA',
      //     gadget: 'https://www.google.com/ig/modules/pie-chart.xml',
      //     userprefs: {'3d': 1}},
      //   {type: 'html', datasource: 'https://spreadsheets.google.com/tq?key=pCQbetd-CptHnwJEfo8tALA'},
      //   {type: 'csv', datasource: 'https://spreadsheets.google.com/tq?key=pCQbetd-CptHnwJEfo8tALA'},
      // ];
      //
      // var container = document.getElementById('toolbar_div');
      //
      // google.visualization.drawToolbar(container, components);

    };
    var callback = () => func(chartFunc, options);
    google.charts.setOnLoadCallback(callback);
  }



}
