import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarpetPage } from './cadastrarpet.page';

describe('CadastrarpetPage', () => {
  let component: CadastrarpetPage;
  let fixture: ComponentFixture<CadastrarpetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarpetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
