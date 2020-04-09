import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { URL_APIS } from "./ApisURL";

@Injectable()
export class ServiceSql {
    public url: string;

    constructor(private _http: HttpClient){
        this.url = URL_APIS.ApiSqlServer.url;
    }

    getData(){
        let headers = new HttpHeaders({ "Content-Type": "application/json" });
        return this._http.get(this.url+"Data",{headers: headers});
    }

    setData(file){
        
        let objectjs = {
            name: file
        }
        
        let params = JSON.stringify(objectjs);
        console.log(params)
        let headers = new HttpHeaders({ "Content-Type": "application/json" });

        return this._http.post(this.url+"Data",params, {headers: headers});
    }
}