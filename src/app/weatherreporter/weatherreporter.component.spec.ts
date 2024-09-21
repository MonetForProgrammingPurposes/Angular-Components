import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherreporterComponent } from './weatherreporter.component';

describe('WeatherreporterComponent', () => {
  let component: WeatherreporterComponent;
  let fixture: ComponentFixture<WeatherreporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherreporterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherreporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
