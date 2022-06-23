import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  apiUrl = 'http://localhost:3000/employee';

  getAllEmployee(){
   return this.http.get(this.apiUrl)
  }
}
