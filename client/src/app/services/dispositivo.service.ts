import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { URL_APIS } from "./ApisURL";

@Injectable()
export class DispositivoService {
    public url: string;

    constructor(private _http: HttpClient){
        this.url = URL_APIS.ApiMariaDb.url;
    }

    //crea UUID
    generateUUId(){

        let headers = new HttpHeaders({ "Content-Type": "application/json" });

        return this._http.get(this.url + "generate_UUID", {headers: headers});
    }    

    //obtine UUID
    getUUID(){
        let UUID = localStorage.getItem("UUID");
        if (UUID === "undefined") {
            return null;
        } else if (UUID === null){
            return null;
        }else{
            return localStorage.getItem("UUID");
        }
    }

    //insertar UUID en base de datos
    setUUID(_UUID){
        let UUID = {
            UUID: _UUID
        }
        let params = JSON.stringify(UUID);

        let headers = new HttpHeaders({ "Content-Type": "application/json" });

        return this._http.post(this.url + "save_UUID", params, {headers: headers});
    }

}