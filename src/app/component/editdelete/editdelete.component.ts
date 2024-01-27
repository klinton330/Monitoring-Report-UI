import { Router } from "@angular/router";
import { Monitor } from "../../model/monitor";
import { MonitorService } from "../../service/monitor.service";
import { Component } from "@angular/core";

@Component({
  selector: 'app-editdelete',
  templateUrl: './editdelete.component.html',
  styleUrl: './editdelete.component.css',
})
export class EditdeleteComponent {
  listOfData: Monitor[] = [];
  filteredList: Monitor[] = [];
  isNoChange: boolean = true;
  dates?: string;
  bu?: string;
  error?: string;
  deleteId?: any;
  filteredData?: boolean;

  constructor(
    private _monitorService: MonitorService,
    private _router: Router
  ) {}

  filterByDate(date: string) {
    this.isNoChange = false;
    if (date != '') {
      this.filteredList = this.listOfData.filter((data) => {
        const filterDate = data.dateField === date;
        return filterDate;
      });
    } else {
      this.filteredList = this.listOfData;
    }
  }
  delete(id: any) {
    this.deleteId = id;
  }
  deletefromfilter(id: any) {
    this.deleteId = id;
    this.filteredData = true;
  }

  deleteModel() {
    if (this.filteredData) {
      this.filteredList.forEach((x, index) => {
        if (x.id == this.deleteId) {
          this.filteredList.splice(index, 1);
        }
      });
    }
    this._monitorService.deleteData(this.deleteId).subscribe({
      error: (error) => (error = error.message),
      next: (data) => {
        console.log(data);
        this.getAllDate();
        this._router.navigateByUrl('/editdeleteData');
      },
    });
  }

  getAllDate() {
    this._monitorService.getAllData().subscribe(
      (data) => (this.listOfData = data),
      (error) => (this.error = error.status)
    );
  }
  ngOnInit(): void {
    console.log('ngInit');
    this._monitorService.getAllData().subscribe(
      (data) => (this.listOfData = data),
      (error) => (this.error = error.status)
    );
  }
}