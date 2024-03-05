import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeListService } from '../employee-list/employee-list.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit{

  
  constructor(private router :ActivatedRoute,private service :EmployeeListService,private builder : FormBuilder,private route :Router,private toast : NgToastService){
    
  }


  ngOnInit(): void {
    this.router.paramMap.subscribe( {
      next:(params)=>{
        const EmpID =params.get('id');

        if(EmpID){
          this.service.EditEmployee(EmpID).subscribe( x=>{
            if(x != null || x !=''){
              this.EmployeeForm.setValue({id:x.id,
                name:x.name,phone:x.phone,salary:x.salary,role:x.role})

            }else{
              this.toast.warning({detail:"Warning",summary:'Something Gone Wrong',duration:5000, position:'topCenter'})
            }
          })
        }
      }
    })
  }

  EmployeeForm:FormGroup=this.builder.group({
    id:this.builder.control(''),
    name:this.builder.control('',Validators.required),
    phone:this.builder.control('',Validators.required),
    role:this.builder.control('',Validators.required),
    salary:this.builder.control('',Validators.compose([Validators.max(100000),Validators.required]))
  })

  proceedToUpdate(){
    if(this.EmployeeForm.valid){
      this.service.updateEmployeeById(this.EmployeeForm.value.id,this.EmployeeForm.value).
      subscribe(res =>{
        if(res){
          this.toast.success({detail:"SUCCESS",summary:'Employee Updated SuccessFully',duration:5000, position:'topCenter'})
          this.route.navigate(['employee']);
        }else{
          this.toast.error({detail:"ERROR",summary:'Please contact Admin,for Further Details',duration:5000, position:'topCenter'})
        }
      })
    }else{
      this.toast.error({detail:"ERROR",summary:'Please Enter Valid Details',duration:5000, position:'topCenter'})
    }
  }
}
