import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ser01Component } from './ser01.component';

describe('Ser01Component', () => {
  let component: Ser01Component;
  let fixture: ComponentFixture<Ser01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ser01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ser01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
