import { Component, OnInit } from '@angular/core';

//Servicios
import { Cuenta_Correntista_Service } from "../services/cuenta_correntista.service";

//Modelos
import { Cuenta_correntista_nombre } from "../models/cuenta_correntista.models/cuenta_correntista_nombre";
import { Cuenta_correntista_Id } from "../models/cuenta_correntista.models/cuenta_correntista_Id";
import { Cuenta_correntista_NIT } from "../models/cuenta_correntista.models/cuenta_correntista_NIT";
import { Buscar_cuenta_correntista } from "../models/cuenta_correntista.models/buscar_cuenta_correntista";

//jQuery
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css'],
  providers: [Cuenta_Correntista_Service]
})
export class FacturacionComponent implements OnInit {

  public cuenta_correntista_nombre: Cuenta_correntista_nombre;
  public cuenta_correntista_Id_Cuenta: Cuenta_correntista_Id;
  public cuenta_correntista_NIT: Cuenta_correntista_NIT;
  public buscar_cuenta_correntista: Buscar_cuenta_correntista;

  public mostrarTabla = false;
  public clientIdentity;
  public errorMessage;
  public listClientIdentyty;

  constructor(
    private _cuenta_correntista_Service: Cuenta_Correntista_Service
  ) {
    this.buscar_cuenta_correntista = new Buscar_cuenta_correntista("")
  }

  ngOnInit() {
  }

  //Buscar cliente (cuenta correntista)
  public Search() {

    let buscar;
    let _buscar;

    //Captura que filtro se usará para buscar la cuenta
    switch ($("input:radio[name=filtro]:checked").val()) {
      case "Nombre":

        buscar = JSON.stringify(this.buscar_cuenta_correntista);
        _buscar = JSON.parse(buscar);

        this.cuenta_correntista_nombre = new Cuenta_correntista_nombre(_buscar.buscar);

        this._cuenta_correntista_Service.cuenta_correntista_nombre(this.cuenta_correntista_nombre).subscribe(
          res => {
            this.clientIdentity = res[0];
            this.errorMessage = null;
            this.listClientIdentyty = null;
          },
          err => {
            this.errorMessage = err.error.message;
            this.clientIdentity = null;
            this.listClientIdentyty = null;
          }
        );
        break;
      case "Id":
        buscar = JSON.stringify(this.buscar_cuenta_correntista);
        _buscar = JSON.parse(buscar);
        this.cuenta_correntista_Id_Cuenta = new Cuenta_correntista_Id(_buscar.buscar);

        this._cuenta_correntista_Service.cuenta_correntista_Id(this.cuenta_correntista_Id_Cuenta).subscribe(
          res => {
            this.clientIdentity = res[0];
            this.errorMessage = null;
            this.listClientIdentyty = null;
          },
          err => {
            this.errorMessage = err.error.message;
            this.clientIdentity = null;
            this.listClientIdentyty = null;
          }
        );
        break;
      case "NIT":
        buscar = JSON.stringify(this.buscar_cuenta_correntista);
        _buscar = JSON.parse(buscar);
        this.cuenta_correntista_NIT = new Cuenta_correntista_NIT(_buscar.buscar);

        this._cuenta_correntista_Service.cuenta_correntista_NIT(this.cuenta_correntista_NIT).subscribe(
          res => {
            this.clientIdentity = res[0];
            this.errorMessage = null;
            this.listClientIdentyty = null;
          },
          err => {
            this.errorMessage = err.error.message;
            this.clientIdentity = null;
            this.listClientIdentyty = null;
          }
        );
    }
  }

  public listClient() {
    this._cuenta_correntista_Service.cuenta_correntista().subscribe(
      res => {
        let list = JSON.stringify(res);
        this.listClientIdentyty = JSON.parse(list);
        this.clientIdentity = null;
        this.errorMessage = null;
      },
      err => {
        this.errorMessage = err.error.message;
        this.clientIdentity = null;
        this.listClientIdentyty = null;
      }
    );
  }

}
