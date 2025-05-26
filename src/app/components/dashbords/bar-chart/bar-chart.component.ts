import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

import { NgxEchartsDirective } from 'ngx-echarts';
import { BarChart } from '../../../interfaces/chart.interface';

@Component({
  selector: 'app-bar-chart',
  imports: [NgxEchartsDirective],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent {
  @Input() styleClass!: string;
  @Input() data!: BarChart;

  option!: any;
  private isMobile: boolean = false;


  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 768;
    this.option = this.getOption();
  }

  ngOnInit(){
    this.onResize()
  }

  getOption(){
    return {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        show: true,
        data: ["Муж", "Жен"],
        orient: 'horizontal',
        bottom: 0
      },
      xAxis: {
        type: 'category',
        data: this.data.statisticNames,
        axisTick: { alignWithLabel: true },
        axisLabel: {
          color: '#000',
          fontSize: 12,
          align: 'center',
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#000',
          fontSize: 12,
          align: 'right',
        }
      },
      grid: {
        left: '0%',
        right: '5%',
        bottom: '10%',
        containLabel: !this.isMobile,
      },
      series: [
        {
          name: "Муж",
          type: 'bar',
          data: this.data.husbandsValues,
          barWidth: '13',
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#8348EA'
                },
                {
                  offset: 1,
                  color: '#1D96EF'
                }
              ]
            },
            borderRadius: 4,
          },
        },
        {
          name: "Жен",
          type: 'bar',
          data: this.data.wifesValues,
          barWidth: '13',
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#EE2B79'
                },
                {
                  offset: 1,
                  color: '#F665A8'
                }
              ]
            },
            borderRadius: 4,
          },
        },
      ],
    };
  }

}
