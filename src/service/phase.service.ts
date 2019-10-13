import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({

    providedIn: 'root'

})
export class PhaseService {

    URL = 'http://localhost:8080/apiPhase';
    Phases: any[] = [];
    editMode = false;
    constructor(private http: HttpClient) {

    }

    add(Phase: any) {

        return this.http.post(this.URL + '/ajouter', Phase, { observe: 'response' });

    }

    update(Phase: any) {
        return this.http.put(this.URL + '/update', Phase, { observe: 'response' });
    }

    findAll() {

        return this.http.get<any[]>(this.URL + '/Phases').pipe(map(value => this.Phases = value));

    }

    delete(id: any) {

        return this.http.delete(this.URL + '/delete/' + id);

    }

    getOne(id: any) {
        return this.http.get<any>(this.URL + '/get/' + id);
    }

}
