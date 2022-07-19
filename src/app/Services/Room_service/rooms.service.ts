import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/app/Models/AllModels.Models';
import { environment } from 'src/environments/environment';

 
@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  baseApiUrl: string = environment.baseApiUrl;


  constructor(private http: HttpClient) { }
  
  getAllRoom(): Observable<Room[]>{
    return this.http.get<Room[]>(this.baseApiUrl + '/api/Rooms');
  }

  addRoom(addHotelRequest:Room):Observable<Room>{  
    // addcounrtyRequest.id =0;
    return this.http.post<Room>(this.baseApiUrl + '/api/Rooms',addHotelRequest);
  }

  getRoom(id :string):Observable<Room>{
     console.log("get country",id);
  return  this.http.get<Room>(this.baseApiUrl + '/api/Rooms/'+ id);
  }

  updateRoom(id: number, updateHotelRequest:Room):
  Observable<Room>{
  return this.http.put<Room>(this.baseApiUrl + '/api/Rooms/'+id, updateHotelRequest);
}

   deleteRoom(id:number): Observable<Room>{
   return  this.http.delete<Room>(this.baseApiUrl + '/api/Rooms/'+ id);
}
}




