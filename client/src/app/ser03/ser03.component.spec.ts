import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ser03Component } from './ser03.component';

describe('Ser03Component', () => {
  let component: Ser03Component;
  let fixture: ComponentFixture<Ser03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ser03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ser03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
