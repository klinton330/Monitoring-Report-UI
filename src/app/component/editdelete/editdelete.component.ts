import { Component } from '@angular/core';
import { Monitor } from '../../model/monitor';
import { DatasharingService } from '../../service/datasharing.service';
import { MonitorService } from '../../service/monitor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editdelete',
  templateUrl: './editdelete.component.html',
  styleUrl: './editdelete.component.css'
})
export class EditdeleteComponent {
  listOfData: Monitor[] = []
  filteredList: Monitor[] = []
  isNoChange: boolean = true
  dates?: string;
  bu?: string
  error?:string


  constructor(private _monitorService: MonitorService,private _router: Router) { }

  
  filterByDate(date: string) {
    this.isNoChange = false;
    if (date != '') {
      this.filteredList = this.listOfData.filter((data) => {
        const filterDate =  data.dateField === date;
        return filterDate
      })
    }
    else {
      this.filteredList = this.listOfData;
    }
  }
  delete(id:any){
     alert("you want to delete id:"+id)
     this._monitorService.deleteData(id).subscribe({error:(error)=>error=error.message,next:(data)=>{
          console.log(data)
          this.getAllDate();
          this._router.navigateByUrl("/editdeleteData")
     }})
  }

  getAllDate(){
    this._monitorService.getAllData().subscribe((data) => this.listOfData = data,(error)=>this.error=error.status);
  }
  ngOnInit(): void {
    console.log("ngInit")
    this._monitorService.getAllData().subscribe((data) => this.listOfData = data,(error)=>this.error=error.status);

  }
}


