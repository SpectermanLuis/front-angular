import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
    
  experiencias:any;
  constructor( 
    private portfolioservice:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioservice.getDatos().subscribe(data=>{
      console.log(data);
      
      //definir informacion a mostrar 
       
      this.experiencias = data.trabajos;
      // this.apellido = data.apellido;
    })

  }

}
