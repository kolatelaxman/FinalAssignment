import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Hotel } from 'src/app/Models/AllModels.Models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelsServiceService {
  baseApiUrl: string = environment.baseApiUrl;


  constructor(private http: HttpClient) { }

  getAllHotel(): Observable<Hotel[]>{
    return this.http.get<Hotel[]>(this.baseApiUrl + '/api/Hotels');
  }

  addHotel(addHotelRequest:Hotel):Observable<Hotel>{  
    // addcounrtyRequest.id =0;
    return this.http.post<Hotel>(this.baseApiUrl + '/api/Hotels',addHotelRequest);
  }

  getHotel(id :string):Observable<Hotel>{
     console.log("get country",id);
  return  this.http.get<Hotel>(this.baseApiUrl + '/api/Hotels/'+ id);
  }

  updateHotel(id: number, updateHotelRequest:Hotel):
  Observable<Hotel>{
  return this.http.put<Hotel>(this.baseApiUrl + '/api/Hotels/'+id, updateHotelRequest);
}

   deleteHotel(id:number): Observable<Hotel>{
   return  this.http.delete<Hotel>(this.baseApiUrl + '/api/Hotels/'+ id);
}
}



