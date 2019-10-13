import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TacheService } from 'src/service/tache.service';

@Component({
  selector: 'app-tache-tableau-de-bord',
  templateUrl: './tache-tableau-de-bord.component.html',
  styleUrls: ['./tache-tableau-de-bord.component.css']
})
export class TacheTableauDeBordComponent implements OnInit {

  taches: any[] = [];

  constructor(private tacheService: TacheService, private router: Router) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {

    this.tacheService.findAll().subscribe((value: any[]) => {
      this.taches = value;
    });

  }

  delete(id, index) {

    this.tacheService.delete(id).subscribe(response => {

      this.tacheService.Taches.splice(index, 1);


    });

  }

  edit(id) {


    this.router.navigate(['/joueur/edit', id]);
    this.tacheService.editMode = true;


  }

}
