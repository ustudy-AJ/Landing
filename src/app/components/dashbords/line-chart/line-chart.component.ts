import { Component, ElementRef, HostListener, inject, Input, ViewChild } from '@angular/core';
import * as echarts from 'echarts/core';
import { NgxEchartsDirective } from 'ngx-echarts';
import { LineChart } from '../../../interfaces/chart.interface';
import { FormsModule } from '@angular/forms';
import { monthlyData } from '../../../data/chart.data';
import { LineService } from './line.service';

@Component({
  selector: 'app-line-chart',
  imports: [NgxEchartsDirective, FormsModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent {
  @Input() data!: LineChart;
  @Input() styleClass!: string;

  viewBy: string = "months";
  option: any;

  chartInstance: echarts.ECharts | null = null;

  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;
  private _LineCartService = inject(LineService);

  ngAfterViewInit(): void {
    const chartDom = this.chartContainer.nativeElement.querySelector('.chart');
    this.chartInstance = echarts.init(chartDom);
    this.chartInstance.setOption(this._LineCartService.viewByM("months",this.data));
  }

  @HostListener('window:resize')
  onResize() {
    if (this.chartInstance) {
      this.chartInstance.resize();
    }
    this._LineCartService.viewByM("months",this.data);
  }
  ngOnDestroy(): void {
    this.chartInstance?.dispose();
  }

  chageViewBy(name: string){
    console.log(name);


    this.option = this._LineCartService.viewByM(name,this.data);
  }
}

