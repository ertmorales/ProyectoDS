import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { URL_APIS } from "./ApisURL";

@Injectable()
export class Cuenta_Correntista_Service {

    public url: string;

    constructor(private _http: HttpClient) {
        this.url = URL_APIS.ApiMariaDb.url;
    }

    //Lista de cuentas disponibles
    cuenta_correntista() {

        let headers = new HttpHeaders({ "Content-Type": "application/json" });

        return this._http.get(this.url + "cuenta_correntista", { headers: headers });
    }

    //Filtro nombre
    cuenta_correntista_nombre(nombre) {

        let params = JSON.stringify(nombre);
        let headers = new HttpHeaders({ "Content-Type": "application/json" });

        return this._http.post(this.url + "cuenta_correntista_nombre", params, { headers: headers });
    }

    //Filtro Id
    cuenta_correntista_Id(Id) {

        let params = JSON.stringify(Id);
        let headers = new HttpHeaders({ "Content-Type": "application/json" });

        return this._http.post(this.url + "cuenta_correntista_Id", params, { headers: headers });
    }

    //Filtro Nit
    cuenta_correntista_NIT(NIT) {

        let params = JSON.stringify(NIT);
        let headers = new HttpHeaders({ "Content-Type": "application/json" });

        return this._http.post(this.url + "cuenta_correntista_NIT", params, { headers: headers });
    }

    //Crear cuenta
    nueva_cuenta_correntista(cuenta) {
        let params = JSON.stringify(cuenta);
        let headers = new HttpHeaders({ "Content-Type": "application/json" });

        return this._http.post(this.url + "nueva_cuenta_correntista", params, { headers: headers });
    }

}