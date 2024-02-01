import { Component } from '@angular/core';
import { Hourly } from '../../model/hourly';
import { ActivatedRoute, Router } from '@angular/router';
import { HourlyService } from '../../service/hourly.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrl: './hourly.component.css',
})
export class HourlyComponent {
  hourly: Hourly = new Hourly();
  isIdPresent?: boolean = false;
  errorFlag?: boolean;
  error?: string;
  timeFrame?: String[] = [
    '7:00 AM - 8:00 AM',
    '8:00 AM - 9:00 AM',
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 1:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM',
    '6:00 PM - 7:00 PM',
    '7:00 PM - 8:00 PM',
    'Others',
  ];
  
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _hourlyService: HourlyService,
    private toastr: ToastrService,
    private _router: Router,
    private location: Location,
  ) {}
  submitData(hourlydata: any) {
    console.log(hourlydata);
    this._hourlyService.saveHourly(hourlydata.value).subscribe({
      error: (error) => {
        this.errorFlag = true;
        this.error = error.message;
        this.toastr.error(this.error, 'Error');
        this.error = undefined;
        this._router.navigateByUrl('/hourly');
      },
      next: (data) => {
        hourlydata.reset();
        this.toastr.success('Data saved Successfully', 'Success');
        this._router.navigateByUrl('/hourly');
      },
    });
  }

  updatehourlydata(hourly: Hourly) {}

  onCancelClick(): void {
    this.location.back();
  }

  ngOnInit(): void {
    let isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');
    console.log(isIdPresent);
    if (isIdPresent) {
      this.isIdPresent = true;
    }
  }
}
