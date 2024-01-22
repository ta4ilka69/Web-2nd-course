import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { DotRequest } from './dot-request';
import { Dot } from './dot-response';

@Injectable({
  providedIn: 'root',
})
export class DotService {
  constructor(private http: HttpClient) {}
  sendDot(dot: DotRequest): Observable<boolean> {
    return this.http
      .post("http://localhost:6969/new-dot", dot, {
        observe: 'response',
        headers: { 'Content-Type': 'application/json' },
      })
      .pipe(
        map((response) => response.statusText === 'OK'|| response.ok||response.status===200),
        catchError(() => of(false))
      );
  }
  getDots(token:string): Observable<Dot[]>{
    return this.http.get<Dot[]>("http://localhost:6969/dots/"+token).pipe(
      map((response)=> response),
      catchError(()=>of([]))
    );
  }
}
