import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "@environments/environment";

@Injectable({ providedIn: "root" })
export class HttpService {
  constructor(private http: HttpClient) {}

  get<T>(chunk: string): Observable<T> {
    return this.http.get<T>(`${environment.API_URL}/${chunk}`);
  }

  getAll<T>(chunk: string): Observable<T[]> {
    return this.http.get<T[]>(`${environment.API_URL}/${chunk}`);
  }

  post<T, K>(chunk: string, body: T): Observable<K> {
    return this.http.post<K>(`${environment.API_URL}/${chunk}`, body);
  }

  update<T, K>(chunk: string, body: T): Observable<K> {
    return this.http.put<K>(`${environment.API_URL}/${chunk}`, body);
  }

  delete<T>(chunk: string): Observable<T> {
    return this.http.delete<T>(`${environment.API_URL}/${chunk}`);
  }
}
