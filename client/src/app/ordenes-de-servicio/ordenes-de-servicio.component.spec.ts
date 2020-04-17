import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesDeServicioComponent } from './ordenes-de-servicio.component';

describe('OrdenesDeServicioComponent', () => {
  let component: OrdenesDeServicioComponent;
  let fixture: ComponentFixture<OrdenesDeServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenesDeServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenesDeServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
