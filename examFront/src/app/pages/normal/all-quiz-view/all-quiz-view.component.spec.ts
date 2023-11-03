import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQuizViewComponent } from './all-quiz-view.component';

describe('AllQuizViewComponent', () => {
  let component: AllQuizViewComponent;
  let fixture: ComponentFixture<AllQuizViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllQuizViewComponent]
    });
    fixture = TestBed.createComponent(AllQuizViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
