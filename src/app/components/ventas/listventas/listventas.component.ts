import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venta } from 'src/app/models/venta';
import { VentaService } from 'src/app/services/venta.service';

@Component({
  selector: 'app-listventas',
  templateUrl: './listventas.component.html',
  styleUrls: ['./listventas.component.css']
})
export class ListventasComponent implements OnInit {
  public venta:Venta;
  public ventas:Venta[];
  constructor(private ventasService: VentaService, private router:Router) { }

  ngOnInit(): void {
    this.listarVentas();
  }
  listarVentas(){
    this.ventasService.getVentas()
    .subscribe(data=>{
      this.ventas=data;
      console.log(data);
    })
  }
}
