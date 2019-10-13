import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from 'src/service/utilisateur.service';

@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.css']
})
export class UtilisateurListComponent implements OnInit {

  utilisateurs: any[] = [];

  constructor(private utilisateurService: UtilisateurService, private router: Router) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {

    this.utilisateurService.findAll().subscribe((value: any[]) => {
      this.utilisateurs = value;
    });

  }

  delete(id, index) {

    this.utilisateurService.delete(id).subscribe(response => {

      this.utilisateurService.Utilisateurs.splice(index, 1);


    });

  }

  edit(id) {


    this.router.navigate(['/joueur/edit', id]);
    this.utilisateurService.editMode = true;


  }

}
