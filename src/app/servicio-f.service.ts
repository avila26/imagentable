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

    return this.http.post('http://127.0.0.1:8000/api/persona', datos);
  }
}
