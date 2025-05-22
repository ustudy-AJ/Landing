import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  selector: 'app-pie-chart',
  imports: [
    NgxEchartsDirective
  ],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent {
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
