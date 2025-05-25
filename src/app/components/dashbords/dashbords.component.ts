import { Component, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { ChartsService } from '../charts/charts.service';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { averageResultData, barStatisticGenderData, certificatesByRegionData, pieStatisticGenderData, purposeOfCertificatesData, startCoursesData, topFamousCourses, uniqueUsersByRegionData } from '../../data/chart.data';
import { RacingBarChartComponent } from './racing-bar-chart/racing-bar-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieGenderChartComponent } from './pie-gender-chart/pie-gender-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import StatisticComponent from '../statistic/statistic.component';
import Statistic2Component from '../statistic-2/statistic-2.component';
import { color } from 'echarts';
import { BarChart, PieChart, PieGenderChart, RacingBarChart } from '../../interfaces/chart.interface';

@Component({
  selector: 'app-dashbords',
  imports: [PieChartComponent, RacingBarChartComponent, BarChartComponent, PieGenderChartComponent, LineChartComponent, StatisticComponent, Statistic2Component],
  templateUrl: './dashbords.component.html',
  styleUrl: './dashbords.component.scss'
})
export default class DashbordsComponent {
  startCourses: PieChart = startCoursesData;
  purposeOfCertificates: PieChart = purposeOfCertificatesData;
  averageResult: PieChart = averageResultData;

  uniqueUsersByRegion: RacingBarChart = uniqueUsersByRegionData;
  certificatesByRegion: RacingBarChart = certificatesByRegionData;

  barStatisticGender: BarChart = barStatisticGenderData;
  pieStatisticGender: PieGenderChart = pieStatisticGenderData;

}
