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
  
  register(user: any, email: any, password: any) {
    this.servicioFService.register(user.value, email.value, password.value).subscribe({
      next: (data: any) => {
        console.log('Registro exitoso:', data);
        // Aquí puedes manejar la respuesta exitosa, como redirigir a otra página o mostrar un mensaje.
      },
      error: (error: any) => {
        console.error('Error en el registro:', error);
        // Aquí puedes manejar errores, como mostrar un mensaje al usuario.
      }
    });
  }

}
