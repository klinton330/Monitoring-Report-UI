import { Component } from '@angular/core';
import { Monitor } from '../../model/monitor';
import { DatasharingService } from '../../service/datasharing.service';
import { MonitorService } from '../../service/monitor.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-result-by-date',
  templateUrl: './result-by-date.component.html',
  styleUrl: './result-by-date.component.css'
})
export class ResultByDateComponent {
  listOfData:Monitor[]=[]
  date?:any
  pdfURL?:string;
  fileName?:string;
 
  constructor(private datasharing:DatasharingService,private _monitorService: MonitorService){}
  generatePDF(){
     this.fileName="Report_"+`${this.date}`+".pdf"
    this._monitorService.generatePDF(this.date).subscribe(
      (data)=>{  const url = window.URL.createObjectURL(data);
         FileSaver.saveAs(data, this.fileName);})
       //window.open(url, '_blank');})
  }
  ngOnInit(): void {
    this.listOfData=this.datasharing.getListOfData();
    this.date=this.listOfData[0].dateField
  }
}


