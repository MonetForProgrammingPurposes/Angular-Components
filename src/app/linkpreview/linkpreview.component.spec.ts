import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkpreviewComponent } from './linkpreview.component';

describe('LinkpreviewComponent', () => {
  let component: LinkpreviewComponent;
  let fixture: ComponentFixture<LinkpreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkpreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
