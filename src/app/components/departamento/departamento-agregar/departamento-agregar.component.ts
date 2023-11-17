import { Component } from '@angular/core';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-departamento-agregar',
  templateUrl: './departamento-agregar.component.html',
  styleUrls: ['./departamento-agregar.component.css']
})
export class DepartamentoAgregarComponent {

  ngOnInit() {
    this.listEmpresas = Array.from({ length: 10 }).map((_, i) => `Empresa ${i+1}`);
}

  listEmpresas!: string[];

  items: any[] | undefined;

  selectedItem: any;

  suggestions: any[] | undefined;

  search(event: AutoCompleteCompleteEvent) {
      this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
  }
}