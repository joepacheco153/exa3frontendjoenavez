import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venta } from 'src/app/models/venta';
import { VentaService } from 'src/app/services/venta.service';

@Component({
  selector: 'app-addventas',
  templateUrl: './addventas.component.html',
  styleUrls: ['./addventas.component.css']
})
export class AddventasComponent implements OnInit {
  public venta:Venta;
  public ventas:Venta[];
  constructor(private ventasService: VentaService, private router:Router) { 

  }

  ngOnInit(): void {

  }
  

}
