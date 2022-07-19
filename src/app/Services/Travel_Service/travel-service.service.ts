import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TravelClass } from 'src/app/Models/AllModels.Models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TravelServiceService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  
  getAllTravel(): Observable<TravelClass[]>{
    return this.http.get<TravelClass[]>(this.baseApiUrl + '/api/TravelClasses');
  }

  addTravel(addHotelRequest:TravelClass):Observable<TravelClass>{  
    // addcounrtyRequest.id =0;
    return this.http.post<TravelClass>(this.baseApiUrl + '/api/TravelClasses',addHotelRequest);
  }

  getTravel(id :string):Observable<TravelClass>{
     console.log("get country",id);
  return  this.http.get<TravelClass>(this.baseApiUrl + '/api/TravelClasses/'+ id);
  }

  updateTravel(id: number, updateHotelRequest:TravelClass):
  Observable<TravelClass>{
  return this.http.put<TravelClass>(this.baseApiUrl + '/api/TravelClasses/'+id, updateHotelRequest);
}

   deleteTravel(id:number): Observable<TravelClass>{
   return  this.http.delete<TravelClass>(this.baseApiUrl + '/api/TravelClasses/'+ id);
}
}




