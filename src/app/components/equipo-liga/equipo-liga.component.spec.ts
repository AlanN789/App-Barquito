import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoLigaComponent } from './equipo-liga.component';

describe('EquipoLigaComponent', () => {
  let component: EquipoLigaComponent;
  let fixture: ComponentFixture<EquipoLigaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipoLigaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoLigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
