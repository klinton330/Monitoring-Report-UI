import { Component, Input } from '@angular/core';
import { MonitorService } from '../../service/monitor.service';
import { Router } from '@angular/router';
import { Monitor } from '../../model/monitor';
import { DatasharingService } from '../../service/datasharing.service';

@Component({
  selector: 'app-fetch-by-date',
  templateUrl: './fetch-by-date.component.html',
  styleUrl: './fetch-by-date.component.css'
})
export class FetchByDateComponent {
  dateField: string = '';
  listOfData: Monitor[] = [];
  error?:string
  constructor(private _monitorService: MonitorService, private _router: Router, private datasharing: DatasharingService) { }

  getDataByDate() {
    this._monitorService.getByDate(this.dateField).subscribe({error: (error) => {
      this.error = error.message;
      //this._router.navigateByUrl('/fetch')
    },next:(data) => {
      this.listOfData = data
      this._monitorService.setMonitor
      this.datasharing.setListOfData(this.listOfData)
      this._router.navigateByUrl("/resultbydate")
    }})
  }
  getDataByDateTotal() {
    this._monitorService.getByDateTotal(this.dateField).subscribe({error: (error) => {
      this.error = error.message;
      //this._router.navigateByUrl('/fetch')
    },next:(data) => {
      console.log(data)
      this.listOfData = data
      this._monitorService.setMonitor
      this.datasharing.setListOfData(this.listOfData)
      this._router.navigateByUrl("/resultbydate")
    }})
  }

  getDataByDatefromUpdate(data: string) {
    this._monitorService.getByDate(data).subscribe({
      error: (error) => {
        this.error = error.message;
        //this._router.navigateByUrl('/fetch')
      }, next: (data) => {
        this.listOfData = data
        this.datasharing.setListOfData(this.listOfData)
        this._router.navigateByUrl("/resultbydate")
      }
    })
  }

  
}
