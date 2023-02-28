import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PerfilGeralComponent } from './perfil-geral/perfil-geral.component';
import { HistoricoComponent } from './historico/historico.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';
@NgModule({
  declarations: [			
    AppComponent,
      PerfilGeralComponent,
      HistoricoComponent,
      EstatisticasComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
