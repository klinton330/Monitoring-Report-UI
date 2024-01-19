import { Component, Input, OnInit } from '@angular/core';
import { Monitor } from '../../model/monitor';
import { MonitorService } from '../../service/monitor.service';
import { DatasharingService } from '../../service/datasharing.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent  implements OnInit{

  monitor:Monitor|undefined
  listOfData:Monitor[]=[]
 
  constructor(private _monitorService:MonitorService){}
  ngOnInit(): void {
    this.monitor=this._monitorService.getMonitor()
  }
}
