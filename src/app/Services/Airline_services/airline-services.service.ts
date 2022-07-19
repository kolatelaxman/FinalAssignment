import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Airline } from 'src/app/Models/AllModels.Models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AirlineServicesService {

  baseApiUrl: string = environment.baseApiUrl;


  constructor(private http: HttpClient) { }

  getAllAirline(): Observable<Airline[]>{
    return this.http.get<Airline[]>(this.baseApiUrl + '/api/Airlines');
  }

  addAirline(addUAirlineRequest:Airline):Observable<Airline>{  
    // addcounrtyRequest.id =0;
    return this.http.post<Airline>(this.baseApiUrl + '/api/Airlines',addUAirlineRequest);
  }

  getAirline(id :string):Observable<Airline>{
     console.log("get country",id);
  return  this.http.get<Airline>(this.baseApiUrl + '/api/Airlines/'+ id);
  }

  updateAirline(id: number, updateUAirlineRequest:Airline):
  Observable<Airline>{
  return this.http.put<Airline>(this.baseApiUrl + '/api/Airlines/'+id, updateUAirlineRequest);
}

   deleteAirline(id:number): Observable<Airline>{
   return  this.http.delete<Airline>(this.baseApiUrl + '/api/Airlines/'+ id);
}
}

