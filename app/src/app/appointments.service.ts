import { Appointment } from './Appointment';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

private BASE_URL=environment.API_URL;

  constructor(private http:HttpClient) { }

  getAppointments():Observable<Appointment[]>{
    return this.http.get<Appointment[]>('http://localhost:3000/appointments');
  }
  createAppointments(appoinmentDate:string,name:string,email:string):Observable<Appointment>{
    return this.http.post<Appointment>('http://localhost:3000/appointments',{appoinmentDate,name,email});
    
  }
  cancelAppointments(id :string):Observable<any>{
    return this.http.delete('http://localhost:3000/appointments/'+id);
  }
}
