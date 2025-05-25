import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import * as echarts from 'echarts/core';
import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  selector: 'app-line-chart',
  imports: [NgxEchartsDirective],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent {
  @Input() title: String | undefined;
  @Input() styleClass!: string;

  option: any = {
    title: {},
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      show: true,
      data: ['Пользователи', 'Сертификаты']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Сертификаты',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310, 234, 290, 330, 310, 500],
        color: "#3AACFF",
      },
      {
        name: 'Пользователи',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 200],
        color: "#ED589D"
      },

    ]
  };

  chartInstance: echarts.ECharts | null = null;

  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;

  ngAfterViewInit(): void {
    const chartDom = this.chartContainer.nativeElement.querySelector('.chart');
    this.chartInstance = echarts.init(chartDom);
    this.chartInstance.setOption(this.option);
  }

  @HostListener('window:resize')
  onResize() {
    if (this.chartInstance) {
      this.chartInstance.resize();
    }
  }
  ngOnDestroy(): void {
    this.chartInstance?.dispose();
  }
}
