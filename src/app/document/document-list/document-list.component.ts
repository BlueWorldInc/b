import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from 'src/service/document.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents: any[] = [];

  constructor(private documentService: DocumentService, private router: Router) { }

  ngOnInit() {
    this.findAll();
  }

  
  findAll() {

    this.documentService.findAll().subscribe((value: any[]) => {
      this.documents = value;
    });

  }

  delete(id, index) {

    this.documentService.delete(id).subscribe(response => {

      this.documentService.documents.splice(index, 1);


    });

  }

  edit(id) {


    this.router.navigate(['/joueur/edit', id]);
    this.documentService.editMode = true;


  }

}
