import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Airport } from 'src/app/Models/AllModels.Models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AirportServiceService {
  baseApiUrl: string = environment.baseApiUrl;


  constructor(private http: HttpClient) { }

  getAllAirport(): Observable<Airport[]>{
    return this.http.get<Airport[]>(this.baseApiUrl + '/api/AirPorts');
  }

  addAirport(addUAirportRequest:Airport):Observable<Airport>{  
    // addcounrtyRequest.id =0;
    return this.http.post<Airport>(this.baseApiUrl + '/api/AirPorts',addUAirportRequest);
  }

  getAirport(id :string):Observable<Airport>{
     console.log("get country",id);
  return  this.http.get<Airport>(this.baseApiUrl + '/api/AirPorts/'+ id);
  }

  updateAirport(id: number, updateUAirportRequest:Airport):
  Observable<Airport>{
  return this.http.put<Airport>(this.baseApiUrl + '/api/AirPorts/'+id, updateUAirportRequest);
}

   deleteAirport(id:number): Observable<Airport>{
   return  this.http.delete<Airport>(this.baseApiUrl + '/api/AirPorts/'+ id);
}
}

