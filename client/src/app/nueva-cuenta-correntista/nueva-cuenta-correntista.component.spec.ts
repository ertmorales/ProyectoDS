import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaCuentaCorrentistaComponent } from './nueva-cuenta-correntista.component';

describe('NuevaCuentaCorrentistaComponent', () => {
  let component: NuevaCuentaCorrentistaComponent;
  let fixture: ComponentFixture<NuevaCuentaCorrentistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaCuentaCorrentistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaCuentaCorrentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
