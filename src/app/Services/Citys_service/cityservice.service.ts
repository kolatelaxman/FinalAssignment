import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { City } from '../../Models/AllModels.Models';

@Injectable({
  providedIn: 'root'
})
 

export class CityServiceService {
 
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllCity() : Observable<City[]>{
    //  console.log("get country",CountryRefId);
   return this.http.get<City[]>(this.baseApiUrl + '/api/Cities');
  }


  addCity(addCityRequest:City):Observable<City>{  
    // addcounrtyRequest.id =0;
    console.log("come in service");
   return this.http.post<City>(this.baseApiUrl + '/api/Cities',addCityRequest);
  }

  getCity(id :string):Observable<City>{
    console.log("get Cities",id);
 return  this.http.get<City>(this.baseApiUrl + '/api/Cities/'+ id);
 }
  

updateCity(id: number, updatecityRequest:City):
Observable<City>{
 return this.http.put<City>(this.baseApiUrl + '/api/Cities/'+id, updatecityRequest);
}


deleteCity(id:number): Observable<City>{
  return  this.http.delete<City>(this.baseApiUrl + '/api/Cities/'+ id);
}
}