import { Component, OnInit } from '@angular/core';

//Servicios
import { UsuarioService } from "../services/usuario.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  providers: [UsuarioService]
})
export class UserInfoComponent implements OnInit {
  
  public identity; 

  constructor(
    private _usuarioService: UsuarioService
  ) { 
    this.identity = _usuarioService.getIdentity();
  }

  ngOnInit() {
  }

}
