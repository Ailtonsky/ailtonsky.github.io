import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError } from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class InterestsService {

  apiURL = "http://localhost:8080/interest"
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers : new HttpHeaders( {
      'content-Type' : 'application/json'
    })
  }

  getInterest() : Observable<any> {
    return this.http.get<any>(this.apiURL, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  handleError(error :any){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      //Get Client-side error
      errorMessage = error.error.message;
    } else {
      //Get server-side error
      errorMessage = `Error code: ${error.status}\n Message: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}