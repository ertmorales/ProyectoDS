import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prod01Component } from './prod01.component';

describe('Prod01Component', () => {
  let component: Prod01Component;
  let fixture: ComponentFixture<Prod01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prod01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prod01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
