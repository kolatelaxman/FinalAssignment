import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightCustomer } from 'src/app/Models/AllModels.Models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllFlightCustomer() : Observable<FlightCustomer[]>{
    return this.http.get<FlightCustomer[]>(this.baseApiUrl + '/api/FlightCustomerDetails');
   }

   addFlightCustomer(addFlightCustomerRequest:FlightCustomer):Observable<FlightCustomer>{  
    // addcounrtyRequest.id =0;
    console.log("come in service");
   return this.http.post<FlightCustomer>(this.baseApiUrl + '/api/FlightCustomerDetails',addFlightCustomerRequest);
  }

  getFlightCustomer(id :string):Observable<FlightCustomer>{
     console.log("get country",id);
  return  this.http.get<FlightCustomer>(this.baseApiUrl + '/api/FlightCustomerDetails/'+ id);
  }

updateFlightCustomer(id: number, updateCustomerRequest:FlightCustomer):
 Observable<FlightCustomer>{
  return this.http.put<FlightCustomer>(this.baseApiUrl + '/api/FlightCustomerDetails/'+id, updateCustomerRequest);
}

deleteFlightCustomer(id:number): Observable<FlightCustomer>{
  return  this.http.delete<FlightCustomer>(this.baseApiUrl + '/api/FlightCustomerDetails/'+ id);
}
}

 

