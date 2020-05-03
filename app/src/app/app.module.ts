import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
////add
import { HttpClientModule } from '@angular/common/http';
import{ FormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';


import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {  MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';

import { HomeComponent } from './home/home.component';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { AppoinmentListComponent } from './appoinment-list/appoinment-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppoinmentComponent,
    AppoinmentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatMenuModule,
   MatButtonModule,
   MatInputModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatToolbarModule,
   FormsModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
