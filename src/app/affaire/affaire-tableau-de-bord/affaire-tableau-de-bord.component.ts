import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AffaireService } from 'src/service/affaire.service';

@Component({
  selector: 'app-affaire-tableau-de-bord',
  templateUrl: './affaire-tableau-de-bord.component.html',
  styleUrls: ['./affaire-tableau-de-bord.component.css']
})
export class AffaireTableauDeBordComponent implements OnInit {

  affaires: any[] = [];

  constructor(private affaireService: AffaireService, private router: Router) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {

    this.affaireService.findAll().subscribe((value: any[]) => {
      this.affaires = value;
    });

  }

  delete(id, index) {

    this.affaireService.delete(id).subscribe(response => {

      this.affaireService.Affaires.splice(index, 1);


    });

  }

  edit(id) {


    this.router.navigate(['/joueur/edit', id]);
    this.affaireService.editMode = true;


  }

}
