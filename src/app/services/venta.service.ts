import { Injectable } from '@angular/core';
import {Observable, of , throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import { Router } from '@angular/router';
import {catchError,  map} from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AuthService } from './auth.service';
import { Venta } from '../models/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
  private url:string = 'http://localhost:8080/ventas';//endpoint

  constructor(private http: HttpClient, private router:Router,
    private authService: AuthService) { }
    

    
    getVentas(){
      return this.http.get<Venta[]>(this.url+'/all');
    }
    crearVenta(venta:Venta){
      return this.http.post<Venta>( this.url+'/add',venta);
    }









}
