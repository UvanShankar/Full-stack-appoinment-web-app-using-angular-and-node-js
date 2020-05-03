import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Appointment } from './../Appointment';
import { AppointmentsService } from './../appointments.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.css']
})
export class AppoinmentComponent implements OnInit {
  public errorMsg:string;
  public sucessMsg:string;
  public appoinmentDate:string;
  public name:string;
  public email:string;
  
  constructor(private appointmentsService:AppointmentsService) { }

  ngOnInit(): void {
  }

createAppointment(){
  if(!this.appoinmentDate||!this.email||!this.name)
  {
    this.errorMsg="All the fields are required";
  }else{
  this.sucessMsg='';
  this.errorMsg='';
  this.appointmentsService.createAppointments(this.appoinmentDate,this.name,this.email)
  .subscribe((createdAppoinment:Appointment)=>{
    this.sucessMsg="Appointment Booked Sucessfully for "+this.appoinmentDate;
  this.appoinmentDate="";
  this.name="";
  this.email="";
  //const appoinmentDate=new Date(createdAppoinment.appoinmentDate).toDateString();
  //this.sucessMsg="Appointment Booked Sucessfully for "+appoinmentDate;
  },(error:ErrorEvent)=>{
    this.errorMsg="This date ia already booked";
    console.log("mesere:"+error);
  });}
}
}
