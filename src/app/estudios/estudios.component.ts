import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  estudios:any;

  constructor(private portfolioservice:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioservice.getDatos().subscribe(data=>{
      console.log(data);
      
      //definir informacion a mostrar 
       
      this.estudios = data.educacion;
      // this.apellido = data.apellido;
    })
  }

}
