import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flightshcedule } from 'src/app/Models/AllModels.Models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlightshceduleServiceService {
  baseApiUrl: string = environment.baseApiUrl;


  constructor(private http: HttpClient) { }

  getAllFlightshcedule() : Observable<Flightshcedule[]>{
    return this.http.get<Flightshcedule[]>(this.baseApiUrl + '/api/FlightShcedules');
   }
 
   addFlightshcedule(addFlightshcedulesRequest:Flightshcedule):Observable<Flightshcedule>{  
     // addcounrtyRequest.id =0;
     console.log("come in service");
    return this.http.post<Flightshcedule>(this.baseApiUrl + '/api/FlightShcedules',addFlightshcedulesRequest);
   }
 
   getFlightshedule(id :string):Observable<Flightshcedule>{
      console.log("get country",id);
   return  this.http.get<Flightshcedule>(this.baseApiUrl + '/api/FlightShcedules/'+ id);
   }
 

 updateFlightshcedule(id: number, updateshcedulesRequest:Flightshcedule):
  Observable<Flightshcedule>{
   return this.http.put<Flightshcedule>(this.baseApiUrl + '/api/FlightShcedules/'+id, updateshcedulesRequest);
 
 }
 
 deleteFlightShcedule(id:number): Observable<Flightshcedule>{
   return  this.http.delete<Flightshcedule>(this.baseApiUrl + '/api/FlightShcedules/'+ id);
 }
 }
 

