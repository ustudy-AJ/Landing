import { Component, HostBinding, HostListener, inject } from '@angular/core';
import { ChartComponent } from './chart/chart.component';
import { DataComponent } from './data-component/data.component';
import { hourlyData, monthlyData, topCoursesOnPerfomenceData, topFamousCourses } from '../../data/chart.data';
import { ChartsService } from './charts.service';

@Component({
  selector: 'app-charts',
  imports: [ChartComponent, DataComponent],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export default class ChartsComponent {
  private _chartsService = inject(ChartsService);

  genderOptions = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      right: 0,
      top: 'center',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['50%', '40%'],
        color: ["#FA5EB6","#438EEC"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
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
        data: [
          { value: 548, name: 'Female' },
          { value: 735, name: 'Male' }
        ]
      }
    ]
  };
  barChartOptions = {
    xAxis: {
      type: 'category',
      data: ['0-16', '16-30', '30-50', '50+'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      this._chartsService.createSeriesItem("bar", [2000, 3000, 4800, 2700], false, "", "", "", "40%", "#1f77ff")
    ],
    grid: this._chartsService.createGrid("5%"),
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
    },
  };
  activePeriodChartOptions = {
    title: this._chartsService.createTitle("Active period",24),
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: this._chartsService.createGrid("3%"),
    xAxis: {
      type: 'category',
      data: hourlyData.map(v => v.value + ""),
      axisLabel: {
        rotate: 0,
      },
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 320,
    },
    series: [
      this._chartsService.createSeriesItem("bar", hourlyData.map(v => v.value), false, "", "", "", "50%", "#1f9bff"),
    ],
  };
  topFamousCoursesOptions: any = {
    title: this._chartsService.createTitle(topFamousCourses.title, 14),
    grid: this._chartsService.createGrid("-10%"),
    xAxis: { type: 'value', show: false},
    yAxis: this._chartsService.createYAxis("category", topFamousCourses.topCourserData.map(v =>v.name), false, true, true),
    series: [
      this._chartsService.createSeriesItem('bar',topFamousCourses.topCourserData.map(v =>v.value), false, "insideLeft", "#000", "{b}", 0, "transparent"),
      this._chartsService.createSeriesItem('bar',topFamousCourses.topCourserData.map(v =>v.value), true, "insideRight", "#fff", "{c}", 25, "#1F3C88"),
    ],
    responsive: true
  };
  topCoursesOnPerfomenceOptions: any = {
    title: this._chartsService.createTitle(topCoursesOnPerfomenceData.title, 14),
    grid: this._chartsService.createGrid("-10%"),
    xAxis: { type: 'value', show: false},
    yAxis: this._chartsService.createYAxis("category", topCoursesOnPerfomenceData.topCourserData.map(v =>v.name), false, true, true),
    series: [
      this._chartsService.createSeriesItem('bar',topCoursesOnPerfomenceData.topCourserData.map(v=> v.value), false, "insideLeft", "#000", "{b}", 25, "transparent"),
      this._chartsService.createSeriesItem('bar',topCoursesOnPerfomenceData.topCourserData.map(v =>v.value), true, "insideRight", "#fff", "{c}", 25, "#DCBA8D")
    ],
    responsive: true
  };



  @HostListener('window:resize')
  onResize() {
    const isMobile = window.innerWidth <= 768;

    this.topFamousCoursesOptions = isMobile
      ? this._chartsService.getMobile(this.topFamousCoursesOptions, "number")
      : this._chartsService.getDesktop(this.topFamousCoursesOptions, "number");

    this.topCoursesOnPerfomenceOptions = isMobile
      ? this._chartsService.getMobile(this.topCoursesOnPerfomenceOptions, "procent")
      : this._chartsService.getDesktop(this.topCoursesOnPerfomenceOptions, "procent");
  }

  ngOnInit(){
    this.updateActivePeiod("hour");
    this.onResize();
  }

  updateActivePeiod(name: string){
    let chartData!: {xLabels: string[],yValues: number[]};
    switch(name){
      case "month":
        chartData = this._chartsService.setMonth();
        break;
      case "day":
        chartData = this._chartsService.setDay();
        break;
      case "hour":
        chartData = this._chartsService.setHours();
    }

    this.activePeriodChartOptions = {
      title: {
        text: 'Active period',
        left: 'left',
        textStyle: { fontSize: 24, fontWeight: 'bold', color: "#2D3649" }
      },
      tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
      grid: { left: '3%', right: '4%', bottom: '10%', containLabel: true },
      xAxis: {
        type: 'category', data: chartData.xLabels,
        axisLabel: {rotate: 0}
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 200
      },
      series: [
        {
          type: 'bar',
          data: chartData.yValues,
          barWidth: '50%',
          itemStyle: { color: '#1f9bff', borderRadius: [5, 5, 0, 0] },
          label: {
            show: false
          }
        }
      ]
    };
  }

}

