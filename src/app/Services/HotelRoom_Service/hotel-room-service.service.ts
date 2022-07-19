import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HotelRoom } from 'src/app/Models/AllModels.Models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelRoomServiceService {

  baseApiUrl: string = environment.baseApiUrl;


  constructor(private http: HttpClient) { }


  getAllHotelRoom(): Observable<HotelRoom[]>{
    return this.http.get<HotelRoom[]>(this.baseApiUrl + '/api/HotelRooms');
  }

  addHotelRoom(addHotelRoomRequest:HotelRoom):Observable<HotelRoom>{  
    // addcounrtyRequest.id =0;
    return this.http.post<HotelRoom>(this.baseApiUrl + '/api/HotelRooms',addHotelRoomRequest);
  }

  getHotelRoom(id :string):Observable<HotelRoom>{
     console.log("get country",id);
  return  this.http.get<HotelRoom>(this.baseApiUrl + '/api/HotelRooms/'+ id);
  }

  updateHotelRoom(id: number, addHotelRoomRequest:HotelRoom):
  Observable<HotelRoom>{
  return this.http.put<HotelRoom>(this.baseApiUrl + '/api/HotelRooms/'+id, addHotelRoomRequest);
}

   deleteHotelRoom(id:number): Observable<HotelRoom>{
   return  this.http.delete<HotelRoom>(this.baseApiUrl + '/api/HotelRooms/'+ id);
}
}


