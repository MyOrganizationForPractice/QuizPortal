import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreStartQuizComponent } from './pre-start-quiz.component';

describe('PreStartQuizComponent', () => {
  let component: PreStartQuizComponent;
  let fixture: ComponentFixture<PreStartQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreStartQuizComponent]
    });
    fixture = TestBed.createComponent(PreStartQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
