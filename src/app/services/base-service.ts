import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BaseService {
    constructor(private http: Http) {

    }

    public get(endpoint: string): Observable<any> {
        const url = 'https://localhost:44311/api/' + endpoint;
        return this.http.get(url).pipe(map(res => res.json()));
    }

    public create(endpoint: string, model: any): Observable<any> {
        const url = 'https://localhost:44311/api/' + endpoint;
        return this.http.post(url, model);
    }

    public update(endpoint: string, model: any): Observable<any> {
        const url = 'https://localhost:44311/api/' + endpoint;
        return this.http.put(url, model);
    }

    public delete(endpoint: string, id: any): Observable<any> {
        const url = 'https://localhost:44311/api/' + endpoint;
        return this.http.delete(url, id);
    }
}