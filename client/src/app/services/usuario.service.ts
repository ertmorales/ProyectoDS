import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { URL_APIS } from "./ApisURL";

@Injectable()
export class UsuarioService {
    public url: string;
    public identity;
    public token;
    public UUID;

    constructor(private _http: HttpClient){
        this.url = URL_APIS.ApiMariaDb.url;
    }

    //consumo login
    login(user_to_login){

        let params = JSON.stringify(user_to_login);

        let headers = new HttpHeaders({ "Content-Type": "application/json" });

        return this._http.post(this.url + "login", params, {headers: headers});
    }

    //informacion usuario
    getIdentity(){
        let identity = JSON.parse(sessionStorage.getItem("identity"));
        if (identity != "undefined") {
            this.identity = identity;
        }else{
            this.identity = null;
        }
        return this.identity;
    }

    //token con informacion usario
    getToken(){
        let token = sessionStorage.getItem("token");
        if (token != "undefined") {
            this.token = token;
        } else {
            this.token = null;
        }
        return token;
    }
}