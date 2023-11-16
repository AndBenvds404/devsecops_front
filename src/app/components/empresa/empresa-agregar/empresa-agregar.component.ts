import { Component } from '@angular/core';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-empresa-agregar',
  templateUrl: './empresa-agregar.component.html',
  styleUrls: ['./empresa-agregar.component.css']
})
export class EmpresaAgregarComponent {

  items: any[] | undefined;

  selectedItem: any;

  suggestions: any[] | undefined;

  search(event: AutoCompleteCompleteEvent) {
      this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
  }
}