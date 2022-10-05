import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent implements OnInit {
  certificados:any;

  constructor(private portfolioservice:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioservice.getDatos().subscribe(data=>{
      console.log(data);
      
      //definir informacion a mostrar 
       
      this.certificados = data.certificados;
      
    })
  }

}
