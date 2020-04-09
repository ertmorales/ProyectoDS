import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadTaskComponent } from './load-task.component';

describe('LoadTaskComponent', () => {
  let component: LoadTaskComponent;
  let fixture: ComponentFixture<LoadTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
