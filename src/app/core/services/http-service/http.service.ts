import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { environment } from "@environments/environment";

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  get<T>(chunk: string): Observable<T> {
    return this.http.get<T>(`${environment.API_URL}/${chunk}`).pipe(
      catchError((err, caught) => {
        console.error(err);
        return caught;
      }),
    );
  }

  getAll<T>(chunk: string): Observable<T[]> {
    return this.http.get<T[]>(`${environment.API_URL}/${chunk}`).pipe(
      catchError((err, caught) => {
        console.error(err);
        return caught;
      }),
    );
  }

  post<T>(chunk: string, body: T): Observable<T> {
    return this.http.post<T>(`${environment.API_URL}/${chunk}`, body).pipe(
      catchError((err, caught) => {
        console.error(err);
        return caught;
      }),
    );
  }

  update<T>(chunk: string, body: T): Observable<T> {
    return this.http.put<T>(`${environment.API_URL}/${chunk}`, body).pipe(
      catchError((err, caught) => {
        console.error(err);
        return caught;
      }),
    );
  }

  delete<T>(chunk: string): Observable<T> {
    return this.http.delete<T>(`${environment.API_URL}/${chunk}`).pipe(
      catchError((err, caught) => {
        console.error(err);
        return caught;
      }),
    );
  }
}
