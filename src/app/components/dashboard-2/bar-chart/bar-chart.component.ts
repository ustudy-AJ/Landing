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

  option!: any;
  private isMobile: boolean = false;

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 768;
    this.option = this.getOption();
  }

  ngOnInit(){
    this.isMobile = window.innerWidth < 768;
    this.option = this.getOption();
  }

  getOption(){
    return {
      title: {},
      grid: {
        left: '-150',
        right: '4%',
        bottom: '0%',
        top: '5%',
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
            color: "#94A3B8",
            formatter: "{b}"
          },
          itemStyle: {
            color: 'transparent'
          },
          barGap: '10%',
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
