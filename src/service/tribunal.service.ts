import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({

    providedIn: 'root'

})
export class TribunalService {

    URL = 'http://localhost:8080/apiTribunal';
    Tribunals: any[] = [];
    editMode = false;
    constructor(private http: HttpClient) {

    }

    add(Tribunal: any) {

        return this.http.post(this.URL + '/ajouter', Tribunal, { observe: 'response' });

    }

    update(Tribunal: any) {
        return this.http.put(this.URL + '/update', Tribunal, { observe: 'response' });
    }

    findAll() {

        return this.http.get<any[]>(this.URL + '/Tribunals').pipe(map(value => this.Tribunals = value));

    }

    delete(id: any) {

        return this.http.delete(this.URL + '/delete/' + id);

    }

    getOne(id: any) {
        return this.http.get<any>(this.URL + '/get/' + id);
    }

}
