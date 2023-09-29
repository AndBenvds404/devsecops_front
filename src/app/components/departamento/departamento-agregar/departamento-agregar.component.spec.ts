import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoAgregarComponent } from './departamento-agregar.component';

describe('DepartamentoAgregarComponent', () => {
  let component: DepartamentoAgregarComponent;
  let fixture: ComponentFixture<DepartamentoAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartamentoAgregarComponent]
    });
    fixture = TestBed.createComponent(DepartamentoAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
