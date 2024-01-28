import { Injectable } from '@angular/core';
import { Charts } from '../model/chart';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

 constructor(private httpClient: HttpClient) { }

  baseUrl="http://localhost:8085/api/v1/hourly/chartmultiple";

  getDataForChart(dateField: string, businessUnit: string,metric:string[]):Observable<any>{
    const optionsString = metric.join(',');
    console.log(optionsString,dateField,businessUnit)
    let params = new HttpParams()
    .set('date', dateField)
    .set('businessUnit',businessUnit)
    .set('metrics',optionsString)
    return this.httpClient.get(`${this.baseUrl}`,{params})
 }
}
