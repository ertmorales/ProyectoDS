import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { GLOBAL } from "./global";

@Injectable()
export class UserService {
    public url: string;
    public identity;
    public token;

    constructor(private _http: HttpClient){
        this.url = GLOBAL.url;
    }

    //consumo login
    signup(user_to_login){

        let params = JSON.stringify(user_to_login);

        let headers = new HttpHeaders({ "Content-Type": "application/json" });

        return this._http.post(this.url + "login", params, {headers: headers});
    }

    setUser(user){
        let params = JSON.stringify(user);
        let headers = new HttpHeaders({ "Content-Type": "application/json" });

        return this._http.post(this.url + "setUser",params, { headers: headers});
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

    changePassword(password){
        
        let user = JSON.parse(localStorage.getItem("identity"));
        password.user = user.user;

        let params = JSON.stringify(password);
        let headers = new HttpHeaders({ "Content-Type": "application/json" });

        return this._http.put(this.url + "changePassword",params,{headers: headers});
    }



    getData(){
        let headers = new HttpHeaders({ "Content-Type": "application/json" });
        return this._http.get(this.url + "getData", {headers: headers});
    }

    
    setData(file){
        
        let objectjs = {
            name: file
        }
        
        let params = JSON.stringify(objectjs);

        let headers = new HttpHeaders({ "Content-Type": "application/json" });

        return this._http.post(this.url + "dataSet",params, { headers: headers});
    }

}