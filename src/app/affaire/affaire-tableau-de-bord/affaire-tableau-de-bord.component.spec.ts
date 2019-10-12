import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffaireTableauDeBordComponent } from './affaire-tableau-de-bord.component';

describe('AffaireTableauDeBordComponent', () => {
  let component: AffaireTableauDeBordComponent;
  let fixture: ComponentFixture<AffaireTableauDeBordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffaireTableauDeBordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffaireTableauDeBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
