import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoTablaComponent } from './departamento-tabla.component';

describe('DepartamentoTablaComponent', () => {
  let component: DepartamentoTablaComponent;
  let fixture: ComponentFixture<DepartamentoTablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartamentoTablaComponent]
    });
    fixture = TestBed.createComponent(DepartamentoTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
