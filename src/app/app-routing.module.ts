import { TacheTableauDeBordComponent } from './tache/tache-tableau-de-bord/tache-tableau-de-bord.component';
import { TacheFormComponent } from './tache/tache-form/tache-form.component';
import { AffaireFormComponent } from './affaire/affaire-form/affaire-form.component';
import { AffaireComponent } from './affaire/affaire.component';
import { AffaireTableauDeBordComponent } from './affaire/affaire-tableau-de-bord/affaire-tableau-de-bord.component';
import { DocumentListComponent } from './document/document-list/document-list.component';
import { DocumentFormComponent } from './document/document-form/document-form.component';
import { DocumentComponent } from './document/document.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TacheComponent } from './tache/tache.component';


const routes: Routes = [
  {
    path: 'documents', component: DocumentComponent, children: [
      { path: 'list', component: DocumentListComponent },
      { path: 'form', component: DocumentFormComponent }
    ]
  },
  {
    path: 'affaires', component: AffaireComponent, children: [
      { path: 'tab', component: AffaireTableauDeBordComponent },
      { path: 'form', component: AffaireFormComponent }
    ]
  },
  {
    path: 'phases', component: DocumentComponent, children: [
      { path: 'list', component: DocumentListComponent }
    ]
  },
  {
    path: 'login', component: DocumentComponent, children: [
      { path: 'home', component: DocumentListComponent },
      { path: 'error', component: DocumentFormComponent }
    ]
  },
  {
    path: 'taches', component: TacheComponent, children: [
      { path: 'tab', component: TacheTableauDeBordComponent },
      { path: 'form', component: TacheFormComponent }
    ]
  },
  {
    path: 'utilisateurs', component: DocumentComponent, children: [
      { path: 'list', component: DocumentListComponent },
      { path: 'form', component: DocumentFormComponent }
    ]
  },
  {
    path: 'tribunals', component: DocumentComponent, children: [
      { path: 'list', component: DocumentListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
