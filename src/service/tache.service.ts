import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class TacheService {

    URL = 'http://localhost:8080/apiTache';
    Taches: any[] = [];
    editMode = false;
    constructor(private http: HttpClient) {

    }

    add(Tache: any) {

        return this.http.post(this.URL + '/ajouter', Tache, { observe: 'response' });

    }

    update(Tache: any) {
        return this.http.put(this.URL + '/update', Tache, { observe: 'response' });
    }

    findAll() {

        return this.http.get<any[]>(this.URL + '/Taches').pipe(map(value => this.Taches = value));

    }

    delete(id: any) {

        return this.http.delete(this.URL + '/delete/' + id);

    }

    getOne(id: any) {
        return this.http.get<any>(this.URL + '/get/' + id);
    }

}
