import { Component ,OnInit, ViewChild} from '@angular/core';
import { Route, Router } from '@angular/router';
import { NgxSpinnerService, Spinner } from 'ngx-spinner';
import { Employee } from 'src/app/models/Employee';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { AuthService } from 'src/service/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeListService } from './employee-list.service';
import { MatDialog } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public columns:string[] =[];
  public userList :any;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private router :Router,private spinner : NgxSpinnerService,private service : AuthService,private employeeService: EmployeeListService,private diialog : MatDialog,private toast:NgToastService){
     this.columns=["id","name","phone","salary","role","action"]
}
public dataSource:any;
ngOnInit(): void {
  this.getEmployeeData();
}

getEmployeeData(){
  this.employeeService.getAllEmployee().subscribe( res =>{
    this.userList=res;
    this.dataSource=new MatTableDataSource(this.userList);
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  })
}

UpdateUser(id:number){
  this.router.navigateByUrl(`/employee/edit/${id}`)
}

deleteById(id:string){
  this.employeeService.DeleteEmployeeById(id).subscribe(res =>{
    if(res){
      this.toast.success({detail:"SUCCESS",summary:'Employee Details Was Deleted successFully',duration:5000, position:'topCenter'}) 
      this.getEmployeeData();
    }else{
      this.toast.error({detail:"ERROR",summary:'Please contact Admin<for Further Details',duration:5000, position:'topCenter'})
    }
  })
}

}
