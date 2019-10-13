import { Component, OnInit } from '@angular/core';
import { PhaseService } from 'src/service/phase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phase-list',
  templateUrl: './phase-list.component.html',
  styleUrls: ['./phase-list.component.css']
})
export class PhaseListComponent implements OnInit {

  phases: any[] = [];

  constructor(private phaseService: PhaseService, private router: Router) { }

  ngOnInit() {
    this.findAll();
  }

   
  findAll() {

    this.phaseService.findAll().subscribe((value: any[]) => {
      this.phases = value;
    });

  }

  delete(id, index) {

    this.phaseService.delete(id).subscribe(response => {

      this.phaseService.Phases.splice(index, 1);


    });

  }

  edit(id) {


    this.router.navigate(['/joueur/edit', id]);
    this.phaseService.editMode = true;

  }

}
