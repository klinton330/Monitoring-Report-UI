import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchComponent } from './component/fetch/fetch.component';
import { AddComponent } from './component/add/add.component';
import { HomeComponent } from './component/home/home.component';
import { FetchByDateComponent } from './component/fetch-by-date/fetch-by-date.component';
import { ResultComponent } from './component/result/result.component';
import { ErrorComponent } from './component/error/error.component';
import { ResultByDateComponent } from './component/result-by-date/result-by-date.component';
import { EditdeleteComponent } from './component/editdelete/editdelete.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fetch', component: FetchComponent },
  { path: 'fetchbydate', component: FetchByDateComponent },
  { path: 'add', component: AddComponent },
  { path: 'result', component: ResultComponent },
  { path: 'resultbydate', component: ResultByDateComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'resultbydate/editresult/:id', component: AddComponent },
  { path: 'editdeleteData/editresult/:id', component: AddComponent },
  { path: 'editdeleteData', component: EditdeleteComponent },
{path:'**',component:ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
