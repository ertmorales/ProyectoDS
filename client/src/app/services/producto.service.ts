import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { URL_APIS } from "./ApisURL";

@Injectable()
export class Producto_Service {
    
    public url: string;

    constructor(private _http: HttpClient){
        this.url = URL_APIS.ApiMariaDb.url;
    }
   
    producto(){

        let headers = new HttpHeaders({ "Content-Type": "application/json" });

        return this._http.get(this.url + "producto", {headers: headers});
    }
   
    producto_Producto(Producto){

        let params = JSON.stringify(Producto);
        let headers = new HttpHeaders({ "Content-Type": "application/json" });
        
        return this._http.post(this.url + "producto_Producto", params, {headers: headers});
    }

    producto_Descripcion(Descripcion){

        let params = JSON.stringify(Descripcion);
        let headers = new HttpHeaders({ "Content-Type": "application/json" });
        
        return this._http.post(this.url + "producto_Descripcion", params, {headers: headers});
    }

}