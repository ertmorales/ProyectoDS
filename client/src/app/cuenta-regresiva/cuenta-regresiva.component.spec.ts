import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaRegresivaComponent } from './cuenta-regresiva.component';

describe('CuentaRegresivaComponent', () => {
  let component: CuentaRegresivaComponent;
  let fixture: ComponentFixture<CuentaRegresivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentaRegresivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaRegresivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
