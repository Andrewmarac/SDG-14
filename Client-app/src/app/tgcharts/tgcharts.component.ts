import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tgcharts',
  templateUrl: './tgcharts.component.html',
  styleUrls: ['./tgcharts.component.css']
})
export class TgchartsComponent {
   title = 'gui-server';
   chartDataArray = new Array<ChartData>();
   multiChartData: MultiCartData;
  constructor(public http: HttpClient) {
    http.get('https://3000-fbdaf4d1-69c5-4572-bc72-b5e224f53108.ws-eu03.gitpod.io/ft1').subscribe(this.getData);
  }
getData = (data) => {
    console.log(data);
    for (var i in data) {
      let cd = new ChartData(data[i]['Country Name'], "LineChart", data[i], data[i]['Country Name'])
      this.chartDataArray.push(cd);
    }
  }


}
export class MultiCartData {
  data = [];
  constructor(chartDataArray: Array<ChartData>) {
    for (const chartData of chartDataArray) {
      this.data.push(chartData.data);
    }

  }
}
export class ChartData {
  public data = [];
  constructor(public title, public type, json_data, public columnNames) {
    for (var i in json_data) {
      const parsedX = parseInt(i);
      const parsedY = parseFloat(json_data[i])
      if (!isNaN(parsedX) && !isNaN(parsedY)) {
        this.data.push([parsedX, parsedY]);
      }
    }
    console.log(this.data);

  }
}
