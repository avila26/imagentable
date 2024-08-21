import { ServicioFService } from './../../servicio-f.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-u',
  templateUrl: './registro-u.page.html',
  styleUrls: ['./registro-u.page.scss'],
})
export class RegistroUPage implements OnInit {

  constructor( private servicioFService:ServicioFService, private router:Router) { }

  ngOnInit() {
  }

  storeUsuario(usuario: any,correo:any, password:any) {
    this.servicioFService.register(usuario.value, correo.value, password.value).subscribe({
      next: (data: any) => {
        debugger;
        console.log(data);
      },
      error: (error: any) => {
        debugger;
        console.log(error);
      },
});
}


}
