import { Component, OnInit } from '@angular/core';
import { TribunalService } from 'src/service/tribunal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tribunal-list',
  templateUrl: './tribunal-list.component.html',
  styleUrls: ['./tribunal-list.component.css']
})
export class TribunalListComponent implements OnInit {

  tribunals: any[] = [];

  constructor(private tribunalService: TribunalService, private router: Router) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {

    this.tribunalService.findAll().subscribe((value: any[]) => {
      this.tribunals = value;
    });

  }

  delete(id, index) {

    this.tribunalService.delete(id).subscribe(response => {

      this.tribunalService.Tribunals.splice(index, 1);


    });

  }

  edit(id) {


    this.router.navigate(['/joueur/edit', id]);
    this.tribunalService.editMode = true;


  }

}
