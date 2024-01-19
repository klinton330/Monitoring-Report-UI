import { Component } from '@angular/core';
import { MonitorService } from '../../service/monitor.service';
import { Monitor } from '../../model/monitor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrl: './fetch.component.css'
})
export class FetchComponent {

  dateField: string = '';
  businessUnit: string = '';
  monitor?: Monitor;
  error?:string

  constructor(private _monitorService: MonitorService, private _router: Router) { }

  getDatabyDateAndBU() {
    this._monitorService.getByDateAndBU(this.dateField, this.businessUnit).subscribe({
      error: (error) => {
     this.error=error.message;
     //this._router.navigateByUrl('/fetch')
      },    // errorHandler 
      next: (data) => {
        this.monitor = data
        this._monitorService.setMonitor(this.monitor)
        this._router.navigateByUrl("/result")
      },     
    });
  }

}


