import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
// crear variable que se llama de instancia para almacenar datos
datosPortfolio:any;
nombre: string = '';
apellido: string = '';
fotoperfil: string = '';
presentacion:string = '';
  
constructor(
    // inyectar el servicio para tener acceso en la clase
    private portfolioservice:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioservice.getDatos().subscribe(data=>{
      console.log(data);
      this.datosPortfolio=data.uno;

      //definir informacion a mostrar 
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.fotoperfil = data.fotoperfil;
      this.presentacion = data.presentacion;
    })
  
   };

  }
