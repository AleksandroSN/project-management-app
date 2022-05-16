import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { concatMap, Observable, Subscriber } from "rxjs";
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

  // eslint-disable-next-line class-methods-use-this
  chain<T>(sources: Observable<any>[]): Observable<T> {
    return new Observable((subscriber: Subscriber<any>) => {
      const len = sources.length;
      const values: any[] = [];
      if (len === 0) {
        subscriber.complete();
        return;
      }
      new Observable<any>((sub: Subscriber<any>) => {
        sources.forEach((source: Observable<any>, index: number) => {
          sub.next(source);
          if (index === len - 1) {
            sub.complete();
          }
        });
      })
        .pipe(concatMap((value: Observable<any>) => value))
        .subscribe({
          next(response) {
            values.push(response);
          },
          error(err) {
            throw err;
            subscriber.complete();
          },
          complete() {
            subscriber.next(values);
            subscriber.complete();
          },
        });
    });
  }
}
