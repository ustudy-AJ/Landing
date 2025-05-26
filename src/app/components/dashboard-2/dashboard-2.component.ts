import { Component } from '@angular/core';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { StatisticBlockComponent } from './statistic-block/statistic-block.component';
import { topFamousCoursesRu } from '../../data/chart.data';
import { TopCourses } from '../../interfaces/chart.interface';

@Component({
  selector: 'app-dashboard-2',
  imports: [BarChartComponent, StatisticBlockComponent],
  templateUrl: './dashboard-2.component.html',
  styleUrl: './dashboard-2.component.scss'
})
export default class Dashboard2Component {
  barStatisticOfCourses:TopCourses  = topFamousCoursesRu;
}
