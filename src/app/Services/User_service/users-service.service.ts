import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Users } from 'src/app/Models/AllModels.Models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  baseApiUrl: string = environment.baseApiUrl;


  constructor(private http: HttpClient) { }
  
  getAllUser(): Observable<Users[]>{
    return this.http.get<Users[]>(this.baseApiUrl + '/api/Users');
  }

  addUser(addUserRequest:Users):Observable<Users>{  
    // addcounrtyRequest.id =0;
    return this.http.post<Users>(this.baseApiUrl + '/api/Users',addUserRequest);
  }

  getUser(id :string):Observable<Users>{
     console.log("get country",id);
  return  this.http.get<Users>(this.baseApiUrl + '/api/Users/'+ id);
  }

  updateUser(id: number, updateUserRequest:Users):
  Observable<Users>{
  return this.http.put<Users>(this.baseApiUrl + '/api/Users/'+id, updateUserRequest);
}

   deleteUser(id:number): Observable<Users>{
   return  this.http.delete<Users>(this.baseApiUrl + '/api/Users/'+ id);
}
}
