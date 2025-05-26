import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { ECharts, EChartsOption } from 'echarts';
import { NgxEchartsDirective } from 'ngx-echarts';
import { RacingBarChart, RacingBarChartValue } from '../../../interfaces/chart.interface';


@Component({
  selector: 'app-racing-bar-chart',
  imports: [NgxEchartsDirective],
  templateUrl: './racing-bar-chart.component.html',
  styleUrl: './racing-bar-chart.component.scss'
})
export class RacingBarChartComponent {
  @Input() styleClass!: string;
  @Input() data!: RacingBarChart;
  @Input() colorIndex: number = 0;

  option!: any;
  private isMobile: boolean = false;
  gradientColors = [
    ["#4129C8","#976AE5"],
    ["#8353D5","#F665A8"],
  ]

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 768;
    this.option = this.getOption();
  }

  ngOnInit(){
    this.onResize();
  }

  getOption(){
    return {
      title: {},
      grid: {
        left: '-110',
        right: '4%',
        bottom: '10%',
        top: '0%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        show: true
      },
      yAxis: {
        type: 'category',
        data: this.data.values.map(v =>v.name),
        show: !this.isMobile,
        inverse: true,
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          align: 'left',
          nameTextStyle: {
            align: "center"
          },
          margin: this.isMobile ? 0: 200,
          fontSize: 12,
          color: "black",
        }
      },
      series: [
        {
          type: 'bar',
          data: this.data.values.map(v=> v.value),
          label: {
            show: this.isMobile,
            position: 'innerLeft',
            fontSize: 12,
            color: '#000',
            formatter: "{b}"
          },
          itemStyle: {
            color: 'transparent'
          },
          barGap: '-50%',
          barWidth: '25'
        },
        {
          type: 'bar',
          data: this.data.values.map(v =>v.value),
          label: {
            show: false,
          },
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: this.gradientColors[this.colorIndex][0]
                },
                {
                  offset: 1,
                  color: this.gradientColors[this.colorIndex][1]
                }
              ]
            },
            borderRadius: 2.5
          },
          barWidth: '20',
        }
      ]
    };
  }
}
