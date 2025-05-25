import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

import { TopCourses } from '../../../interfaces/chart.interface';
import { NgxEchartsDirective } from 'ngx-echarts';
import { color } from 'echarts';


@Component({
  selector: 'app-bar-chart',
  imports: [NgxEchartsDirective],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent {
  @Input() styleClass!: string;
  @Input() data!: TopCourses;
  @Input() colorIndex: number = 0;

  option!: any;
  private isMobile: boolean = false;
  gradientColors = [
    ["#4129C8","#976AE5"],
    ["#8353D5","#F665A8"],
  ]

  @HostListener('window:resize')
  onResize() {
    console.log(window.innerWidth);

    this.isMobile = window.innerWidth < 768;
    this.option = this.getOption();
  }

  ngOnInit(){
    this.option = this.getOption();
  }

  getOption(){
    return {
      title: {},
      grid: {
        left: '-180',
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
        data: this.data.topCourserData.map(v =>v.name),
        show: !this.isMobile,
        inverse: true,
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          align: 'left',
          nameTextStyle: {
            align: "center"
          },
          margin: this.isMobile ? 0: 220,
          fontSize: 14,
          color: "#94A3B8",
        }
      },
      series: [
        {
          type: 'bar',
          data: this.data.topCourserData.map(v=> v.value),
          label: {
            show: this.isMobile,
            position: 'insideLeft',
            fontSize: 12,
            color: '#000',
            formatter: "{b}"
          },
          itemStyle: {
            color: 'transparent'
          },
          barGap: '0%',
          barWidth: '20'
        },
        {
          type: 'bar',
          data: this.data.topCourserData.map(v =>v.value),
          label: {
            show: true,
            position: 'insideRight',
            fontSize: 14,
            fontWeight: "medium",
            color: "white",
            distance: 15
          },
          itemStyle: {
            color: "#94A3B8",
            borderRadius: 12
          },
          barWidth: '40',
        }
      ]
    };
  }
}
