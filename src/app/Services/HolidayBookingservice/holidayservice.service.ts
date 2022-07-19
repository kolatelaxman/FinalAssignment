import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HolidayBooking } from 'src/app/Models/AllModels.Models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HolidayserviceService {
  baseApiUrl: string = environment.baseApiUrl;


  constructor(private http: HttpClient) { }

 
  getAllHolidayBooking() : Observable<HolidayBooking[]>{
    return this.http.get<HolidayBooking[]>(this.baseApiUrl + '/api/HolidayBookings');
   }
 
   addHolidayBooking(addFlightRequest:HolidayBooking):Observable<HolidayBooking>{  
     // addcounrtyRequest.id =0;
     console.log("come in service");
    return this.http.post<HolidayBooking>(this.baseApiUrl + '/api/HolidayBookings',addFlightRequest);
   }
 
   getHolidayBooking(id :string):Observable<HolidayBooking>{
      console.log("get country",id);
   return  this.http.get<HolidayBooking>(this.baseApiUrl + '/api/HolidayBookings/'+ id);
   }
 
  
 
 updateHolidayBooking(id: number, updatecountryRequest:HolidayBooking):
  Observable<HolidayBooking>{
   return this.http.put<HolidayBooking>(this.baseApiUrl + '/api/HolidayBookings/'+id, updatecountryRequest);
 
 }
 
 deleteDelete(id:number): Observable<HolidayBooking>{
   return  this.http.delete<HolidayBooking>(this.baseApiUrl + '/api/HolidayBookings/'+ id);
 }
 }
 

