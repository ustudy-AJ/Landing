import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieGenderChartComponent } from './pie-gender-chart.component';

describe('PieGenderChartComponent', () => {
  let component: PieGenderChartComponent;
  let fixture: ComponentFixture<PieGenderChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieGenderChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieGenderChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
