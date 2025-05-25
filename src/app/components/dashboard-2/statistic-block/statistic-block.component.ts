import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistic-block',
  imports: [CommonModule],
  templateUrl: './statistic-block.component.html',
  styleUrl: './statistic-block.component.scss'
})
export class StatisticBlockComponent {
  @Input() title!: string;
  @Input() value!: number;
  @Input() income!: number;
}
