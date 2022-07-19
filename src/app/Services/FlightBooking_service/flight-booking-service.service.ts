import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightBooking } from 'src/app/Models/AllModels.Models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlightBookingServiceService {
  baseApiUrl: string = environment.baseApiUrl;


  constructor(private http: HttpClient) { }
  getAllflightBooking() : Observable<FlightBooking[]>{
    return this.http.get<FlightBooking[]>(this.baseApiUrl + '/api/FlightBookings');
   }
 
   addflightBooking(addFlightRequest:FlightBooking):Observable<FlightBooking>{  
     // addcounrtyRequest.id =0;
     console.log("come in service");
    return this.http.post<FlightBooking>(this.baseApiUrl + '/api/FlightBookings',addFlightRequest);
   }
   getflightBooking(id :string):Observable<FlightBooking>{
    console.log("get country",id);
 return  this.http.get<FlightBooking>(this.baseApiUrl + '/api/FlightBookings/'+ id);
 }

updateflightBooking(id: number, updateflightRequest:FlightBooking):
Observable<FlightBooking>{
 return this.http.put<FlightBooking>(this.baseApiUrl + '/api/FlightBookings/'+id, updateflightRequest);

}

deleteflightBooking(id:number): Observable<FlightBooking>{
 return  this.http.delete<FlightBooking>(this.baseApiUrl + '/api/FlightBookings/'+ id);
}
}




 
