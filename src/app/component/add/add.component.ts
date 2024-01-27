import { Component, ViewChild } from '@angular/core';
import { Monitor } from '../../model/monitor';
import { MonitorService } from '../../service/monitor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FetchByDateComponent } from '../fetch-by-date/fetch-by-date.component';
import { DatasharingService } from '../../service/datasharing.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  monitor: Monitor = new Monitor();
  isIdPresent: boolean = false;
  listOfData?: Monitor[];
  error?:string;
  errorFlag:boolean=false
  constructor(private _monitorService: MonitorService, 
    private _router: Router, 
    private _activatedRoute: ActivatedRoute, 
    private datasharing: DatasharingService,
    private location:Location) { }
  submitData(formData: any): void {
    console.log(formData)

    this._monitorService.saveData(formData.value).subscribe({
      error: (error) => {
        console.log(error)
        this.errorFlag=true;
        this.error=error.message
        this._router.navigateByUrl('/error')
      },    // errorHandler 
      next: (data) => {
        console.log("from componenet" + data)
        formData.reset()
        this._router.navigateByUrl("/add")
      },
    })
  }
  getAllDate(){
    this._monitorService.getAllData().subscribe((data) => this.listOfData = data,(error)=>this.error=error.status);
  }
  updateMonitorData(monitordata: any) {
    this._monitorService.updateData(monitordata.id, monitordata).subscribe({
      error: (error) => {
        console.log(error)
        this._router.navigateByUrl('/error')
      },    // errorHandler 
      next: (data) => {
        console.log("from componenet" + data)
        this._monitorService.getByDate(monitordata.dateField).subscribe((data) => {
          this.listOfData = data
          this.datasharing.setListOfData(this.listOfData)
          console.log(this._router.url);
          if(this._router.url.includes("/editdeleteData/editresult/")){
            this.getAllDate()
            console.log("inside")
            this._router.navigateByUrl("/editdeleteData")
          }
          else{
          this._router.navigateByUrl("/resultbydate")
          }
        })

      },
    })
  }
  onCancelClick():void{
    this.location.back();
  }
  ngOnInit(): void {
    let isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');
    console.log(isIdPresent)
    if (isIdPresent) {
      this.isIdPresent = true;
      const id = Number(this._activatedRoute.snapshot.paramMap.get('id'))
      this._monitorService.getById(id).subscribe(data => this.monitor = data)
    }
  }
}
