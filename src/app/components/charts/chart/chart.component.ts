import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, input, ViewChild } from '@angular/core';
import { NgxEchartsDirective } from 'ngx-echarts';
import * as echarts from 'echarts';

@Component({
  selector: 'app-chart',
  imports: [
    NgxEchartsDirective
  ],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {
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
