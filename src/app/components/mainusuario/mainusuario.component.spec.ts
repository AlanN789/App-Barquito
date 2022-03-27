import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainusuarioComponent } from './mainusuario.component';

describe('MainusuarioComponent', () => {
  let component: MainusuarioComponent;
  let fixture: ComponentFixture<MainusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainusuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
