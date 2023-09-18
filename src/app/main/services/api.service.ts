/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private readonly httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) {}

    get<T>(uri: string, params?: any): Observable<HttpResponse<T>> {
        return this.http.get<T>(`${environment.apiUrl}/${uri}`, {
            params: params,
            headers: this.httpOptions.headers
        });
    }

    post<T>(uri: string, payload: unknown, params?: any): Observable<HttpResponse<T>> {
        return this.http.post<T>(`${environment.apiUrl}/${uri}`, payload, {
            params: params,
            headers: this.httpOptions.headers
        });
    }

    patch<T = unknown>(uri: string, payload: unknown, params?: any): Observable<T> {
        return this.http.patch<T>(`${environment.apiUrl}/${uri}`, payload, {
            params: params,
            headers: this.httpOptions.headers
        });
    }

    put<T = unknown>(uri: string, payload: unknown, params?: any): Observable<T> {
        return this.http.put<T>(`${environment.apiUrl}/${uri}`, payload, {
            params: params,
            headers: this.httpOptions.headers
        });
    }

    delete<T = unknown>(uri: string, params?: any): Observable<T> {
        return this.http.delete<T>(`${environment.apiUrl}/${uri}`, {
            params: params,
            headers: this.httpOptions.headers
        });
    }
}
