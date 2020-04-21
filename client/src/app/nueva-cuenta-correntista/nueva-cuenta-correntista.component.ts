import { Component, OnInit } from '@angular/core';

//servicios
import { Cuenta_Correntista_Service } from "../services/cuenta_correntista.service";

//modelos
import { Cuenta_correntista } from "../models/cuenta_correntista.models/cuenta_correntista";

@Component({
  selector: 'app-nueva-cuenta-correntista',
  templateUrl: './nueva-cuenta-correntista.component.html',
  styleUrls: ['./nueva-cuenta-correntista.component.css'],
  providers: [Cuenta_Correntista_Service]
})
export class NuevaCuentaCorrentistaComponent implements OnInit {

  public cuentaNueva: Cuenta_correntista;
  public errorMessage;

  constructor(
    private _Cuenta_correntista_Service: Cuenta_Correntista_Service
  ) {
    this.cuentaNueva = new Cuenta_correntista(null, null, null, null, null, null, null, null, null, null, null, null); //Inserta null por defecto cuendo no se ungresa ningun dato
    //this.cuentaNueva = new Cuenta_correntista(null,0,0,"","","","","","","","",""); //Inserta datos vacios nbo nulos por defecto cuendo no se ungresa ningun dato
  }

  ngOnInit() {
  }

  //crear cuenta
  public nuevaCuenta() {

    if (this.cuentaNueva.Cuenta_Correntista === null) {
      this.errorMessage = "Cuenta Correntista requerida";
    } else if (this.cuentaNueva.ID_Cuenta === null) {
      this.errorMessage = "Id. Cuenta requerido";
    } else if (this.cuentaNueva.Nombre === null) {
      this.errorMessage = "Nombre requerido";
    } else if (this.cuentaNueva.NIT === null) {
      this.errorMessage = "NIT requerido";
    } else if (this.cuentaNueva.Direccion === null) {
      this.errorMessage = "Direccion requerido";
    } else if (this.cuentaNueva.Telefono === null) {
      this.errorMessage = "Telefono requerido";
    } else if (this.cuentaNueva.Celular === null) {
      this.errorMessage = "requerido requerido";
    } else if (this.cuentaNueva.Email === null) {
      this.errorMessage = "Email requerido";
    } else if (this.cuentaNueva.Factura_NIT === null) {
      this.errorMessage = "Nit en Factura requerido";
    } else if (this.cuentaNueva.Factura_Nombre === null) {
      this.errorMessage = "Nombre en Factura requerido";
    } else if (this.cuentaNueva.Factura_Direccion === null) {
      this.errorMessage = "Direccion en Factura requerido";
    } else if (isNaN(this.cuentaNueva.Cuenta_Correntista)) {
      this.errorMessage = "El dato ingresado (" + this.cuentaNueva.Cuenta_Correntista + ") es invalido, por favor ingrese un dato numerico";
    } else if (isNaN(this.cuentaNueva.ID_Cuenta)) {
      this.errorMessage = "El dato ingresado (" + this.cuentaNueva.ID_Cuenta + ") es invalido, por favor ingrese un dato numerico";
    } else {
      this._Cuenta_correntista_Service.nueva_cuenta_correntista(this.cuentaNueva).subscribe(
        res => {
          let message = JSON.stringify(res);
          let _message = JSON.parse(message);
          if (this.errorMessage) {
            this.errorMessage = null;
          }

          this.cuentaNueva.Cuenta_Correntista = null;
          this.cuentaNueva.ID_Cuenta = null;
          this.cuentaNueva.Nombre = null;
          this.cuentaNueva.NIT = null;
          this.cuentaNueva.Direccion = null;
          this.cuentaNueva.Telefono = null;
          this.cuentaNueva.Celular = null;
          this.cuentaNueva.Email = null;
          this.cuentaNueva.Factura_NIT = null;
          this.cuentaNueva.Factura_Nombre = null;
          this.cuentaNueva.Factura_Direccion = null;

          alert(_message.message);
        },
        err => {
          this.errorMessage = err.error.message;
        }
      );
    }
  }

}
