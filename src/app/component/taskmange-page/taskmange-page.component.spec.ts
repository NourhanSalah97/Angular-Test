import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskmangePageComponent } from './taskmange-page.component';

describe('TaskmangePageComponent', () => {
  let component: TaskmangePageComponent;
  let fixture: ComponentFixture<TaskmangePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskmangePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskmangePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
