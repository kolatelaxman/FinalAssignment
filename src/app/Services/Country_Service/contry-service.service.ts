import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { City, Country } from '../../Models/AllModels.Models';

@Injectable({
  providedIn: 'root'
})
export class ContryServiceService {


  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllCounrty() : Observable<Country[]>{
   return this.http.get<Country[]>(this.baseApiUrl + '/api/Countries');
  }

  addCounrty(addcounrtyRequest:Country):Observable<Country>{  
    // addcounrtyRequest.id =0;
    console.log("come in service");
   return this.http.post<Country>(this.baseApiUrl + '/api/Countries',addcounrtyRequest);
  }

  getCounrty(id :string):Observable<Country>{
     console.log("get country",id);
  return  this.http.get<Country>(this.baseApiUrl + '/api/Countries/'+ id);
  }


updateCountry(id: number, updatecountryRequest:Country):
 Observable<Country>{
  return this.http.put<Country>(this.baseApiUrl + '/api/Countries/'+id, updatecountryRequest);

}

deleteCountry(id:number): Observable<Country>{
  return  this.http.delete<Country>(this.baseApiUrl + '/api/Countries/'+ id);
}
}

 
 