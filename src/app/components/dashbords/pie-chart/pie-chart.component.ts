import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
import { NgxEchartsDirective } from 'ngx-echarts';
import { PieChart } from '../../../interfaces/chart.interface';

@Component({
  selector: 'app-pie-chart',
  imports: [
    NgxEchartsDirective
  ],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent {
  @Input() data!: PieChart;
  @Input() colorIndex: number = 0;
  @Input() styleClass!: string;
  option: any;
  gradientColors = [
    ["#8353D5","#4129C8"],
    ["#8353D5","#ED589D"],
    ["#4C94FF","#B158ED"],
  ]

  ngOnInit(){
    this.option = this.getOption();
  }

  getOption(){
    return {
      legend: {
        show: false
      },
      series: [
        {
          type: 'pie',
          silent: true,
          animation: false,
          radius: [0, '52%'],
          label: {},
          labelLine: {
            show: false
          },
          data: [
            {
              value: 0,
              itemStyle: {
                color: "white",
                shadowColor: "#00000050",
                shadowBlur: 30
              }
            }
          ]
        },
        {
          type: 'pie',
          radius: ['85%', '70%'],
          silent: true,
          label: { show: false },
          labelLine: { show: false },
          itemStyle: {
            color: '#e0e0e0'
          },
          data: [
            { value: 100 }
          ],
          z: 1
        },
        {
          type: 'pie',
          radius: ['85%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          silent: true,
          emphasis: {
            label: {
              show: true,
              fontSize: 12,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          itemStyle: {
            borderRadius: 6
          },
          data: [
            {
              value: this.data.currentValue,
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: this.gradientColors[this.colorIndex][0] },
                    { offset: 1, color: this.gradientColors[this.colorIndex][1] }
                  ]
                }
              }
            },
            {
              value: this.data.totalValue-this.data.currentValue,
              itemStyle: {
                color: '#ffffff00'
              }
            }
          ]
        }

      ]
    };
  }

  getPrecent(total: number, current:number){
    return Math.floor((current*100)/total);
  }

}
