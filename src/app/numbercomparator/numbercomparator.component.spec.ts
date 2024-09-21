import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbercomparatorComponent } from './numbercomparator.component';

describe('NumbercomparatorComponent', () => {
  let component: NumbercomparatorComponent;
  let fixture: ComponentFixture<NumbercomparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumbercomparatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumbercomparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
