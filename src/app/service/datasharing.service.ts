import { Injectable } from '@angular/core';
import { Monitor } from '../model/monitor';

@Injectable({
  providedIn: 'root'
})
export class DatasharingService {

  constructor() { }

  listOfData:Monitor[]=[];

  
  getListOfData(): Monitor[] {
    return this.listOfData;
  }

  setListOfData(data: Monitor[]): void {
    this.listOfData = data;
  }

}
