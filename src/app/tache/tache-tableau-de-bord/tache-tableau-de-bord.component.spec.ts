import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheTableauDeBordComponent } from './tache-tableau-de-bord.component';

describe('TacheTableauDeBordComponent', () => {
  let component: TacheTableauDeBordComponent;
  let fixture: ComponentFixture<TacheTableauDeBordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacheTableauDeBordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacheTableauDeBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
