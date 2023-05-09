import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventReservationChartComponent } from './event-reservation-chart.component';

describe('EventReservationChartComponent', () => {
  let component: EventReservationChartComponent;
  let fixture: ComponentFixture<EventReservationChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventReservationChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventReservationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
