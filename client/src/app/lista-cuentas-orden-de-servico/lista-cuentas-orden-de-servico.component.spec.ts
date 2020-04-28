import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCuentasOrdenDeServicoComponent } from './lista-cuentas-orden-de-servico.component';

describe('ListaCuentasOrdenDeServicoComponent', () => {
  let component: ListaCuentasOrdenDeServicoComponent;
  let fixture: ComponentFixture<ListaCuentasOrdenDeServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCuentasOrdenDeServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCuentasOrdenDeServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
