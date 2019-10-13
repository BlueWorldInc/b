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
import { PhaseListComponent } from './phase/phase-list/phase-list.component';
import { PhaseComponent } from './phase/phase.component';
import { LoginComponent } from './login/login.component';
import { LoginHomeComponent } from './login/login-home/login-home.component';
import { LoginErrorComponent } from './login/login-error/login-error.component';
import { TribunalComponent } from './tribunal/tribunal.component';
import { TribunalListComponent } from './tribunal/tribunal-list/tribunal-list.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { UtilisateurListComponent } from './utilisateur/utilisateur-list/utilisateur-list.component';
import { UtilisateurFormComponent } from './utilisateur/utilisateur-form/utilisateur-form.component';


const routes: Routes = [
  {
    path: 'documents', component: DocumentComponent, children: [
      { path: 'list', component: DocumentListComponent },
      { path: 'form', component: DocumentFormComponent },
      { path: 'edit/:id', component: DocumentFormComponent }
    ]
  },
  {
    path: 'affaires', component: AffaireComponent, children: [
      { path: 'tab', component: AffaireTableauDeBordComponent },
      { path: 'form', component: AffaireFormComponent },
      { path: 'edit/:id', component: AffaireFormComponent }
    ]
  },
  {
    path: 'phases', component: PhaseComponent, children: [
      { path: 'list', component: PhaseListComponent }
    ]
  },
  {
    path: 'login', component: LoginComponent, children: [
      { path: 'home', component: LoginHomeComponent },
      { path: 'error', component: LoginErrorComponent }
    ]
  },
  {
    path: 'taches', component: TacheComponent, children: [
      { path: 'tab', component: TacheTableauDeBordComponent },
      { path: 'form', component: TacheFormComponent },
      { path: 'edit/:id', component: TacheFormComponent }
    ]
  },
  {
    path: 'utilisateurs', component: UtilisateurComponent, children: [
      { path: 'list', component: UtilisateurListComponent },
      { path: 'form', component: UtilisateurFormComponent },
      { path: 'edit/:id', component: UtilisateurFormComponent }
    ]
  },
  {
    path: 'tribunals', component: TribunalComponent, children: [
      { path: 'list', component: TribunalListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
