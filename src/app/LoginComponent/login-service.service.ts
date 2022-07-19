import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../Models/AllModels.Models';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  baseUrl =' http://localhost:3000';

  constructor(private http:HttpClient) { }

  getEmployees(){
    return this.http.get<Employee[]>(this.baseUrl);
  }
  postEmployee(employee:Employee){
    return this.http.post<Employee>(this.baseUrl ,employee);
  }

  deleteEmployee(id:string){
    return this.http.delete(this.baseUrl + 'posts/' +id);
  }
}