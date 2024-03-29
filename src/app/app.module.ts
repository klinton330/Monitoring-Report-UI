import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FetchComponent } from './component/fetch/fetch.component';
import { AddComponent } from './component/add/add.component';
import { HomeComponent } from './component/home/home.component';
import { FetchByDateComponent } from './component/fetch-by-date/fetch-by-date.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResultComponent } from './component/result/result.component';
import { ErrorComponent } from './component/error/error.component';
import { ResultByDateComponent } from './component/result-by-date/result-by-date.component';
import { EditdeleteComponent } from './component/editdelete/editdelete.component';
import { ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HourlyComponent } from './component/hourly/hourly.component';
import { ChartComponent } from './component/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FetchComponent,
    AddComponent,
    HomeComponent,
    FetchByDateComponent,
    ResultComponent,
    ErrorComponent,
    ResultByDateComponent,
    EditdeleteComponent,
    HourlyComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ToastNoAnimationModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
