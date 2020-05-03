import { AppointmentsService } from './../appointments.service';
import { Appointment } from './../Appointment';
import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators'; 

@Component({
  selector: 'app-appoinment-list',
  templateUrl: './appoinment-list.component.html',
  styleUrls: ['./appoinment-list.component.css']
})
export class AppoinmentListComponent implements OnInit {


  public loading=true;
  public errorMsg:string;
  public sucessMsg:string;
  public appointments:Appointment[];
  public columns=['appointmentDate','name','email','cancel'];
  displayedColumns: string[] = ['appointmentDate','name','email','cancel'];
  constructor(private appointmentService:AppointmentsService) { console.log("constructor"); }

  ngOnInit(): void {
   console.log("init caled");
    this.appointmentService.getAppointments().subscribe((appointments:Appointment[])=>{
     this.appointments=appointments;
    console.log("get working"+appointments[0]._id);
    console.log("get working"+appointments[0].appoinmentDate);
    console.log("get working"+appointments[0].email);
    console.log("get working"+appointments[0].name);

   this.loading=false;
   },(error:ErrorEvent)=>{
    this.errorMsg=error.error.message;
   console.log("get error");
      this.loading=false;
   });
   
  }

  cancelAppointments(id:string)
  {
    this.appointmentService.cancelAppointments(id)
    .pipe(
      mergeMap(()=>this.appointmentService.getAppointments())
      )
      .subscribe((appointments:Appointment[])=>{
        this.appointments=appointments;
        this.sucessMsg="Sucessfully Deleted";
      },
      (error:ErrorEvent)=>{
        this.errorMsg=error.error.message;
        
      });
  }
}

