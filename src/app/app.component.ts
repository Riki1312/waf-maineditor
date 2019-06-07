import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  leftpanel: number = -1;
  rightpanel: number = 0;

  SetLeftpanel(index: number) {
    this.leftpanel = index;
  }

  SetRightpanel(index: number) {
    this.rightpanel = index;
  }
}

//

/*

Cose:
- ✔ Problema: reset elemento selezionato tool (se si usa due volte di fila lo stesso tool).
- ✔ Da discutere: aggiungere due volte la stessa classe a un elemento.
- ✔ Grafica: scroll bar menu autocompletamento nomi classi.

- Frame (e relativo pannello).
- ✔ Proprietà style div Layout (suddividere in flex e grid (e a sua volta in container e children)).
- Modalità tutorial iniziale per ogni pannello (gestione dinamica).
- !!!✔ Rimuovere regola css da una classe (scorciatoia da tastiera e messaggio).
- Modalità anteprima (navigare verso una pagina con NgHtml impostato al codice generato).
- ✔ Formattazione codice generato.
- Download e upload json file waf.
- Interazione con dati dinamici da db (cms).
- Eventi e click.
- Animazioni.
- ✔ Codice css personalizzato.
- ✔ Anteprima codice classi secondo pannello destra.
- Creazione automatica classe quando si creare un elemento (modificabile nelle impostazioni).
- Elemento immagine.
- ✔ Problema: overflow sul body.
- Elemento custom code (anche per media query e animazioni o interazioni con mouse).
- Evidenziare l'elemento selezionato nel editor centrale.
- Zoom (+/-) nel editor centrale (barra in alto).
- ✔ Sistemare menu e link a docuimentazione e sito web.
- Messaggio per le funzionalità non ancora implementate.
- Anteprima proprietà css come per il colore.
- Undo e redro, cronologia modifiche.
- ✔ Visualizzare nel pannelo di style le opzioni se nessun elemento è selezionato.
- Rendere più generico ed espansibile il sistema che gestisce i waf-rightsection-x.

*/
///