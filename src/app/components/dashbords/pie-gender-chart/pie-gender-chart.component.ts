import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
import { NgxEchartsDirective } from 'ngx-echarts';
import { PieGenderChart } from '../../../interfaces/chart.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pie-gender-chart',
  imports: [NgxEchartsDirective, CommonModule],
  templateUrl: './pie-gender-chart.component.html',
  styleUrl: './pie-gender-chart.component.scss'
})
export class PieGenderChartComponent {
  @Input() title: String | undefined;
  @Input() styleClass!: string;
  @Input() data!: PieGenderChart;

  option!: any;

  chartInstance: echarts.ECharts | null = null;

  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;

  ngAfterViewInit(): void {
    const chartDom = this.chartContainer.nativeElement.querySelector('.chart');
    this.chartInstance = echarts.init(chartDom);
    this.chartInstance.setOption(this.getOption());
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

  getOption(){
    return {
      legend: {
        show: false,
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['75%', '50%'],
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
          padAngle: 5,
          startAngle: 220,
          data: [
            {
              value: 560,
              name: 'Мужчин',
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: '#1D96EF' },
                    { offset: 1, color: '#8353D5' }
                  ]
                }
              }
            },
            {
              value: 420,
              name: 'Женщин',
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: '#DD1C69' },
                    { offset: 1, color: '#F665A8' }
                  ]
                }
              }
            }
          ]
        }

      ]
    };
  }

  getPrecent(total: number, current:number){
    return Math.round((current*100)/total);
  }

}
