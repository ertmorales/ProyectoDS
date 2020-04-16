import { Component, OnInit } from '@angular/core';

//Servicios
import { Cuenta_Correntista_Service } from "../services/cuenta_correntista.service";
import { Producto_Service } from "../services/producto.service";

//Modelos
import { Cuenta_correntista_nombre } from "../models/cuenta_correntista.models/cuenta_correntista_nombre";
import { Cuenta_correntista_Id } from "../models/cuenta_correntista.models/cuenta_correntista_Id";
import { Cuenta_correntista_NIT } from "../models/cuenta_correntista.models/cuenta_correntista_NIT";
import { Buscar_cuenta_correntista } from "../models/cuenta_correntista.models/buscar_cuenta_correntista";

import { Buscar_producto } from "../models/producto.models/buscar_producto";
import { Producto_Descripcion } from "../models/producto.models/producto_Descripcion";
import { Producto_Producto } from "../models/producto.models/producto_Producto"

import { ThrowStmt } from '@angular/compiler';

//jQuery
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css'],
  providers: [
    Cuenta_Correntista_Service,
    Producto_Service
  ]
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
  public _selectC = false;
  public activeListClient = false;
  public infoDetail = false;

  public buscar_producto: Buscar_producto;
  public producto_producto: Producto_Producto;
  public producto_Descripcion: Producto_Descripcion;

  public errorMessageProd;
  public prodIdentity;
  public listProdIdentity;
  public activeListProd;

  constructor(
    private _cuenta_correntista_Service: Cuenta_Correntista_Service,
    private _producto_Service: Producto_Service
  ) {
    this.buscar_cuenta_correntista = new Buscar_cuenta_correntista("");
    this.buscar_producto = new Buscar_producto("");
  }

  ngOnInit() {
  }

  //Buscar cliente (cuenta correntista)
  public Search() {

    let buscar;
    let _buscar;

    buscar = JSON.stringify(this.buscar_cuenta_correntista);
    _buscar = JSON.parse(buscar);

    //Si el campo para buscar está vacio miuestra todos los clientes
    if (!_buscar.buscar) {
      this.listClient();
    } else {
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
  }

  //lista de cuentas
  public listClient() {

    if (this.activeListClient) {
      this.activeListClient = false;
      this.listClientIdentyty = null;
    } else {
      this.activeListClient = true;

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

  //Editar cuenta, seleciionar o buscar otra
  public edit() {
    this.clientIdentity = null;
    this.buscar_cuenta_correntista.buscar = null;
  }

  //Consumidor final
  public consumer() {
    var consumerFinally = {
      NIT: "C/F",
      Nombre: "CONSUMIDOR FINAL",
      Direccion: "CIUDAD"
    }
    this.clientIdentity = consumerFinally;
    this.listClientIdentyty = null;
    this.errorMessage = null;
  }

  //Buscar producto
  public SearchProd() {

    let buscar = JSON.stringify(this.buscar_producto);
    let _buscar = JSON.parse(buscar)

    if (!_buscar.buscar) {
      this.listProd();
    } else {
      //validar si se busca por Id o por descripcion
      if (isNaN(_buscar.buscar)) {
        //Buscar por Descripcion
        this.producto_Descripcion = new Producto_Descripcion(_buscar.buscar)
        this._producto_Service.producto_Descripcion(this.producto_Descripcion).subscribe(
          res => {
            this.prodIdentity = res[0];
            this.errorMessageProd = null;
            this.listProdIdentity = null;
          },
          err => {
            this.errorMessageProd = err.error.message;
            this.prodIdentity = null;
            this.listProdIdentity = null;
          }
        );
      } else {
        //si el campo para buscar tiene solo numeros se busca por Id
        this.producto_producto = new Producto_Producto(_buscar.buscar);
        this._producto_Service.producto_Producto(this.producto_producto).subscribe(
          res => {
            this.prodIdentity = res[0];
            this.errorMessageProd = null;
            this.listProdIdentity = null;
          },
          err => {
            this.errorMessageProd = err.error.message;
            this.prodIdentity = null;
            this.listProdIdentity = null;
          }
        );
      }
    }
  }

  //lista producto
  public listProd() {
    if (this.activeListProd) {
      this.activeListProd = false;
      this.listProdIdentity = null;
    } else {
      this.activeListProd = true;
      this._producto_Service.producto().subscribe(
        res => {
          let list = JSON.stringify(res);
          this.listProdIdentity = JSON.parse(list);
          this.prodIdentity = null;
          this.errorMessageProd = null;
        },
        err => {
          this.errorMessageProd = err.error.message;
          this.prodIdentity = null;
          this.listProdIdentity = null;
        }
      );
    }
  }

  //mostrar mas detalles: Lugar de entrega/Tiempo de entrega/Con atencion a:
  public detail(){
    if (!this.infoDetail){
      this.infoDetail = true;
    }else{
      this.infoDetail = false;
    }
  }
}
