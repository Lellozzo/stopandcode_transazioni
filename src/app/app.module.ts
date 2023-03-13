import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { TransazioniListaComponent } from './transazioni-lista/transazioni-lista.component';
import { TransazioniDettagliComponent } from './transazioni-dettagli/transazioni-dettagli.component';

@NgModule({
  declarations: [
    AppComponent,
    TransazioniListaComponent,
    TransazioniDettagliComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
