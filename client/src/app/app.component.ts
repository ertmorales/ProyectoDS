//import
import { Component, OnInit, ɵNoopNgZone } from '@angular/core';
import { JsonPipe } from '@angular/common';

//Modelos
import { UserLogin } from "./models/usuario.models/usuarioLogin";

//Servicios
import { UsuarioService } from "./services/usuario.service";
import { ServiceSql } from "./services/DataSqlServer";
import { ServiceMariaBD } from "./services/DataMariaBD";
import { DispositivoService } from "./services/dispositivo.service";


//jQuery
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    ServiceMariaBD,
    UsuarioService,
    ServiceSql,
    DispositivoService
  ]
})

export class AppComponent implements OnInit {

  //Modelos
  public userLogin: UserLogin;

  //datos usuario
  public identity;
  public token;

  //UUID dispositivo
  public UUID;

  //Alert
  public errorMessage: any;
  public alertCloseSession: boolean = false;

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

  public countSession: number = 10;

  constructor(
    //iniciar servicios
    private _userSrvice: UsuarioService,
    private _serviceSql: ServiceSql,
    private _serviceMariaDB: ServiceMariaBD,
    private _serviceDispositivos: DispositivoService
  ) {
    //iniciar Modelos (No es tan necesario)
    this.userLogin = new UserLogin("", "");
  }

  //al inicar la página
  public ngOnInit() {
    //Verificar a cada minuto si el usuario está activo
    this.closeSessionInactive();

    //Obtiene UUID
    this.generateUUID();


    //datos guardados en memoria, si se actualiuza la página no se cierra la sesion
    this.identity = this._userSrvice.getIdentity();
    this.token = this._userSrvice.getToken();
    //cargar pantallas que se tenian abiertas
    this.visibleInit = JSON.parse(sessionStorage.getItem("visibleInit"));
    this.visibleSer01 = JSON.parse(sessionStorage.getItem("visibleSer01"));
    this.visibleSer02 = JSON.parse(sessionStorage.getItem("visibleSer02"));
    this.visibleSer03 = JSON.parse(sessionStorage.getItem("visibleSer03"));
    this.visibleProd01 = JSON.parse(sessionStorage.getItem("visibleProd01"));
    this.visibleProd02 = JSON.parse(sessionStorage.getItem("visibleProd02"));
    this.visibleProd03 = JSON.parse(sessionStorage.getItem("visibleProd03"));
    this.visibleContact = JSON.parse(sessionStorage.getItem("visibleContact"));
    this.visibleUserInfo = JSON.parse(sessionStorage.getItem("visibleUserInfo"));
    this.visibleFact = JSON.parse(sessionStorage.getItem("visibleFact"));
    this.visibleOrdenServicio = JSON.parse(sessionStorage.getItem("visibleOrdenServicio"));
  }

  //Crear UUID
  public async generateUUID() {
    //localStorage.removeItem("UUID");
    let UUID = this._serviceDispositivos.getUUID();
    if (UUID === null) {
      //Solicitar UUID al servidor
      this._serviceDispositivos.generateUUId().subscribe(
        async res => {
          let uuid_disp = JSON.stringify(res);
          let _res = JSON.parse(uuid_disp);
          if (_res.message === null) {
            alert("Ha ocurrido un error al identificar el dispositivo");
          } else {
            //Guardar UUID en base de datos
            localStorage.setItem("UUID", _res.message);
            await this.saveUUID(localStorage.getItem("UUID"));
            console.log(localStorage.getItem("UUID"))
          }
        },
        err => {
          console.log(err);
          alert("No se ha podido identificar el dispositivo")
        }
      );
    } else {
      //en base de datos colocar que el dispositivo esta activo
      console.log({ UUID });
    }
  }

  //Guardar dispositivo en base de datos
  public saveUUID(UUID: string) {
    this._serviceDispositivos.setUUID(localStorage.getItem("UUID")).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
        alert("Ha ocurrido un error al registrar el dispositivo")
      }
    );
  }

  //cierre de sesion por inactividad

  time: number = 0;
  interval: any;

  count: number = 15;
  intervalRetry: any;

  public closeSessionInactive() {

    if (this._userSrvice.getIdentity()) {

      this.interval = setInterval(() => {
        this.time++;
        console.log("Contando " + this.time)

        if (this.time === 20) {
          this.alertCloseSession = true;
          clearInterval(this.interval);
          this.time = 0;

          this.intervalRetry = setInterval(() => {
            this.count--;
            console.log("quedan " + this.count);

            if (this.count === 0) {
              clearInterval(this.intervalRetry);
              this.count = 15;

              //
              this.errorMessage = "La sesion ha caducado"
              this.alertCloseSession = false;
              sessionStorage.removeItem("identity");
              sessionStorage.removeItem("token");
              sessionStorage.removeItem("visibleSer01");
              sessionStorage.removeItem("visibleSer02");
              sessionStorage.removeItem("visibleSer03");
              sessionStorage.removeItem("visibleProd01");
              sessionStorage.removeItem("visibleProd02");
              sessionStorage.removeItem("visibleProd03");
              sessionStorage.removeItem("visibleContact");
              sessionStorage.removeItem("visibleInit");
              sessionStorage.removeItem("visibleFact");
              sessionStorage.removeItem("visibleUserInfo");
              sessionStorage.removeItem("visibleOrdenServicio");

              sessionStorage.clear();

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
              //

            }

          }, 1000);

        }

      }, 1000)


    } else {
      console.log("No se ha inicado sesion")
    }
  }

  //continuar con la sesion, cancelar cierre por inactividad
  public continue(){
    this.alertCloseSession = false;
    clearInterval(this.intervalRetry);
   
    this.interval = setInterval(() => {
      this.time++;
      console.log("Contando " + this.time)

      if (this.time === 20) {
        this.alertCloseSession = true;
        clearInterval(this.interval);
        this.time = 0;

        this.intervalRetry = setInterval(() => {
          this.count--;
          console.log("quedan " + this.count);

          if (this.count === 0) {
            clearInterval(this.intervalRetry);
            this.count = 15;

            //
            this.errorMessage = "La sesion ha caducado"
            this.alertCloseSession = false;
            sessionStorage.removeItem("identity");
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("visibleSer01");
            sessionStorage.removeItem("visibleSer02");
            sessionStorage.removeItem("visibleSer03");
            sessionStorage.removeItem("visibleProd01");
            sessionStorage.removeItem("visibleProd02");
            sessionStorage.removeItem("visibleProd03");
            sessionStorage.removeItem("visibleContact");
            sessionStorage.removeItem("visibleInit");
            sessionStorage.removeItem("visibleFact");
            sessionStorage.removeItem("visibleUserInfo");
            sessionStorage.removeItem("visibleOrdenServicio");

            sessionStorage.clear();

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
            //

          }

        }, 1000);

      }

    }, 1000)
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
        //datos del usuario
        this.identity = res[0];
        //guardar sesión
        sessionStorage.setItem("identity", JSON.stringify(this.identity));
        //No mostrar progres bar
        this.progressLogin = false;
        //verificar actividad del usuario
        this.closeSessionInactive();

      },
      err => {
        //en caso de error, muestra el error
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

  //db Sql -> MariaDB
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

  //db MariaDB -> SQL Server
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
    sessionStorage.removeItem("visibleSer01");
    sessionStorage.removeItem("visibleSer02");
    sessionStorage.removeItem("visibleSer03");
    sessionStorage.removeItem("visibleProd01");
    sessionStorage.removeItem("visibleProd02");
    sessionStorage.removeItem("visibleProd03");
    sessionStorage.removeItem("visibleContact");
    sessionStorage.removeItem("visibleInit");
    sessionStorage.removeItem("visibleUserInfo");
    sessionStorage.removeItem("visibleFact");
    sessionStorage.removeItem("visibleOrdenServicio");

    sessionStorage.setItem("visibleSer01", "false");
    sessionStorage.setItem("visibleSer02", "false");
    sessionStorage.setItem("visibleSer03", "false");
    sessionStorage.setItem("visibleProd01", "false");
    sessionStorage.setItem("visibleProd02", "false");
    sessionStorage.setItem("visibleProd03", "false");
    sessionStorage.setItem("visibleContact", "false");
    sessionStorage.setItem("visibleInit", "false");
    sessionStorage.setItem("visibleUserInfo", "true")
    sessionStorage.setItem("visibleFact", "false");
    sessionStorage.setItem("visibleOrdenServicio", "false");

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
    sessionStorage.removeItem("visibleSer01");
    sessionStorage.removeItem("visibleSer02");
    sessionStorage.removeItem("visibleSer03");
    sessionStorage.removeItem("visibleProd01");
    sessionStorage.removeItem("visibleProd02");
    sessionStorage.removeItem("visibleProd03");
    sessionStorage.removeItem("visibleContact");
    sessionStorage.removeItem("visibleInit");
    sessionStorage.removeItem("visibleUserInfo");
    sessionStorage.removeItem("visibleFact");
    sessionStorage.removeItem("visibleOrdenServicio");

    sessionStorage.setItem("visibleSer01", "false");
    sessionStorage.setItem("visibleSer02", "false");
    sessionStorage.setItem("visibleSer03", "false");
    sessionStorage.setItem("visibleProd01", "false");
    sessionStorage.setItem("visibleProd02", "false");
    sessionStorage.setItem("visibleProd03", "false");
    sessionStorage.setItem("visibleContact", "false");
    sessionStorage.setItem("visibleInit", "true");
    sessionStorage.setItem("visibleUserInfo", "false");
    sessionStorage.setItem("visibleFact", "false");
    sessionStorage.setItem("visibleOrdenServicio", "false");

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
  public Facturacion() {
    sessionStorage.removeItem("visibleSer01");
    sessionStorage.removeItem("visibleSer02");
    sessionStorage.removeItem("visibleSer03");
    sessionStorage.removeItem("visibleProd01");
    sessionStorage.removeItem("visibleProd02");
    sessionStorage.removeItem("visibleProd03");
    sessionStorage.removeItem("visibleContact");
    sessionStorage.removeItem("visibleInit");
    sessionStorage.removeItem("visibleUserInfo");
    sessionStorage.removeItem("visibleFact");
    sessionStorage.removeItem("visibleOrdenServicio");

    sessionStorage.setItem("visibleSer01", "false");
    sessionStorage.setItem("visibleSer02", "false");
    sessionStorage.setItem("visibleSer03", "false");
    sessionStorage.setItem("visibleProd01", "false");
    sessionStorage.setItem("visibleProd02", "false");
    sessionStorage.setItem("visibleProd03", "false");
    sessionStorage.setItem("visibleContact", "false");
    sessionStorage.setItem("visibleInit", "false");
    sessionStorage.setItem("visibleUserInfo", "false")
    sessionStorage.setItem("visibleFact", "true")
    sessionStorage.setItem("visibleOrdenServicio", "false");

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
  public OrdenDeServicio() {
    sessionStorage.removeItem("visibleSer01");
    sessionStorage.removeItem("visibleSer02");
    sessionStorage.removeItem("visibleSer03");
    sessionStorage.removeItem("visibleProd01");
    sessionStorage.removeItem("visibleProd02");
    sessionStorage.removeItem("visibleProd03");
    sessionStorage.removeItem("visibleContact");
    sessionStorage.removeItem("visibleInit");
    sessionStorage.removeItem("visibleUserInfo");
    sessionStorage.removeItem("visibleFact");
    sessionStorage.removeItem("visibleOrdenServicio");

    sessionStorage.setItem("visibleSer01", "false");
    sessionStorage.setItem("visibleSer02", "false");
    sessionStorage.setItem("visibleSer03", "false");
    sessionStorage.setItem("visibleProd01", "false");
    sessionStorage.setItem("visibleProd02", "false");
    sessionStorage.setItem("visibleProd03", "false");
    sessionStorage.setItem("visibleContact", "false");
    sessionStorage.setItem("visibleInit", "false");
    sessionStorage.setItem("visibleUserInfo", "false")
    sessionStorage.setItem("visibleFact", "false");
    sessionStorage.setItem("visibleOrdenServicio", "true");

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
    sessionStorage.removeItem("visibleSer01");
    sessionStorage.removeItem("visibleSer02");
    sessionStorage.removeItem("visibleSer03");
    sessionStorage.removeItem("visibleProd01");
    sessionStorage.removeItem("visibleProd02");
    sessionStorage.removeItem("visibleProd03");
    sessionStorage.removeItem("visibleContact");
    sessionStorage.removeItem("visibleInit");
    sessionStorage.removeItem("visibleUserInfo");
    sessionStorage.removeItem("visibleFact");
    sessionStorage.removeItem("visibleOrdenServicio");

    sessionStorage.setItem("visibleSer01", "true");
    sessionStorage.setItem("visibleSer02", "false");
    sessionStorage.setItem("visibleSer03", "false");
    sessionStorage.setItem("visibleProd01", "false");
    sessionStorage.setItem("visibleProd02", "false");
    sessionStorage.setItem("visibleProd03", "false");
    sessionStorage.setItem("visibleContact", "false");
    sessionStorage.setItem("visibleInit", "false");
    sessionStorage.setItem("visibleUserInfo", "false")
    sessionStorage.setItem("visibleFact", "false");
    sessionStorage.setItem("visibleOrdenServicio", "false");

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
    sessionStorage.removeItem("visibleSer01");
    sessionStorage.removeItem("visibleSer02");
    sessionStorage.removeItem("visibleSer03");
    sessionStorage.removeItem("visibleProd01");
    sessionStorage.removeItem("visibleProd02");
    sessionStorage.removeItem("visibleProd03");
    sessionStorage.removeItem("visibleContact");
    sessionStorage.removeItem("visibleInit");
    sessionStorage.removeItem("visibleUserInfo");
    sessionStorage.removeItem("visibleFact");
    sessionStorage.removeItem("visibleOrdenServicio");

    sessionStorage.setItem("visibleSer01", "false");
    sessionStorage.setItem("visibleSer02", "true");
    sessionStorage.setItem("visibleSer03", "false");
    sessionStorage.setItem("visibleProd01", "false");
    sessionStorage.setItem("visibleProd02", "false");
    sessionStorage.setItem("visibleProd03", "false");
    sessionStorage.setItem("visibleContact", "false");
    sessionStorage.setItem("visibleInit", "false");
    sessionStorage.setItem("visibleUserInfo", "false")
    sessionStorage.setItem("visibleFact", "false");
    sessionStorage.setItem("visibleOrdenServicio", "false");

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
    sessionStorage.removeItem("visibleSer01");
    sessionStorage.removeItem("visibleSer02");
    sessionStorage.removeItem("visibleSer03");
    sessionStorage.removeItem("visibleProd01");
    sessionStorage.removeItem("visibleProd02");
    sessionStorage.removeItem("visibleProd03");
    sessionStorage.removeItem("visibleContact");
    sessionStorage.removeItem("visibleInit");
    sessionStorage.removeItem("visibleUserInfo");
    sessionStorage.removeItem("visibleFact");
    sessionStorage.removeItem("visibleOrdenServicio");

    sessionStorage.setItem("visibleSer01", "false");
    sessionStorage.setItem("visibleSer02", "false");
    sessionStorage.setItem("visibleSer03", "true");
    sessionStorage.setItem("visibleProd01", "false");
    sessionStorage.setItem("visibleProd02", "false");
    sessionStorage.setItem("visibleProd03", "false");
    sessionStorage.setItem("visibleContact", "false");
    sessionStorage.setItem("visibleInit", "false");
    sessionStorage.setItem("visibleUserInfo", "false")
    sessionStorage.setItem("visibleFact", "false");
    sessionStorage.setItem("visibleOrdenServicio", "false");

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
    sessionStorage.removeItem("visibleSer01");
    sessionStorage.removeItem("visibleSer02");
    sessionStorage.removeItem("visibleSer03");
    sessionStorage.removeItem("visibleProd01");
    sessionStorage.removeItem("visibleProd02");
    sessionStorage.removeItem("visibleProd03");
    sessionStorage.removeItem("visibleContact");
    sessionStorage.removeItem("visibleInit");
    sessionStorage.removeItem("visibleUserInfo");
    sessionStorage.removeItem("visibleFact");
    sessionStorage.removeItem("visibleOrdenServicio");

    sessionStorage.setItem("visibleSer01", "false");
    sessionStorage.setItem("visibleSer02", "false");
    sessionStorage.setItem("visibleSer03", "false");
    sessionStorage.setItem("visibleProd01", "true");
    sessionStorage.setItem("visibleProd02", "false");
    sessionStorage.setItem("visibleProd03", "false");
    sessionStorage.setItem("visibleContact", "false");
    sessionStorage.setItem("visibleInit", "false");
    sessionStorage.setItem("visibleUserInfo", "false")
    sessionStorage.setItem("visibleFact", "false");
    sessionStorage.setItem("visibleOrdenServicio", "false");

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
    sessionStorage.removeItem("visibleSer01");
    sessionStorage.removeItem("visibleSer02");
    sessionStorage.removeItem("visibleSer03");
    sessionStorage.removeItem("visibleProd01");
    sessionStorage.removeItem("visibleProd02");
    sessionStorage.removeItem("visibleProd03");
    sessionStorage.removeItem("visibleContact");
    sessionStorage.removeItem("visibleInit");
    sessionStorage.removeItem("visibleUserInfo");
    sessionStorage.removeItem("visibleFact");
    sessionStorage.removeItem("visibleOrdenServicio");

    sessionStorage.setItem("visibleSer01", "false");
    sessionStorage.setItem("visibleSer02", "false");
    sessionStorage.setItem("visibleSer03", "false");
    sessionStorage.setItem("visibleProd01", "false");
    sessionStorage.setItem("visibleProd02", "true");
    sessionStorage.setItem("visibleProd03", "false");
    sessionStorage.setItem("visibleContact", "false");
    sessionStorage.setItem("visibleInit", "false");
    sessionStorage.setItem("visibleUserInfo", "false")
    sessionStorage.setItem("visibleFact", "false");
    sessionStorage.setItem("visibleOrdenServicio", "false");

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
    sessionStorage.removeItem("visibleSer01");
    sessionStorage.removeItem("visibleSer02");
    sessionStorage.removeItem("visibleSer03");
    sessionStorage.removeItem("visibleProd01");
    sessionStorage.removeItem("visibleProd02");
    sessionStorage.removeItem("visibleProd03");
    sessionStorage.removeItem("visibleContact");
    sessionStorage.removeItem("visibleInit");
    sessionStorage.removeItem("visibleUserInfo");
    sessionStorage.removeItem("visibleFact");
    sessionStorage.removeItem("visibleOrdenServicio");

    sessionStorage.setItem("visibleSer01", "false");
    sessionStorage.setItem("visibleSer02", "false");
    sessionStorage.setItem("visibleSer03", "false");
    sessionStorage.setItem("visibleProd01", "false");
    sessionStorage.setItem("visibleProd02", "false");
    sessionStorage.setItem("visibleProd03", "true");
    sessionStorage.setItem("visibleContact", "false");
    sessionStorage.setItem("visibleInit", "false");
    sessionStorage.setItem("visibleUserInfo", "false")
    sessionStorage.setItem("visibleFact", "false");
    sessionStorage.setItem("visibleOrdenServicio", "false");

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

    sessionStorage.removeItem("visibleSer01");
    sessionStorage.removeItem("visibleSer02");
    sessionStorage.removeItem("visibleSer03");
    sessionStorage.removeItem("visibleProd01");
    sessionStorage.removeItem("visibleProd02");
    sessionStorage.removeItem("visibleProd03");
    sessionStorage.removeItem("visibleContact");
    sessionStorage.removeItem("visibleInit");
    sessionStorage.removeItem("visibleUserInfo");
    sessionStorage.removeItem("visibleFact");
    sessionStorage.removeItem("visibleOrdenServicio");

    sessionStorage.setItem("visibleSer01", "false");
    sessionStorage.setItem("visibleSer02", "false");
    sessionStorage.setItem("visibleSer03", "false");
    sessionStorage.setItem("visibleProd01", "false");
    sessionStorage.setItem("visibleProd02", "false");
    sessionStorage.setItem("visibleProd03", "false");
    sessionStorage.setItem("visibleContact", "true");
    sessionStorage.setItem("visibleInit", "false");
    sessionStorage.setItem("visibleUserInfo", "false")
    sessionStorage.setItem("visibleFact", "false");
    sessionStorage.setItem("visibleOrdenServicio", "false");

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
      sessionStorage.removeItem("identity");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("visibleSer01");
      sessionStorage.removeItem("visibleSer02");
      sessionStorage.removeItem("visibleSer03");
      sessionStorage.removeItem("visibleProd01");
      sessionStorage.removeItem("visibleProd02");
      sessionStorage.removeItem("visibleProd03");
      sessionStorage.removeItem("visibleContact");
      sessionStorage.removeItem("visibleInit");
      sessionStorage.removeItem("visibleFact");
      sessionStorage.removeItem("visibleUserInfo");
      sessionStorage.removeItem("visibleOrdenServicio");

      sessionStorage.clear();

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

      clearInterval(this.interval);
      this.errorMessage = null;

    } else {
      return;
    }
  }
}