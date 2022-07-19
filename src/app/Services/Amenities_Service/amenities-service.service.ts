import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Amenities } from '../../Models/AllModels.Models';

@Injectable({
  providedIn: 'root'
})
export class AmenitiesServiceService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllAmenities(): Observable<Amenities[]>{
    return this.http.get<Amenities[]>(this.baseApiUrl + '/api/Amenities');
  }

  addAmenities(addAmenitisRequest:Amenities):Observable<Amenities>{  
    // addcounrtyRequest.id =0;
    return this.http.post<Amenities>(this.baseApiUrl + '/api/Amenities',addAmenitisRequest);
  }

  getAmenitis(id :string):Observable<Amenities>{
     console.log("get country",id);
  return  this.http.get<Amenities>(this.baseApiUrl + '/api/Amenities/'+ id);
  }

  updateAmenitis(id: number, updateAmenitisRequest:Amenities):
  Observable<Amenities>{
  return this.http.put<Amenities>(this.baseApiUrl + '/api/Amenities/'+id, updateAmenitisRequest);
}

   deleteAmenitis(id:number): Observable<Amenities>{
   return  this.http.delete<Amenities>(this.baseApiUrl + '/api/Amenities/'+ id);
}
}

