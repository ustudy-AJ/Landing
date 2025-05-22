import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

import { NgxEchartsDirective } from 'ngx-echarts';
@Component({
  selector: 'app-line-chart',
  imports: [NgxEchartsDirective],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent {
  @Input() title: String | undefined;
    @Input() options: any;
    @Input() styleClass!: string;
    @Input() total!: string;
    @Input() totalText!: string;

    chartInstance: echarts.ECharts | null = null;

    @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;

    ngAfterViewInit(): void {
      const chartDom = this.chartContainer.nativeElement.querySelector('.chart');
      this.chartInstance = echarts.init(chartDom);
      this.chartInstance.setOption(this.options);
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
