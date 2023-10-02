import { Component } from '@angular/core';


@Component({
  selector: 'app-empresa-tabla',
  templateUrl: './empresa-tabla.component.html',
  styleUrls: ['./empresa-tabla.component.css']
})
export class EmpresaTablaComponent {

  products = [
    { id: 1, nombre: 'Producto 1', estado: 'activo' },
    { id: 2, nombre: 'Producto 2', estado: 'activo' },
    // ... más objetos de productos
  ];

  checked: boolean = false;
}


