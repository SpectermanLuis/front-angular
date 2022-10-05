import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperienciaComponent,
    EstudiosComponent,
    HabilidadesComponent,
    CertificadosComponent,
    ContactoComponent,
    FooterComponent    
  ],
  imports: [
    BrowserModule,
   // AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
