import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransazioniDettagliComponent } from './transazioni-dettagli.component';

describe('TransazioniDettagliComponent', () => {
  let component: TransazioniDettagliComponent;
  let fixture: ComponentFixture<TransazioniDettagliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransazioniDettagliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransazioniDettagliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
