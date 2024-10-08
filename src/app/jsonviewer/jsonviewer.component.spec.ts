import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonviewerComponent } from './jsonviewer.component';

describe('JsonviewerComponent', () => {
  let component: JsonviewerComponent;
  let fixture: ComponentFixture<JsonviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonviewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
