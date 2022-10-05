import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent implements OnInit {
  habilidades: any=[];

  constructor(private portfolioservice: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioservice.getDatos().subscribe((data) => {
      console.log(data);

      //definir informacion a mostrar
      this.habilidades = data.habilidades;
    });
  }
}
