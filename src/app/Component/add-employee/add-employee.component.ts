import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeListService } from '../employee-list/employee-list.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
constructor(private router : Router,private builder : FormBuilder,private employeeService:EmployeeListService,private toast :NgToastService){}

ngOnInit(): void {
  
}

EmployeeForm:FormGroup=this.builder.group({
  name:this.builder.control('',Validators.required),
  phone:this.builder.control('',Validators.required),
  role:this.builder.control('',Validators.required),
  salary:this.builder.control('',Validators.compose([Validators.max(100000),Validators.required]))
})
backTolist(){
  this.router.navigate(['employee']);
}
proceedToLogin(){
  if(this.EmployeeForm.valid){
    this.employeeService.AddEmployee(this.EmployeeForm.value).subscribe( x =>{
      if(x){
        this.toast.success({detail:"SUCCESS",summary:'Employee Adding was successfull',duration:5000, position:'topCenter'})
         this.router.navigate(['employee']);
      }else{
        this.toast.error({detail:"ERROR",summary:'Please contact Admin',duration:5000, position:'topCenter'})
      }
    })
  }else{
    this.toast.error({detail:"ERROR",summary:'Please Enter form',duration:5000, position:'topCenter'})
  }
}
}
