import { Component, Input } from '@angular/core';
import { Transazioni } from '../Itransazioni';

@Component({
  selector: 'app-transazioni-dettagli',
  templateUrl: './transazioni-dettagli.component.html',
  styleUrls: ['./transazioni-dettagli.component.css']
})
export class TransazioniDettagliComponent {
@Input()
trans?: Transazioni;
}
