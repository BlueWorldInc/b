import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentComponent } from './document/document.component';
import { DocumentListComponent } from './document/document-list/document-list.component';
import { DocumentFormComponent } from './document/document-form/document-form.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { UtilisateurFormComponent } from './utilisateur/utilisateur-form/utilisateur-form.component';
import { UtilisateurListComponent } from './utilisateur/utilisateur-list/utilisateur-list.component';
import { AffaireComponent } from './affaire/affaire.component';
import { AffaireFormComponent } from './affaire/affaire-form/affaire-form.component';
import { TribunalComponent } from './tribunal/tribunal.component';
import { TribunalListComponent } from './tribunal/tribunal-list/tribunal-list.component';
import { PhaseComponent } from './phase/phase.component';
import { PhaseListComponent } from './phase/phase-list/phase-list.component';
import { TacheComponent } from './tache/tache.component';
import { TacheFormComponent } from './tache/tache-form/tache-form.component';
import { LoginComponent } from './login/login.component';
import { LoginHomeComponent } from './login/login-home/login-home.component';
import { LoginErrorComponent } from './login/login-error/login-error.component';
import { AffaireTableauDeBordComponent } from './affaire/affaire-tableau-de-bord/affaire-tableau-de-bord.component';
import { TacheTableauDeBordComponent } from './tache/tache-tableau-de-bord/tache-tableau-de-bord.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DocumentService } from 'src/service/document.service';
import { HttpClientModule } from '@angular/common/http';
import { PhaseService } from 'src/service/phase.service';
import { AffaireService } from 'src/service/affaire.service';
import { TacheService } from 'src/service/tache.service';
import { TribunalService } from 'src/service/tribunal.service';
import { UtilisateurService } from 'src/service/utilisateur.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    DocumentListComponent,
    DocumentFormComponent,
    UtilisateurComponent,
    UtilisateurFormComponent,
    UtilisateurListComponent,
    AffaireComponent,
    AffaireFormComponent,
    TribunalComponent,
    TribunalListComponent,
    PhaseComponent,
    PhaseListComponent,
    TacheComponent,
    TacheFormComponent,
    LoginComponent,
    LoginHomeComponent,
    LoginErrorComponent,
    AffaireTableauDeBordComponent,
    TacheTableauDeBordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    DocumentService, 
    PhaseService, 
    AffaireService, 
    TacheService,
    TribunalService,
    UtilisateurService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
