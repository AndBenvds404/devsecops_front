import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaAgregarComponent } from './empresa-agregar.component';

describe('EmpresaAgregarComponent', () => {
  let component: EmpresaAgregarComponent;
  let fixture: ComponentFixture<EmpresaAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresaAgregarComponent]
    });
    fixture = TestBed.createComponent(EmpresaAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
