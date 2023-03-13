import { Component } from '@angular/core';
import { Transazioni } from '../Itransazioni';
import { TRANSAZIONI } from '../transazioni-dati';

@Component({
  selector: 'app-transazioni-lista',
  templateUrl: './transazioni-lista.component.html',
  styleUrls: ['./transazioni-lista.component.css']
})
export class TransazioniListaComponent {
tlista: Transazioni[] = TRANSAZIONI;
}
