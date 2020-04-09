import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { URL_APIS } from "./ApisURL";

@Injectable()
export class UsuarioService {
    public url: string;
    public identity;
    public token;

    constructor(private _http: HttpClient){
        this.url = URL_APIS.ApiMariaDb.url;
    }

    //consumo login
    login(user_to_login){

        let params = JSON.stringify(user_to_login);

        let headers = new HttpHeaders({ "Content-Type": "application/json" });

        return this._http.post(this.url + "login", params, {headers: headers});
    }

 
    getIdentity(){
        let identity = JSON.parse(localStorage.getItem("identity"));
        if (identity != "undefined") {
            this.identity = identity;
        }else{
            this.identity = null;
        }
        return this.identity;
    }

    getToken(){
        let token = localStorage.getItem("token");
        if (token != "undefined") {
            this.token = token;
        } else {
            this.token = null;
        }
        return token;
    }

}