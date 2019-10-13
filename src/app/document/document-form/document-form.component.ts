import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DocumentService } from 'src/service/document.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.css']
})
export class DocumentFormComponent implements OnInit {

  form: FormGroup;
  id: any;
  document: any;
  editMode: any;
  constructor(private documentService: DocumentService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.form = new FormGroup({
      idDocument: new FormControl(null, Validators.required),
      dateCreation: new FormControl(null, Validators.required),
      nom: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      affaire: new FormControl(null, Validators.required),
    });

    this.activatedRoute.params.subscribe((param: Params) => {
      // tslint:disable-next-line:no-string-literal
      this.id = param['id'];
      if (this.id) {
        this.documentService.getOne(this.id).subscribe((response: any) => {
          this.form.setValue(response);
        });
      }
    });
    this.editMode = this.documentService.editMode;
  }

  add() {
    this.documentService.add(this.form.value).subscribe(response => {
      this.documentService.documents.push(response.body);
      this.form.reset();
    });
  }

  findIndexToUpdate(item) {
    return item.id === this;
  }

  update() {
    this.documentService.update(this.form.value)
      .subscribe((response: any) => {

        this.document = this.documentService.documents.find(this.findIndexToUpdate, response.body.id);

        const index = this.documentService.documents.indexOf(this.document);
        //    => {
        //   // tslint:disable-next-line:no-unused-expression
        //   document === response.body;
        //   console.log(document);
        //   console.log(response.body);
        // }
        // );

        this.documentService.documents.splice(index, 1, response.body);
        this.documentService.editMode = false;
        this.editMode = false;
        this.router.navigate(['/document/form']);
      });
    }

}
