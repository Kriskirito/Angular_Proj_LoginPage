import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  jsonApiUrl:any=" http://localhost:3000/Users"

  getAll(){
    return  this.http.get(this.jsonApiUrl);
  }
}
