import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartpieChartComponent } from './chartpie-chart.component';

describe('ChartpieChartComponent', () => {
  let component: ChartpieChartComponent;
  let fixture: ComponentFixture<ChartpieChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartpieChartComponent]
    });
    fixture = TestBed.createComponent(ChartpieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
