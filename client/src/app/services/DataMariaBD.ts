import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { URL_APIS } from "./ApisURL";

@Injectable()
export class ServiceMariaBD {
    public url: string;

    
    constructor(private _http: HttpClient){
        this.url = URL_APIS.ApiMariaDb.url;
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
