import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({

    providedIn: 'root'

})
export class DocumentService {

    URL = 'http://localhost:8080/apiDocument';
    documents: any[] = [];
    editMode = false;

    constructor(private http: HttpClient) { }


    add(document: any) {

        return this.http.post(this.URL + '/ajouter', document, { observe: 'response' });

    }

    update(document: any) {

        return this.http.put(this.URL + '/update', document, { observe: 'response' });

    }

    findAll() {

        return this.http.get<any[]>(this.URL + '/Documents').pipe(map(value => this.documents = value));

    }

    delete(id: any) {

        return this.http.delete(this.URL + '/delete/' + id);

    }

    getOne(id: any) {

        return this.http.get<any>(this.URL + '/get/' + id);

    }





}
