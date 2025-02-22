import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbySectionComponent } from './hobby-section.component';

describe('HobbySectionComponent', () => {
  let component: HobbySectionComponent;
  let fixture: ComponentFixture<HobbySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HobbySectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobbySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
