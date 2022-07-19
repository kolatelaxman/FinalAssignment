import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightTravel } from 'src/app/Models/AllModels.Models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlightTravelService {
  baseApiUrl: string = environment.baseApiUrl;


  constructor(private http: HttpClient) { }

  
  getAllFlight() : Observable<FlightTravel[]>{
    return this.http.get<FlightTravel[]>(this.baseApiUrl + '/api/FlightTravels');
   }
 
   addFlight(addFlightRequest:FlightTravel):Observable<FlightTravel>{  
     // addcounrtyRequest.id =0;
     console.log("come in service");
    return this.http.post<FlightTravel>(this.baseApiUrl + '/api/FlightTravels',addFlightRequest);
   }
 
   getFlight(id :string):Observable<FlightTravel>{
      console.log("get country",id);
   return  this.http.get<FlightTravel>(this.baseApiUrl + '/api/FlightTravels/'+ id);
   }
 
  
 
 updateFlight(id: number, updatecountryRequest:FlightTravel):
  Observable<FlightTravel>{
   return this.http.put<FlightTravel>(this.baseApiUrl + '/api/FlightTravels/'+id, updatecountryRequest);
 
 }
 
 deleteFlight(id:number): Observable<FlightTravel>{
   return  this.http.delete<FlightTravel>(this.baseApiUrl + '/api/FlightTravels/'+ id);
 }
 }
 
  
  

