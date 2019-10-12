import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DocumentService {

    URL = 'http://localhost:8080/apiDocument';
    Documents: any[] = [];
    editMode = false;
    constructor(private http: HttpClient) {

    }

    add(Document: any) {

        return this.http.post(this.URL + '/ajouter', Document, { observe: 'response' });

    }

    update(Document: any) {
        return this.http.put(this.URL + '/update', Document, { observe: 'response' });
    }

    findAll() {

        return this.http.get<any[]>(this.URL + '/Documents').pipe(map(value => this.Documents = value));

    }

    delete(id: any) {

        return this.http.delete(this.URL + '/delete/' + id);

    }

    getOne(id: any) {
        return this.http.get<any>(this.URL + '/get/' + id);
    }

}
