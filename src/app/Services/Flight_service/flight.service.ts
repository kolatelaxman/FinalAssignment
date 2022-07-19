import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { flight } from 'src/app/Models/AllModels.Models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  baseApiUrl: string = environment.baseApiUrl;


  constructor(private http: HttpClient) { }

  getAllflight() : Observable<flight[]>{
    return this.http.get<flight[]>(this.baseApiUrl + '/api/Flights');
   }
 
   addflight(addcounrtyRequest:flight):Observable<flight>{  
     // addcounrtyRequest.id =0;
     console.log("come in service");
    return this.http.post<flight>(this.baseApiUrl + '/api/Flights',addcounrtyRequest);
   }
   getflight(id :string):Observable<flight>{
    console.log("get country",id);
 return  this.http.get<flight>(this.baseApiUrl + '/api/Flights/'+ id);
 }



updateflight(id: number, updatecountryRequest:flight):
Observable<flight>{
 return this.http.put<flight>(this.baseApiUrl + '/api/Flights/'+id, updatecountryRequest);

}

deleteflight(id:number): Observable<flight>{
 return  this.http.delete<flight>(this.baseApiUrl + '/api/Flights/'+ id);
}
}



