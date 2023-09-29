import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaTablaComponent } from './empresa-tabla.component';

describe('EmpresaTablaComponent', () => {
  let component: EmpresaTablaComponent;
  let fixture: ComponentFixture<EmpresaTablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresaTablaComponent]
    });
    fixture = TestBed.createComponent(EmpresaTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
