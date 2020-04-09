import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prod03Component } from './prod03.component';

describe('Prod03Component', () => {
  let component: Prod03Component;
  let fixture: ComponentFixture<Prod03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prod03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prod03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
