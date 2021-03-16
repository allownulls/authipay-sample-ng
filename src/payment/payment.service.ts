import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IPaymentData } from './payment-data';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }
  
  postAmount(data): Observable<IPaymentData>{
    var resData : IPaymentData;
    const response = this.http.post<IPaymentData>(
      'https://localhost:5001/home/send/',      
      data,
      {
        headers:{
          'Content-Type': 'application/json',
          'rxjs-custom-header':'Rxjs'
        },
        responseType:"json"
      }      
    ).pipe(
      catchError(err => this.handleError(err))
    );
    return response;
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {    
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
