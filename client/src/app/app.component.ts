//import
import { Component, OnInit, ɵNoopNgZone } from '@angular/core';
import { JsonPipe } from '@angular/common';

//Modelos
import { User } from "./models/user.models";
import { UserdataSql } from "./models/usersql.models"
import { DataTableUSer } from "./models/dataTableUser.models"

//Servicios
import { UserService } from "./services/user.service";
import { ServiceSql } from "./services/DataSqlServer";
import { ServiceMariaBD } from "./services/DataMariaBD";


//jQuery
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServiceMariaBD, UserService, ServiceSql]
})

export class AppComponent implements OnInit {

  //Modelos
  public user: User;

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
  public initlog: boolean = false;
  public loader: boolean = false;

  constructor(
    //iniciar servicio
    private _userSrvice: UserService,
    private _serviceSql: ServiceSql,
    private _serviceMariaDB: ServiceMariaBD
  ) {
    //iniciar Modelos (No es tan necesario)
    this.user = new User("", "");
  }

  //al inicar la página
  public ngOnInit() {

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
  }

  //mostrar y ocultar el menu lateral
  public toggleTitle() {
    $('#sidebar').toggleClass('active');
    $(this).toggleClass('active');
  }

  public viewLoader() {

    if (!this.loader) {
      this.loader = true;
    } else {
      this.loader = false;
    }
  }
  public onSubmit() {
    this.initlog = true;
    this._userSrvice.signup(this.user).subscribe(
      res => {
        this.identity = res[0];

        if (!this.identity) {

          this.initlog = false;
          alert("Usuario no identificado");

        } else {
          //guardar sesión
          localStorage.setItem("identity", JSON.stringify(this.identity));
          this._userSrvice.signup(this.user).subscribe(
            res => {
              var datejson = JSON.stringify(res);
              let datjson = JSON.parse(datejson);
              let token = datjson.token;
              this.token = token;

              if (this.token.length <= 0) {

                this.initlog = false;

                alert("Error al inicar sesion");


              } else {
                //crear elemento en loclstorage
                localStorage.setItem("token", token);
              }
            },
            err => {
              var errorMessage = <any>err
              if (errorMessage != null) {

                this.initlog = false;
                this.errorMessage = err.error.messaje;
              }
            }
          );

          this.initlog = false;
          this.user.UserName = "";
        }
      },
      err => {
        const errorMessage = <any>err;
        if (errorMessage != null) {
          console.log(err);

          this.initlog = false;
          this.errorMessage = err.error.message;
          this.user.Pass_Key = "";
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
           res=>{
            this.viewLoader();
            let resJson = JSON.stringify(res);
            let restext = JSON.parse(resJson);
            alert(restext.message);
            return;
           },
           err=>{
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
            res => {console.log(fileJson.message);
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

    localStorage.setItem("visibleSer01", "false");
    localStorage.setItem("visibleSer02", "false");
    localStorage.setItem("visibleSer03", "false");
    localStorage.setItem("visibleProd01", "false");
    localStorage.setItem("visibleProd02", "false");
    localStorage.setItem("visibleProd03", "false");
    localStorage.setItem("visibleContact", "false");
    localStorage.setItem("visibleInit", "true");
    localStorage.setItem("visibleUserInfo", "false")

    this.visibleSer01 = false;
    this.visibleSer02 = false;
    this.visibleSer03 = false
    this.visibleProd01 = false;
    this.visibleProd02 = false;
    this.visibleProd03 = false;
    this.visibleContact = false;
    this.visibleInit = true;
    this.visibleUserInfo = false;


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

    localStorage.setItem("visibleSer01", "true");
    localStorage.setItem("visibleSer02", "false");
    localStorage.setItem("visibleSer03", "false");
    localStorage.setItem("visibleProd01", "false");
    localStorage.setItem("visibleProd02", "false");
    localStorage.setItem("visibleProd03", "false");
    localStorage.setItem("visibleContact", "false");
    localStorage.setItem("visibleInit", "false");
    localStorage.setItem("visibleUserInfo", "false")


    this.visibleSer01 = true;
    this.visibleSer02 = false;
    this.visibleSer03 = false
    this.visibleProd01 = false;
    this.visibleProd02 = false;
    this.visibleProd03 = false;
    this.visibleContact = false;
    this.visibleInit = false;
    this.visibleUserInfo = false;


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

    localStorage.setItem("visibleSer01", "false");
    localStorage.setItem("visibleSer02", "true");
    localStorage.setItem("visibleSer03", "false");
    localStorage.setItem("visibleProd01", "false");
    localStorage.setItem("visibleProd02", "false");
    localStorage.setItem("visibleProd03", "false");
    localStorage.setItem("visibleContact", "false");
    localStorage.setItem("visibleInit", "false");
    localStorage.setItem("visibleUserInfo", "false")


    this.visibleSer01 = false;
    this.visibleSer02 = true;
    this.visibleSer03 = false
    this.visibleProd01 = false;
    this.visibleProd02 = false;
    this.visibleProd03 = false;
    this.visibleContact = false;
    this.visibleInit = false;
    this.visibleUserInfo = false;

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

    localStorage.setItem("visibleSer01", "false");
    localStorage.setItem("visibleSer02", "false");
    localStorage.setItem("visibleSer03", "true");
    localStorage.setItem("visibleProd01", "false");
    localStorage.setItem("visibleProd02", "false");
    localStorage.setItem("visibleProd03", "false");
    localStorage.setItem("visibleContact", "false");
    localStorage.setItem("visibleInit", "false");
    localStorage.setItem("visibleUserInfo", "false")


    this.visibleSer01 = false;
    this.visibleSer02 = false;
    this.visibleSer03 = true;
    this.visibleProd01 = false;
    this.visibleProd02 = false;
    this.visibleProd03 = false;
    this.visibleContact = false;
    this.visibleInit = false;
    this.visibleUserInfo = false;


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

    localStorage.setItem("visibleSer01", "false");
    localStorage.setItem("visibleSer02", "false");
    localStorage.setItem("visibleSer03", "false");
    localStorage.setItem("visibleProd01", "true");
    localStorage.setItem("visibleProd02", "false");
    localStorage.setItem("visibleProd03", "false");
    localStorage.setItem("visibleContact", "false");
    localStorage.setItem("visibleInit", "false");
    localStorage.setItem("visibleUserInfo", "false")


    this.visibleSer01 = false;
    this.visibleSer02 = false;
    this.visibleSer03 = false
    this.visibleProd01 = true;
    this.visibleProd02 = false;
    this.visibleProd03 = false;
    this.visibleContact = false;
    this.visibleInit = false;
    this.visibleUserInfo = false;

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

    localStorage.setItem("visibleSer01", "false");
    localStorage.setItem("visibleSer02", "false");
    localStorage.setItem("visibleSer03", "false");
    localStorage.setItem("visibleProd01", "false");
    localStorage.setItem("visibleProd02", "true");
    localStorage.setItem("visibleProd03", "false");
    localStorage.setItem("visibleContact", "false");
    localStorage.setItem("visibleInit", "false");
    localStorage.setItem("visibleUserInfo", "false")


    this.visibleSer01 = false;
    this.visibleSer02 = false;
    this.visibleSer03 = false
    this.visibleProd01 = false;
    this.visibleProd02 = true;
    this.visibleProd03 = false;
    this.visibleContact = false;
    this.visibleInit = false;
    this.visibleUserInfo = false;


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

    localStorage.setItem("visibleSer01", "false");
    localStorage.setItem("visibleSer02", "false");
    localStorage.setItem("visibleSer03", "false");
    localStorage.setItem("visibleProd01", "false");
    localStorage.setItem("visibleProd02", "false");
    localStorage.setItem("visibleProd03", "true");
    localStorage.setItem("visibleContact", "false");
    localStorage.setItem("visibleInit", "false");
    localStorage.setItem("visibleUserInfo", "false")


    this.visibleSer01 = false;
    this.visibleSer02 = false;
    this.visibleSer03 = false
    this.visibleProd01 = false;
    this.visibleProd02 = false;
    this.visibleProd03 = true;
    this.visibleContact = false;
    this.visibleInit = false;
    this.visibleUserInfo = false;

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

    localStorage.setItem("visibleSer01", "false");
    localStorage.setItem("visibleSer02", "false");
    localStorage.setItem("visibleSer03", "false");
    localStorage.setItem("visibleProd01", "false");
    localStorage.setItem("visibleProd02", "false");
    localStorage.setItem("visibleProd03", "false");
    localStorage.setItem("visibleContact", "true");
    localStorage.setItem("visibleInit", "false");
    localStorage.setItem("visibleUserInfo", "false")

    this.visibleSer01 = false;
    this.visibleSer02 = false;
    this.visibleSer03 = false
    this.visibleProd01 = false;
    this.visibleProd02 = false;
    this.visibleProd03 = false;
    this.visibleContact = true;
    this.visibleInit = false;
    this.visibleUserInfo = false;

    this.toggleTitle();

  }

  public viewUserInfo() {
    localStorage.removeItem("visibleSer01");
    localStorage.removeItem("visibleSer02");
    localStorage.removeItem("visibleSer03");
    localStorage.removeItem("visibleProd01");
    localStorage.removeItem("visibleProd02");
    localStorage.removeItem("visibleProd03");
    localStorage.removeItem("visibleContact");
    localStorage.removeItem("visibleInit");
    localStorage.removeItem("visibleUserInfo");

    localStorage.setItem("visibleSer01", "false");
    localStorage.setItem("visibleSer02", "false");
    localStorage.setItem("visibleSer03", "false");
    localStorage.setItem("visibleProd01", "false");
    localStorage.setItem("visibleProd02", "false");
    localStorage.setItem("visibleProd03", "false");
    localStorage.setItem("visibleContact", "false");
    localStorage.setItem("visibleInit", "false");
    localStorage.setItem("visibleUserInfo", "true")


    this.visibleSer01 = false;
    this.visibleSer02 = false;
    this.visibleSer03 = false
    this.visibleProd01 = false;
    this.visibleProd02 = false;
    this.visibleProd03 = false;
    this.visibleContact = false;
    this.visibleInit = false;
    this.visibleUserInfo = true;

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

      localStorage.removeItem("visibleUserInfo");
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
    } else {
      return;
    }
  }
}