import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformacoesPessoaisPage } from './informacoes-pessoais.page';

describe('InformacoesPessoaisPage', () => {
  let component: InformacoesPessoaisPage;
  let fixture: ComponentFixture<InformacoesPessoaisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacoesPessoaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
