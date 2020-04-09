import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prod02Component } from './prod02.component';

describe('Prod02Component', () => {
  let component: Prod02Component;
  let fixture: ComponentFixture<Prod02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prod02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prod02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
