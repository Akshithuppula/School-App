import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstudentpageComponent } from './allstudentpage.component';

describe('AllstudentpageComponent', () => {
  let component: AllstudentpageComponent;
  let fixture: ComponentFixture<AllstudentpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllstudentpageComponent]
    });
    fixture = TestBed.createComponent(AllstudentpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
