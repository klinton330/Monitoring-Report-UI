import { Component } from '@angular/core';
import { ChartService } from '../../service/chart.service';
import Chart from 'chart.js/auto';
import { Charts } from '../../model/chart';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent {
  checkedList: string[] = [];
  label: string[] = [];
  chartData: any[] = [];
  charts: Charts = new Charts();
  Chart: Chart | undefined;

  constructor(private chartService: ChartService) {}

  options = [
    { id: 1, label: 'outbound', checked: false, color: 'blue' },
    { id: 2, label: 'inbound', checked: false, color: 'green' },
    { id: 3, label: 'offerred', checked: false, color: 'red' },
    { id: 4, label: 'abandoned', checked: false, color: 'blue' },
    { id:5, label: 'answered', checked: false, color: 'green' },
  ];

  getSelectedValue(status: boolean, value: string) {
    console.log(value);
    status
      ? this.checkedList.push(value)
      : (this.checkedList = this.checkedList.filter((item) => item !== value));
  }

  submitData(chartdata: any) {
    this.chartService
      .getDataForChart(
        chartdata.value.dateField,
        chartdata.value.businessUnit,
        this.checkedList
      )
      .subscribe((data: any) => {
        this.buildGraphData(data);
      });
  }

  buildGraphData(data: any) {
    this.label = data.chart.chartData[0].times;
    const colors = [
      'blue',
      'green',
      'red',
      'orange',
      'purple',
      'cyan',
      'pink',
      'yellow',
      'brown',
    ];

    this.chartData = data.chart.chartData.map((item: any, index: number) => ({
      label: item.metricsName,
      data: item.metricsdata,
      borderColor: colors[index],
      background:colors[index]
    }));
    this.createChart(this.charts.chartType);
  }

  createChart(chartType:any) {
    let myChart = Chart.getChart('MyChart');
    if (myChart) myChart.destroy();
    new Chart('MyChart', {
      type: chartType,
      data: {
        labels: this.label,
        datasets: this.chartData,
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
