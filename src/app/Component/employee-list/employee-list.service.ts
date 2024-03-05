import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/Employee';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {

  public basicUrl:string =environment.baseUrl;
  constructor(private http :HttpClient) { }

  getAllEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.basicUrl +'/api/employees');
  }

  AddEmployee(employee :Employee):Observable<Employee>{
    return this.http.post<Employee>(this.basicUrl +'/api/employees',employee);
  }
  EditEmployee(id:string):Observable<Employee>{
    return this.http.get<Employee>(this.basicUrl +'/api/employees/'+id);
  }

  updateEmployeeById(id:string,employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.basicUrl +'/api/employees/'+id,employee);
  }
  
  DeleteEmployeeById(id:string):Observable<Employee>{
    return this.http.delete<Employee>(this.basicUrl +'/api/employees/'+id);
  }
 

}
