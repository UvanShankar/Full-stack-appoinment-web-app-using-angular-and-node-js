import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppoinmentListComponent } from './appoinment-list/appoinment-list.component';


const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'appoinment-list',
    component : AppoinmentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
