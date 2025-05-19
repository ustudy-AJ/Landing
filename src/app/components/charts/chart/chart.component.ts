import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { NgxEchartsDirective } from 'ngx-echarts';

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

}
