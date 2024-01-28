import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hourly } from '../model/hourly';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HourlyService {

  constructor(private httpClient: HttpClient) { }
  private baseURL: String = "http://localhost:8085/api/v1/hourly"

  saveHourly(hourly:Hourly){
    return this.httpClient.post(`${this.baseURL}/save`,hourly).pipe((catchError(this.handleError)))
  }

  private handleError(error: any) {
    console.error('API Error:', error);
    if (error.status === 400) {
      return throwError(() => new Error(error.error.message));
    } else if (error.status === 404) {
      return throwError(() => new Error(error.error.message));
    } else {
      return throwError(() => new Error('Something went wrong. Please try again later.'));
    }
  }
}
