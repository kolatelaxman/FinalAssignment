import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HotelAmenities } from 'src/app/Models/AllModels.Models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelAmenitiesServiceService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  
  getAllHotelAmenities(): Observable<HotelAmenities[]>{
    return this.http.get<HotelAmenities[]>(this.baseApiUrl + '/api/HotelAmenities');
  }

  addHotelAmenities(addHotelAmenitiesRequest:HotelAmenities):Observable<HotelAmenities>{  
    // addcounrtyRequest.id =0;
    return this.http.post<HotelAmenities>(this.baseApiUrl + '/api/HotelAmenities',addHotelAmenitiesRequest);
  }

  getHotelAmenities(id :string):Observable<HotelAmenities>{
     console.log("get country",id);
  return  this.http.get<HotelAmenities>(this.baseApiUrl + '/api/HotelAmenities/'+ id);
  }

  updateHotelAmenities(id: number, updateHotelAmenitiesRequest:HotelAmenities):
  Observable<HotelAmenities>{
  return this.http.put<HotelAmenities>(this.baseApiUrl + '/api/HotelAmenities/'+id, updateHotelAmenitiesRequest);
}

   deleteHotelAmenities(id:number): Observable<HotelAmenities>{
   return  this.http.delete<HotelAmenities>(this.baseApiUrl + '/api/HotelAmenities/'+ id);
}
}



