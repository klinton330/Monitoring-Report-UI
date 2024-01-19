import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Monitor } from '../model/monitor';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {

  constructor(private httpClient: HttpClient) { }

  private baseURL: String = "http://localhost:8085/api/v1"

  saveData(monitorData:Monitor){
    return this.httpClient.post(`${this.baseURL}/save`,monitorData).pipe((catchError(this.handleError)))
  }
  updateData(id:number,monitor:Monitor){
    console.log("updateDate:"+monitor)
    return this.httpClient.post(`${this.baseURL}/update/${id}`,monitor).pipe((catchError(this.handleError)))
  }

  getByDateAndBU(dateField: string, businessUnit: string): Observable<Monitor> {
    let params = new HttpParams()
      .set('date', dateField)
      .set('businessUnit', businessUnit);
    return this.httpClient.get(`${this.baseURL}/fetch`, { params }).pipe((catchError(this.handleError)))
  }

  getByDate(dateField:string): Observable<Monitor[]>{
    return this.httpClient.get<Monitor[]>(`${this.baseURL}/fetch/${dateField}`).pipe((catchError(this.handleError)))
  }
  getByDateTotal(dateField:string): Observable<Monitor[]>{
    return this.httpClient.get<Monitor[]>(`${this.baseURL}/fetch/total/${dateField}`).pipe((catchError(this.handleError)))
  }
  
  getById(id:number):Observable<Monitor>{
    return this.httpClient.get<Monitor>(`${this.baseURL}/fetchbyid/${id}`).pipe((catchError(this.handleError)))
  }
  getAllData():Observable<Monitor[]>{
    return this.httpClient.get<Monitor[]>(`${this.baseURL}/fetchdata`).pipe((catchError(this.handleError)))
  }
  deleteData(id:number):Observable<any>{
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`,{responseType:'text'}).pipe((catchError(this.handleError)))
     
  }
  generatePDF(dateField:string):Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/pdf' });
    return this.httpClient.get(`${this.baseURL}/fetch/total/pdf/${dateField}`,{responseType: 'blob',headers}).pipe((catchError(this.handleError)))
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

  monitor: Monitor | undefined

  setMonitor(monitor: Monitor) {
    this.monitor = monitor;
  }

  getMonitor(): Monitor | undefined {
    return this.monitor;
  }
}
