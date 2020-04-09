import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ser02Component } from './ser02.component';

describe('Ser02Component', () => {
  let component: Ser02Component;
  let fixture: ComponentFixture<Ser02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ser02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ser02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
