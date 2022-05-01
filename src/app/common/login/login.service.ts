import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class LoginService {

  registerURL= '/register-user';

  registerUser(data: any): Observable<any> {
    return this.http.post<Response>(this.registerURL, data)
    .pipe(
      // map(response => response.json()),
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  constructor(private http: HttpClient) { }

}
