import { Component, ViewChild } from '@angular/core';
import { Monitor } from '../../model/monitor';
import { MonitorService } from '../../service/monitor.service';
import { ActivatedRoute, Router } from '@angular/router';

import { DatasharingService } from '../../service/datasharing.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  monitor: Monitor = new Monitor();
  isIdPresent: boolean = false;
  listOfData?: Monitor[];
<<<<<<< HEAD
  error?:string;
  errorFlag:boolean=false
  constructor(private _monitorService: MonitorService, 
    private _router: Router, 
    private _activatedRoute: ActivatedRoute, 
=======
  error?: string;
  constructor(private _monitorService: MonitorService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
>>>>>>> 9ea34cca22945afa8b3df3e6a62fc20f096af243
    private datasharing: DatasharingService,
    private location: Location, private toastr: ToastrService) { }
  submitData(formData: any): void {
    console.log(formData)

    this._monitorService.saveData(formData.value).subscribe({
      error: (error) => {
<<<<<<< HEAD
        console.log(error)
        this.errorFlag=true;
        this.error=error.message
        this._router.navigateByUrl('/error')
=======
        console.log(error.message)
        this.error = error.message
        this.toastr.error(error.message, 'Error')
        // this._router.navigateByUrl('/error')
>>>>>>> 9ea34cca22945afa8b3df3e6a62fc20f096af243
      },    // errorHandler 
      next: (data) => {
        console.log("from componenet" + data)
        formData.reset()
        this.toastr.success("Data saved Successfully", 'Success')
        this._router.navigateByUrl("/add")
      },
    })
  }
  getAllDate() {
    this._monitorService.getAllData().subscribe((data) => this.listOfData = data, (error) => this.error = error.status);
  }
  updateMonitorData(monitordata: any) {
    this._monitorService.updateData(monitordata.id, monitordata).subscribe({
      error: (error) => {
        console.log(error.message)
        this.error = error.message
        this.toastr.error(error.message, 'Error')
        this._router.navigateByUrl("/editdeleteData")
      },    // errorHandler 
      next: (data) => {
        console.log("from componenet" + data)
        this._monitorService.getByDate(monitordata.dateField).subscribe((data) => {
          this.listOfData = data
          this.datasharing.setListOfData(this.listOfData)
          console.log(this._router.url);
          if (this._router.url.includes("/editdeleteData/editresult/")) {
            this.getAllDate()
            this._router.navigateByUrl("/editdeleteData")
            this.toastr.success("Updated Successfully", 'Success')
          }
          else {
            this._router.navigateByUrl("/resultbydate")
          }

        })

      },
    })
  }
  onCancelClick(): void {
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
