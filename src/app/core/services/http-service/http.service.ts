import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "@environments/environment";

@Injectable({ providedIn: "root" })
export class HttpService {
  constructor(private http: HttpClient) {}

  get<T>(chunk: string): Observable<T> {
    return this.http
      .get<T>(`${environment.API_URL}/${chunk}`)
      .pipe(catchError((err) => throwError(() => err)));
  }

  getAll<T>(chunk: string): Observable<T[]> {
    return this.http
      .get<T[]>(`${environment.API_URL}/${chunk}`)
      .pipe(catchError((err) => throwError(() => err)));
  }

  post<T, K>(chunk: string, body: T): Observable<K> {
    return this.http
      .post<K>(`${environment.API_URL}/${chunk}`, body)
      .pipe(catchError((err) => throwError(() => err)));
  }

  update<T>(chunk: string, body: T): Observable<T> {
    return this.http
      .put<T>(`${environment.API_URL}/${chunk}`, body)
      .pipe(catchError((err) => throwError(() => err)));
  }

  delete<T>(chunk: string): Observable<T> {
    return this.http
      .delete<T>(`${environment.API_URL}/${chunk}`)
      .pipe(catchError((err) => throwError(() => err)));
  }
}
