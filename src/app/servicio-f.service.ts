import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFService {

  constructor( private http:HttpClient) { }

  saveImagen(nombre: string, imagen: any) {
    let datos = new FormData();
    datos.append('nombre',nombre),
    datos.append('imagen',imagen)

    return this.http.post('http://3.22.68.213/api/persona', datos);
  }
}
