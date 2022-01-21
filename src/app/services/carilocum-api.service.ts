import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable, retry, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import * as Enums from '../helper/enum';
import { Locum } from '../model/locum.interface';
import { Feedback } from '../model/feedback.interface';

@Injectable({
  providedIn: 'root'
})
export class CarilocumAPIService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Variables
  public enum: any = Enums;
  public locumList: Locum[] = [];
  public feedbackList: Feedback[] = []


  // API EndPoint
  getCountLocum(): Observable<any> {
    return this.httpClient.get(this.enum.API_LINK.DOMAIN + this.enum.API_LINK.MAIN_TABLE).pipe(retry(3), catchError(this.errorHandler));
  }
  
  getCommentAll(): Observable<any> {
    return this.httpClient.get(this.enum.API_LINK.DOMAIN + this.enum.API_LINK.COMMENT).pipe(retry(3), catchError(this.errorHandler));
  }

  getCommentPagination(page: number, limit: number): Observable<any> {
    return this.httpClient.get(this.enum.API_LINK.DOMAIN + this.enum.API_LINK.COMMENT + '?_page=' + page + '&_limit=' + limit).pipe(retry(3), catchError(this.errorHandler));
  }


  // Error Handling
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMsg = '';
    if(error.error instanceof ErrorEvent) {
      errorMsg = error.error.message;
    } else {
      errorMsg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMsg);
    return throwError(errorMsg);
  }

}
