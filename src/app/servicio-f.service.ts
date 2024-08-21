import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFService {

  constructor( private http:HttpClient) { }

  saveImagen(nombre: string,apellido: string, cedula: string, foto: any, puesto:any, latitud:any, longitud:any) {
    let datos = new FormData();
    datos.append('nombre',nombre),
    datos.append('apellido',apellido),
    datos.append('cedula',cedula),
    datos.append('foto',foto),
    datos.append('puesto',puesto),
    datos.append('latitud',latitud),
    datos.append('longitud',longitud)

    return this.http.post('http://127.0.0.1:8000/api/empleados/registrar', datos);
  }

  register(usuario: string, correo: string, password: string ){
    let datos = {
      usuario:usuario,
      correo:correo,
      password:password
    }
    return this.http.post('http://127.0.0.1:8000/api/usuarios/crear', datos)
  }
}
