import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
    // Use the environment variable
  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  get<T>(endpoint: string, params?: any): Observable<T> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        httpParams = httpParams.set(key, params[key]);
      });
    }
    return this.http.get<T>(`${this.baseUrl}${endpoint}`, { params: httpParams });
  }

  post<T>(endpoint: string, data: any, headers?: any): Observable<T> {
    let httpHeaders = new HttpHeaders();

    // If data is NOT FormData, set JSON headers
    if (!(data instanceof FormData)) {
      httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    }

    if (headers) {
      Object.keys(headers).forEach((key) => {
        httpHeaders = httpHeaders.set(key, headers[key]);
      });
    }

    return this.http.post<T>(`${this.baseUrl}${endpoint}`, data, { headers: httpHeaders });
  }

  put<T>(endpoint: string, data: any, headers?: any): Observable<T> {
    let httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (headers) {
      Object.keys(headers).forEach((key) => {
        httpHeaders = httpHeaders.set(key, headers[key]);
      });
    }
    return this.http.put<T>(`${this.baseUrl}${endpoint}`, data, { headers: httpHeaders });
  }

  delete<T>(endpoint: string, params?: any): Observable<T> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        httpParams = httpParams.set(key, params[key]);
      });
    }
    return this.http.delete<T>(`${this.baseUrl}${endpoint}`, { params: httpParams });
  }
}
