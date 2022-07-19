import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HolidayPackagr } from 'src/app/Models/AllModels.Models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HolidaypackageServiceService {
  baseApiUrl: string = environment.baseApiUrl;


  constructor(private http: HttpClient) { }

   
  
  getAllHolidayp() : Observable<HolidayPackagr[]>{
    return this.http.get<HolidayPackagr[]>(this.baseApiUrl + '/api/HolidayPackages');
   }
 
   addHoliday(addFlightRequest:HolidayPackagr):Observable<HolidayPackagr>{  
     // addcounrtyRequest.id =0;
     console.log("come in service");
    return this.http.post<HolidayPackagr>(this.baseApiUrl + '/api/HolidayPackages',addFlightRequest);
   }
 
   getHoliday(id :string):Observable<HolidayPackagr>{
      console.log("get country",id);
   return  this.http.get<HolidayPackagr>(this.baseApiUrl + '/api/HolidayPackages/'+ id);
   }
 
  
 
 updateHoliday(id: number, updatecountryRequest:HolidayPackagr):
  Observable<HolidayPackagr>{
   return this.http.put<HolidayPackagr>(this.baseApiUrl + '/api/HolidayPackages/'+id, updatecountryRequest);
 
 }
 
 deleteDelete(id:number): Observable<HolidayPackagr>{
   return  this.http.delete<HolidayPackagr>(this.baseApiUrl + '/api/HolidayPackages/'+ id);
 }
 }
 