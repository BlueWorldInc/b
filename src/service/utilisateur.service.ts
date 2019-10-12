import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UtilisateurService {

    URL = 'http://localhost:8080/apiUtilisateur';
    Utilisateurs: any[] = [];
    editMode = false;
    constructor(private http: HttpClient) {

    }

    add(Utilisateur: any) {

        return this.http.post(this.URL + '/ajouter', Utilisateur, { observe: 'response' });

    }

    update(Utilisateur: any) {
        return this.http.put(this.URL + '/update', Utilisateur, { observe: 'response' });
    }

    findAll() {

        return this.http.get<any[]>(this.URL + '/Utilisateurs').pipe(map(value => this.Utilisateurs = value));

    }

    delete(id: any) {

        return this.http.delete(this.URL + '/delete/' + id);

    }

    getOne(id: any) {
        return this.http.get<any>(this.URL + '/get/' + id);
    }

}
