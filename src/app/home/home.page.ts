import { Component } from '@angular/core';
import { ServicioFService } from '../servicio-f.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private servicio: ServicioFService) {}
  imagen: any;

  obtenerImagen(dato: any) {
    this.imagen=dato.target.files[0];
  }
  
  storeImagen(nombre: any,apellido:any,cedula:any,puesto:any, latitud:any,longitud:any) {
    this.servicio.saveImagen(nombre.value,apellido.value,cedula.value, this.imagen, puesto.value, latitud.value,longitud.value).subscribe({
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
