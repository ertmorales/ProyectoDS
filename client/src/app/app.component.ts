//import
import { Component, OnInit, ɵNoopNgZone } from '@angular/core';
import { JsonPipe } from '@angular/common';

//Modelos
import { UserLogin } from "./models/usuario.models/usuarioLogin";

//Servicios
import { UsuarioService } from "./services/usuario.service";
import { ServiceSql } from "./services/DataSqlServer";
import { ServiceMariaBD } from "./services/DataMariaBD";


//jQuery
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServiceMariaBD, UsuarioService, ServiceSql]
})

export class AppComponent implements OnInit {

  //Modelos
  public userLogin: UserLogin;

  //datos usuario
  public identity;
  public token;

  //Alert
  public errorMessage;


  //elemntos dentro de la pagina
  public visibleInit: boolean;
  public visibleSer01: boolean;
  public visibleSer02: boolean;
  public visibleSer03: boolean;
  public visibleProd01: boolean;
  public visibleProd02: boolean;
  public visibleProd03: boolean;
  public visibleContact: boolean;
  public visibleUserInfo: boolean;
  public visibleFact: boolean;
  public visibleOrdenServicio: boolean;
  public progressLogin: boolean = false;
  public loader: boolean = false;

  constructor(
    //iniciar servicio
    private _userSrvice: UsuarioService,
    private _serviceSql: ServiceSql,
    private _serviceMariaDB: ServiceMariaBD
  ) {
    //iniciar Modelos (No es tan necesario)
    this.userLogin = new UserLogin("", "");
  }

  //al inicar la página
  public ngOnInit() {

    
    //sessiones guardadas en local storage
    this.identity = this._userSrvice.getIdentity();
    this.token = this._userSrvice.getToken();

    this.visibleInit = JSON.parse(localStorage.getItem("visibleInit"));
    this.visibleSer01 = JSON.parse(localStorage.getItem("visibleSer01"));
    this.visibleSer02 = JSON.parse(localStorage.getItem("visibleSer02"));
    this.visibleSer03 = JSON.parse(localStorage.getItem("visibleSer03"));
    this.visibleProd01 = JSON.parse(localStorage.getItem("visibleProd01"));
    this.visibleProd02 = JSON.parse(localStorage.getItem("visibleProd02"));
    this.visibleProd03 = JSON.parse(localStorage.getItem("visibleProd03"));
    this.visibleContact = JSON.parse(localStorage.getItem("visibleContact"));
    this.visibleUserInfo = JSON.parse(localStorage.getItem("visibleUserInfo"));
    this.visibleFact = JSON.parse(localStorage.getItem("visibleFact"));
    this.visibleOrdenServicio = JSON.parse(localStorage.getItem("visibleOrdenServicio"));
    
  }

  //mostrar y ocultar el menu lateral
  public toggleTitle() {
    $('#sidebar').toggleClass('active');
    $(this).toggleClass('active');
  }

  //Progress-Circle
  public viewLoader() {

    if (!this.loader) {
      this.loader = true;
    } else {
      this.loader = false;
    }
  }

  //Login
  public onLogin() {
    this.progressLogin = true;
    this._userSrvice.login(this.userLogin).subscribe(
      res => {
        this.identity = res[0];

        //guardar sesión
        localStorage.setItem("identity", JSON.stringify(this.identity));
        this._userSrvice.login(this.userLogin).subscribe(
          res => {
            var datejson = JSON.stringify(res);
            let datjson = JSON.parse(datejson);
            let token = datjson.token;
            this.token = token;

            if (this.token.length <= 0) {

              this.progressLogin = false;

              alert("Error al inicar sesion");


            } else {
              //crear elemento en loclstorage
              localStorage.setItem("token", token);
            }
          },
          err => {
            var errorMessage = <any>err
            if (errorMessage != null) {

              this.progressLogin = false;
              this.errorMessage = err.error.messaje;
            }
          }
        );

        this.progressLogin = false;
        this.userLogin.UserName = "";

      },
      err => {
        const errorMessage = <any>err;
        if (errorMessage != null) {
          console.log(err);

          this.progressLogin = false;
          this.errorMessage = err.error.message;
          this.userLogin.Pass_Key = "";
        }
      }
    );
  }

  //Sql -> MariaDB
  syncData() {
    if (confirm("Se realizará una sincronizacion")) {
      this.viewLoader();
      this._serviceSql.getData().subscribe(
        res => {
          this._serviceMariaDB.setData(res).subscribe(
            res => {
              this.viewLoader();
              let resJson = JSON.stringify(res);
              let restext = JSON.parse(resJson);
              alert(restext.message);
              return;
            },
            err => {
              this.viewLoader();
              console.log(err);
              alert("Ha ocurrido un error");
              return;
            }
          );
        },
        err => {
          this.viewLoader();
          console.log(err);
          alert("Ha ocurrido un error");
        }
      );

    } else {
      return;
    }
  }

  //MariaDB -> SQL Server
  migrateData() {
    if (confirm("Se realizará una sincronización")) {
      this.viewLoader();
      this._serviceMariaDB.getData().subscribe(
        res => {
          let resFile = JSON.stringify(res);
          let fileJson = JSON.parse(resFile);

          this._serviceSql.setData(fileJson.message).subscribe(
            res => {
              console.log(fileJson.message);
              this.viewLoader();
              alert(res);
              return;
            },
            err => {
              this.viewLoader();
              console.log(err);
              alert("Ha ocurrido un error");
              return;
            }
          );
        },
        err => {
          this.viewLoader();
          console.log(err);
          alert("Ha ocurrido un error");
        }
      );

    } else {
      return;
    }
  }

  //informacion de usuario en imagen logo demososft #demolo
  public infoUser() {
    localStorage.removeItem("visibleSer01");
    localStorage.removeItem("visibleSer02");
    localStorage.removeItem("visibleSer03");
    localStorage.removeItem("visibleProd01");
    localStorage.removeItem("visibleProd02");
    localStorage.removeItem("visibleProd03");
    localStorage.removeItem("visibleContact");
    localStorage.removeItem("visibleInit");
    localStorage.removeItem("visibleUserInfo");
    localStorage.removeItem("visibleFact");
    localStorage.removeItem("visibleOrdenServicio");

    localStorage.setItem("visibleSer01", "false");
    localStorage.setItem("visibleSer02", "false");
    localStorage.setItem("visibleSer03", "false");
    localStorage.setItem("visibleProd01", "false");
    localStorage.setItem("visibleProd02", "false");
    localStorage.setItem("visibleProd03", "false");
    localStorage.setItem("visibleContact", "false");
    localStorage.setItem("visibleInit", "false");
    localStorage.setItem("visibleUserInfo", "true")
    localStorage.setItem("visibleFact", "false");
    localStorage.setItem("visibleOrdenServicio", "false");


    this.visibleSer01 = false;
    this.visibleSer02 = false;
    this.visibleSer03 = false
    this.visibleProd01 = false;
    this.visibleProd02 = false;
    this.visibleProd03 = false;
    this.visibleContact = false;
    this.visibleInit = false;
    this.visibleUserInfo = true;
    this.visibleFact = false;
    this.visibleOrdenServicio = false;

    this.toggleTitle();
  }

  //ver pantalla inicio
  public viewInit() {
    localStorage.removeItem("visibleSer01");
    localStorage.removeItem("visibleSer02");
    localStorage.removeItem("visibleSer03");
    localStorage.removeItem("visibleProd01");
    localStorage.removeItem("visibleProd02");
    localStorage.removeItem("visibleProd03");
    localStorage.removeItem("visibleContact");
    localStorage.removeItem("visibleInit");
    localStorage.removeItem("visibleUserInfo");
    localStorage.removeItem("visibleFact");
    localStorage.removeItem("visibleOrdenServicio");

    localStorage.setItem("visibleSer01", "false");
    localStorage.setItem("visibleSer02", "false");
    localStorage.setItem("visibleSer03", "false");
    localStorage.setItem("visibleProd01", "false");
    localStorage.setItem("visibleProd02", "false");
    localStorage.setItem("visibleProd03", "false");
    localStorage.setItem("visibleContact", "false");
    localStorage.setItem("visibleInit", "true");
    localStorage.setItem("visibleUserInfo", "false");
    localStorage.setItem("visibleFact", "false");
    localStorage.setItem("visibleOrdenServicio", "false");

    this.visibleSer01 = false;
    this.visibleSer02 = false;
    this.visibleSer03 = false
    this.visibleProd01 = false;
    this.visibleProd02 = false;
    this.visibleProd03 = false;
    this.visibleContact = false;
    this.visibleInit = true;
    this.visibleUserInfo = false;
    this.visibleFact = false;
    this.visibleOrdenServicio = false;


    this.toggleTitle();
  }


  //ver facturacion
  public Facturacion(){
    localStorage.removeItem("visibleSer01");
    localStorage.removeItem("visibleSer02");
    localStorage.removeItem("visibleSer03");
    localStorage.removeItem("visibleProd01");
    localStorage.removeItem("visibleProd02");
    localStorage.removeItem("visibleProd03");
    localStorage.removeItem("visibleContact");
    localStorage.removeItem("visibleInit");
    localStorage.removeItem("visibleUserInfo");
    localStorage.removeItem("visibleFact");
    localStorage.removeItem("visibleOrdenServicio");

    localStorage.setItem("visibleSer01", "false");
    localStorage.setItem("visibleSer02", "false");
    localStorage.setItem("visibleSer03", "false");
    localStorage.setItem("visibleProd01", "false");
    localStorage.setItem("visibleProd02", "false");
    localStorage.setItem("visibleProd03", "false");
    localStorage.setItem("visibleContact", "false");
    localStorage.setItem("visibleInit", "false");
    localStorage.setItem("visibleUserInfo", "false")
    localStorage.setItem("visibleFact", "true" )
    localStorage.setItem("visibleOrdenServicio", "false");

    this.visibleSer01 = false;
    this.visibleSer02 = false;
    this.visibleSer03 = false
    this.visibleProd01 = false;
    this.visibleProd02 = false;
    this.visibleProd03 = false;
    this.visibleContact = false;
    this.visibleInit = false;
    this.visibleUserInfo = false;
    this.visibleFact = true;
    this.visibleOrdenServicio = false;


    this.toggleTitle();
  }

  //Orden de srvicio
  public OrdenDeServicio(){
    localStorage.removeItem("visibleSer01");
    localStorage.removeItem("visibleSer02");
    localStorage.removeItem("visibleSer03");
    localStorage.removeItem("visibleProd01");
    localStorage.removeItem("visibleProd02");
    localStorage.removeItem("visibleProd03");
    localStorage.removeItem("visibleContact");
    localStorage.removeItem("visibleInit");
    localStorage.removeItem("visibleUserInfo");
    localStorage.removeItem("visibleFact");
    localStorage.removeItem("visibleOrdenServicio");

    localStorage.setItem("visibleSer01", "false");
    localStorage.setItem("visibleSer02", "false");
    localStorage.setItem("visibleSer03", "false");
    localStorage.setItem("visibleProd01", "false");
    localStorage.setItem("visibleProd02", "false");
    localStorage.setItem("visibleProd03", "false");
    localStorage.setItem("visibleContact", "false");
    localStorage.setItem("visibleInit", "false");
    localStorage.setItem("visibleUserInfo", "false")
    localStorage.setItem("visibleFact", "false");
    localStorage.setItem("visibleOrdenServicio", "true");

    this.visibleSer01 = false;
    this.visibleSer02 = false;
    this.visibleSer03 = false
    this.visibleProd01 = false;
    this.visibleProd02 = false;
    this.visibleProd03 = false;
    this.visibleContact = false;
    this.visibleInit = false;
    this.visibleUserInfo = false;
    this.visibleFact = false;
    this.visibleOrdenServicio = true;

    this.toggleTitle();
  }


  //ver pantalla ser 01
  public viewSer01() {
    localStorage.removeItem("visibleSer01");
    localStorage.removeItem("visibleSer02");
    localStorage.removeItem("visibleSer03");
    localStorage.removeItem("visibleProd01");
    localStorage.removeItem("visibleProd02");
    localStorage.removeItem("visibleProd03");
    localStorage.removeItem("visibleContact");
    localStorage.removeItem("visibleInit");
    localStorage.removeItem("visibleUserInfo");
    localStorage.removeItem("visibleFact");
    localStorage.removeItem("visibleOrdenServicio");

    localStorage.setItem("visibleSer01", "true");
    localStorage.setItem("visibleSer02", "false");
    localStorage.setItem("visibleSer03", "false");
    localStorage.setItem("visibleProd01", "false");
    localStorage.setItem("visibleProd02", "false");
    localStorage.setItem("visibleProd03", "false");
    localStorage.setItem("visibleContact", "false");
    localStorage.setItem("visibleInit", "false");
    localStorage.setItem("visibleUserInfo", "false")
    localStorage.setItem("visibleFact", "false");
    localStorage.setItem("visibleOrdenServicio", "false");


    this.visibleSer01 = true;
    this.visibleSer02 = false;
    this.visibleSer03 = false
    this.visibleProd01 = false;
    this.visibleProd02 = false;
    this.visibleProd03 = false;
    this.visibleContact = false;
    this.visibleInit = false;
    this.visibleUserInfo = false;
    this.visibleFact = false;
    this.visibleOrdenServicio = false;


    this.toggleTitle();

  }

  //ver pantalla ser 02
  public viewSer02() {
    localStorage.removeItem("visibleSer01");
    localStorage.removeItem("visibleSer02");
    localStorage.removeItem("visibleSer03");
    localStorage.removeItem("visibleProd01");
    localStorage.removeItem("visibleProd02");
    localStorage.removeItem("visibleProd03");
    localStorage.removeItem("visibleContact");
    localStorage.removeItem("visibleInit");
    localStorage.removeItem("visibleUserInfo");
    localStorage.removeItem("visibleFact");
    localStorage.removeItem("visibleOrdenServicio");

    localStorage.setItem("visibleSer01", "false");
    localStorage.setItem("visibleSer02", "true");
    localStorage.setItem("visibleSer03", "false");
    localStorage.setItem("visibleProd01", "false");
    localStorage.setItem("visibleProd02", "false");
    localStorage.setItem("visibleProd03", "false");
    localStorage.setItem("visibleContact", "false");
    localStorage.setItem("visibleInit", "false");
    localStorage.setItem("visibleUserInfo", "false")
    localStorage.setItem("visibleFact", "false");
    localStorage.setItem("visibleOrdenServicio", "false");


    this.visibleSer01 = false;
    this.visibleSer02 = true;
    this.visibleSer03 = false
    this.visibleProd01 = false;
    this.visibleProd02 = false;
    this.visibleProd03 = false;
    this.visibleContact = false;
    this.visibleInit = false;
    this.visibleUserInfo = false;
    this.visibleFact = false;
    this.visibleOrdenServicio = false;

    this.toggleTitle();

  }

  //ver pantalla ser 03
  public viewSer03() {
    localStorage.removeItem("visibleSer01");
    localStorage.removeItem("visibleSer02");
    localStorage.removeItem("visibleSer03");
    localStorage.removeItem("visibleProd01");
    localStorage.removeItem("visibleProd02");
    localStorage.removeItem("visibleProd03");
    localStorage.removeItem("visibleContact");
    localStorage.removeItem("visibleInit");
    localStorage.removeItem("visibleUserInfo");
    localStorage.removeItem("visibleFact");
    localStorage.removeItem("visibleOrdenServicio");

    localStorage.setItem("visibleSer01", "false");
    localStorage.setItem("visibleSer02", "false");
    localStorage.setItem("visibleSer03", "true");
    localStorage.setItem("visibleProd01", "false");
    localStorage.setItem("visibleProd02", "false");
    localStorage.setItem("visibleProd03", "false");
    localStorage.setItem("visibleContact", "false");
    localStorage.setItem("visibleInit", "false");
    localStorage.setItem("visibleUserInfo", "false")
    localStorage.setItem("visibleFact", "false");
    localStorage.setItem("visibleOrdenServicio", "false");


    this.visibleSer01 = false;
    this.visibleSer02 = false;
    this.visibleSer03 = true;
    this.visibleProd01 = false;
    this.visibleProd02 = false;
    this.visibleProd03 = false;
    this.visibleContact = false;
    this.visibleInit = false;
    this.visibleUserInfo = false;
    this.visibleFact = false;
    this.visibleOrdenServicio = false;


    this.toggleTitle();

  }

  //ver pantalla prod 01
  public viewProd01() {
    localStorage.removeItem("visibleSer01");
    localStorage.removeItem("visibleSer02");
    localStorage.removeItem("visibleSer03");
    localStorage.removeItem("visibleProd01");
    localStorage.removeItem("visibleProd02");
    localStorage.removeItem("visibleProd03");
    localStorage.removeItem("visibleContact");
    localStorage.removeItem("visibleInit");
    localStorage.removeItem("visibleUserInfo");
    localStorage.removeItem("visibleFact");
    localStorage.removeItem("visibleOrdenServicio");

    localStorage.setItem("visibleSer01", "false");
    localStorage.setItem("visibleSer02", "false");
    localStorage.setItem("visibleSer03", "false");
    localStorage.setItem("visibleProd01", "true");
    localStorage.setItem("visibleProd02", "false");
    localStorage.setItem("visibleProd03", "false");
    localStorage.setItem("visibleContact", "false");
    localStorage.setItem("visibleInit", "false");
    localStorage.setItem("visibleUserInfo", "false")
    localStorage.setItem("visibleFact", "false");
    localStorage.setItem("visibleOrdenServicio", "false");


    this.visibleSer01 = false;
    this.visibleSer02 = false;
    this.visibleSer03 = false
    this.visibleProd01 = true;
    this.visibleProd02 = false;
    this.visibleProd03 = false;
    this.visibleContact = false;
    this.visibleInit = false;
    this.visibleUserInfo = false;
    this.visibleFact = false;
    this.visibleOrdenServicio = false;

    this.toggleTitle();
  }

  //ver pantalla prod 02
  public viewProd02() {
    localStorage.removeItem("visibleSer01");
    localStorage.removeItem("visibleSer02");
    localStorage.removeItem("visibleSer03");
    localStorage.removeItem("visibleProd01");
    localStorage.removeItem("visibleProd02");
    localStorage.removeItem("visibleProd03");
    localStorage.removeItem("visibleContact");
    localStorage.removeItem("visibleInit");
    localStorage.removeItem("visibleUserInfo");
    localStorage.removeItem("visibleFact");
    localStorage.removeItem("visibleOrdenServicio");

    localStorage.setItem("visibleSer01", "false");
    localStorage.setItem("visibleSer02", "false");
    localStorage.setItem("visibleSer03", "false");
    localStorage.setItem("visibleProd01", "false");
    localStorage.setItem("visibleProd02", "true");
    localStorage.setItem("visibleProd03", "false");
    localStorage.setItem("visibleContact", "false");
    localStorage.setItem("visibleInit", "false");
    localStorage.setItem("visibleUserInfo", "false")
    localStorage.setItem("visibleFact", "false");
    localStorage.setItem("visibleOrdenServicio", "false");


    this.visibleSer01 = false;
    this.visibleSer02 = false;
    this.visibleSer03 = false
    this.visibleProd01 = false;
    this.visibleProd02 = true;
    this.visibleProd03 = false;
    this.visibleContact = false;
    this.visibleInit = false;
    this.visibleUserInfo = false;
    this.visibleFact = false;
    this.visibleOrdenServicio = false;


    this.toggleTitle();

  }

  //ver pantalla prod 03
  public viewProd03() {
    localStorage.removeItem("visibleSer01");
    localStorage.removeItem("visibleSer02");
    localStorage.removeItem("visibleSer03");
    localStorage.removeItem("visibleProd01");
    localStorage.removeItem("visibleProd02");
    localStorage.removeItem("visibleProd03");
    localStorage.removeItem("visibleContact");
    localStorage.removeItem("visibleInit");
    localStorage.removeItem("visibleUserInfo");
    localStorage.removeItem("visibleFact");
    localStorage.removeItem("visibleOrdenServicio");

    localStorage.setItem("visibleSer01", "false");
    localStorage.setItem("visibleSer02", "false");
    localStorage.setItem("visibleSer03", "false");
    localStorage.setItem("visibleProd01", "false");
    localStorage.setItem("visibleProd02", "false");
    localStorage.setItem("visibleProd03", "true");
    localStorage.setItem("visibleContact", "false");
    localStorage.setItem("visibleInit", "false");
    localStorage.setItem("visibleUserInfo", "false")
    localStorage.setItem("visibleFact", "false");
    localStorage.setItem("visibleOrdenServicio", "false");


    this.visibleSer01 = false;
    this.visibleSer02 = false;
    this.visibleSer03 = false
    this.visibleProd01 = false;
    this.visibleProd02 = false;
    this.visibleProd03 = true;
    this.visibleContact = false;
    this.visibleInit = false;
    this.visibleUserInfo = false;
    this.visibleFact = false;
    this.visibleOrdenServicio = false;

    this.toggleTitle();

  }

  //ver pantalla contact
  public viewContact() {

    localStorage.removeItem("visibleSer01");
    localStorage.removeItem("visibleSer02");
    localStorage.removeItem("visibleSer03");
    localStorage.removeItem("visibleProd01");
    localStorage.removeItem("visibleProd02");
    localStorage.removeItem("visibleProd03");
    localStorage.removeItem("visibleContact");
    localStorage.removeItem("visibleInit");
    localStorage.removeItem("visibleUserInfo");
    localStorage.removeItem("visibleFact");
    localStorage.removeItem("visibleOrdenServicio");

    localStorage.setItem("visibleSer01", "false");
    localStorage.setItem("visibleSer02", "false");
    localStorage.setItem("visibleSer03", "false");
    localStorage.setItem("visibleProd01", "false");
    localStorage.setItem("visibleProd02", "false");
    localStorage.setItem("visibleProd03", "false");
    localStorage.setItem("visibleContact", "true");
    localStorage.setItem("visibleInit", "false");
    localStorage.setItem("visibleUserInfo", "false")
    localStorage.setItem("visibleFact", "false");
    localStorage.setItem("visibleOrdenServicio", "false");

    this.visibleSer01 = false;
    this.visibleSer02 = false;
    this.visibleSer03 = false
    this.visibleProd01 = false;
    this.visibleProd02 = false;
    this.visibleProd03 = false;
    this.visibleContact = true;
    this.visibleInit = false;
    this.visibleUserInfo = false;
    this.visibleFact = false;
    this.visibleOrdenServicio = false;

    this.toggleTitle();

  }

  //cerrar sesion
  public logout() {
    if (confirm("Está a punto de cerrar sesión")) {
      localStorage.removeItem("identity");
      localStorage.removeItem("token");
      localStorage.removeItem("visibleSer01");
      localStorage.removeItem("visibleSer02");
      localStorage.removeItem("visibleSer03");
      localStorage.removeItem("visibleProd01");
      localStorage.removeItem("visibleProd02");
      localStorage.removeItem("visibleProd03");
      localStorage.removeItem("visibleContact");
      localStorage.removeItem("visibleInit");
      localStorage.removeItem("visibleFact");
      localStorage.removeItem("visibleUserInfo");
      localStorage.removeItem("visibleOrdenServicio");
      
      localStorage.clear();

      this.visibleSer01 = null;
      this.visibleSer02 = null;
      this.visibleSer03 = null
      this.visibleProd01 = null;
      this.visibleProd02 = null;
      this.visibleProd03 = null;
      this.visibleContact = null;
      this.visibleInit = null;
      this.visibleUserInfo = null;
      this.identity = null;
      this.token = null;
      this.visibleFact = null;
      this.visibleOrdenServicio = null;
      this.userLogin.Pass_Key = null;
    } else {
      return;
    }
  }
}