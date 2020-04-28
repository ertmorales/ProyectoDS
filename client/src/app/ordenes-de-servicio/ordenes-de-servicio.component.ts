import { Component, OnInit } from '@angular/core';

//Servicios
import { Cuenta_Correntista_Service } from "../services/cuenta_correntista.service";
import { Producto_Service } from "../services/producto.service";

//Modelos cuenta correntista
import { Cuenta_correntista_nombre } from "../models/cuenta_correntista.models/cuenta_correntista_nombre";
import { Cuenta_correntista_Id } from "../models/cuenta_correntista.models/cuenta_correntista_Id";
import { Cuenta_correntista_NIT } from "../models/cuenta_correntista.models/cuenta_correntista_NIT";
import { Buscar_cuenta_correntista } from "../models/cuenta_correntista.models/buscar_cuenta_correntista";

//Modelos producto
import { Buscar_producto } from "../models/producto.models/buscar_producto";
import { Producto_Descripcion } from "../models/producto.models/producto_Descripcion";
import { Producto_Producto } from "../models/producto.models/producto_Producto"

//jQuery
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-ordenes-de-servicio',
  templateUrl: './ordenes-de-servicio.component.html',
  styleUrls: ['./ordenes-de-servicio.component.css'],
  providers: [Cuenta_Correntista_Service, Producto_Service]
})
export class OrdenesDeServicioComponent implements OnInit {

//variables a partir de modelos
  public cuenta_correntista_nombre: Cuenta_correntista_nombre;
  public cuenta_correntista_Id_Cuenta: Cuenta_correntista_Id;
  public cuenta_correntista_NIT: Cuenta_correntista_NIT;
  public buscar_cuenta_correntista: Buscar_cuenta_correntista;
  public buscar_cuenta_correntistaColaborador: Buscar_cuenta_correntista;

  public buscar_producto: Buscar_producto;
  public producto_producto: Producto_Producto;
  public producto_Descripcion: Producto_Descripcion;

  public cuentaIdentity;
  public colaboradorIdentity;
  public errorMessage = false;
  public errorMessageListCuent = false;
  public errorMessageListColaborador = false;

  public listaCuentas;
  public listaColaborador;

  constructor(
    //Instancia de los servicios rest
    private _cuenta_correntista_Service: Cuenta_Correntista_Service,
    private _producto_Service: Producto_Service
  ) {
    //nuevos modelos vacios
    this.buscar_cuenta_correntista = new Buscar_cuenta_correntista(null);
    this.buscar_cuenta_correntistaColaborador = new Buscar_cuenta_correntista(null);
    this.buscar_producto = new Buscar_producto(null);
  }

  ngOnInit() {
  }

  //Buscar cuentas dentro de la pantalla ListaCuentas
  public buscarCuentaLista(){
    
    switch ($("input:radio[name=filtro]:checked").val()) {
      case "Nombre":
        this.cuenta_correntista_nombre = new Cuenta_correntista_nombre(this.buscar_cuenta_correntista.buscar);

        this._cuenta_correntista_Service.cuenta_correntista_nombre(this.cuenta_correntista_nombre).subscribe(
          res => {
            this.cuentaIdentity = res[0];
            this.errorMessageListCuent = null;
            this.listaCuentas = null;
          },
          err => {
            this.errorMessageListCuent = err.error.message;
            this.errorMessage = null;
          }
        );
        break;
      case "Id":
        this.cuenta_correntista_Id_Cuenta = new Cuenta_correntista_Id(this.buscar_cuenta_correntista.buscar);

        this._cuenta_correntista_Service.cuenta_correntista_Id(this.cuenta_correntista_Id_Cuenta).subscribe(
          res => {
            this.cuentaIdentity = res[0];
            this.errorMessageListCuent = null;
            this.listaCuentas = null;
          },
          err => {
            this.errorMessageListCuent = err.error.message;
            this.errorMessage = null;
          }
        );
        break;
      case "NIT":
        this.cuenta_correntista_NIT = new Cuenta_correntista_NIT(this.buscar_cuenta_correntista.buscar);

        this._cuenta_correntista_Service.cuenta_correntista_NIT(this.cuenta_correntista_NIT).subscribe(
          res => {
            this.cuentaIdentity = res[0];
            this.errorMessageListCuent = null;
            this.listaCuentas = null;
          },
          err => {
            this.errorMessageListCuent = err.error.message;
            this.errorMessage = null;
          }
        );
        break;
    }
  }

  //buscar cuenta
  public buscarCenta() {


    //Si el campo para buscar está vacio muestra todas las cuentas
    if (!this.buscar_cuenta_correntista.buscar) {
      this.listClient();
      this.buscarCuentaLista();
      
    } else {

      this.cuenta_correntista_nombre = new Cuenta_correntista_nombre(this.buscar_cuenta_correntista.buscar);

      this._cuenta_correntista_Service.cuenta_correntista_nombre(this.cuenta_correntista_nombre).subscribe(
        res => {
          this.cuentaIdentity = res[0];
          this.errorMessage = null;
          this.listaCuentas = null;
        },
        err => {
          this.errorMessage = err.error.message;
          this.cuentaIdentity = null;
          this.listaCuentas = null;
        }
      );
    }
  }

  //Cancelar cuenta
  public editarCuenta() {
    this.cuentaIdentity = null;
    this.buscar_cuenta_correntista.buscar = null;
  }


  //buscar cuenta colaborador
  public buscarColaboradorLista(){
   
   
    switch ($("input:radio[name=filtro]:checked").val()) {
      case "Nombre":

        this.cuenta_correntista_nombre = new Cuenta_correntista_nombre(this.buscar_cuenta_correntistaColaborador.buscar);

        this._cuenta_correntista_Service.cuenta_correntista_nombre(this.cuenta_correntista_nombre).subscribe(
          res => {
            this.colaboradorIdentity = res[0];
            this.errorMessageListColaborador = null;
            this.listaColaborador = null;
          },
          err => {
            this.errorMessageListColaborador = err.error.message;
            this.errorMessage = null;
          }
        );
        break;
      case "Id":
        this.cuenta_correntista_Id_Cuenta = new Cuenta_correntista_Id(this.buscar_cuenta_correntistaColaborador.buscar);

        this._cuenta_correntista_Service.cuenta_correntista_Id(this.cuenta_correntista_Id_Cuenta).subscribe(
          res => {
            this.colaboradorIdentity = res[0];
            this.errorMessageListColaborador = null;
            this.listaColaborador = null;
          },
          err => {
            this.errorMessageListColaborador = err.error.message;
            this.errorMessage = null;
          }
        );
        break;
      case "NIT":
        this.cuenta_correntista_NIT = new Cuenta_correntista_NIT(this.buscar_cuenta_correntistaColaborador.buscar);

        this._cuenta_correntista_Service.cuenta_correntista_NIT(this.cuenta_correntista_NIT).subscribe(
          res => {
            this.colaboradorIdentity = res[0];
            this.errorMessageListColaborador = null;
            this.listaColaborador = null;
          },
          err => {
            this.errorMessageListColaborador = err.error.message;
            this.errorMessage = null;
          }
        );
        break;
    }
  }

  //buscar colaborador
  public buscarColaborador() {

    if (!this.buscar_cuenta_correntistaColaborador.buscar) {
      this.listColab();
    } else {
     
     this.cuenta_correntista_nombre = new Cuenta_correntista_nombre(this.buscar_cuenta_correntistaColaborador.buscar);

     this._cuenta_correntista_Service.cuenta_correntista_nombre(this.cuenta_correntista_nombre).subscribe(
       res => {
         this.colaboradorIdentity = res[0];
         this.errorMessage = null;
       },
       err => {
         this.errorMessage = err.error.message;
         this.colaboradorIdentity = null;
       }
     );
    }
  }

  //cancelar colaborador
  public editarColaborador() {
    this.colaboradorIdentity = null;
    this.buscar_cuenta_correntistaColaborador.buscar = null;
  }

  //lista de cuentas
  public listClient() {

    this._cuenta_correntista_Service.cuenta_correntista().subscribe(
      res => {
        let list = JSON.stringify(res);
        this.listaCuentas = JSON.parse(list);
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }

  //lista colaborador 
  public listColab(){
    this._cuenta_correntista_Service.cuenta_correntista().subscribe(
      res => {
        let list = JSON.stringify(res);
        this.listaColaborador = JSON.parse(list);
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }

  //Buscar producto
  public SearchProd(){
    alert("Buscando producto..." + this.buscar_producto.buscar);
  }

}