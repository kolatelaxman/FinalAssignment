import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Locations } from 'src/app/Models/AllModels.Models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  
  
  getAllLocation() : Observable<Locations[]>{
    return this.http.get<Locations[]>(this.baseApiUrl + '/api/Locations');
   }
 
   addLocation(addFlightRequest:Locations):Observable<Locations>{  
     // addcounrtyRequest.id =0;
     console.log("come in service");
    return this.http.post<Locations>(this.baseApiUrl + '/api/Locations',addFlightRequest);
   }
 
   getLocation(id :string):Observable<Locations>{
      console.log("get country",id);
   return  this.http.get<Locations>(this.baseApiUrl + '/api/Locations/'+ id);
   }
 
  
 
 updateLocaton(id: number, updatecountryRequest:Locations):
  Observable<Locations>{
   return this.http.put<Locations>(this.baseApiUrl + '/api/Locations/'+id, updatecountryRequest);
 
 }
 
 deleteDelete(id:number): Observable<Locations>{
   return  this.http.delete<Locations>(this.baseApiUrl + '/api/Locations/'+ id);
 }
 }
 
  

 
