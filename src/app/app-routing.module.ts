import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { EmployeeListComponent } from './Component/employee-list/employee-list.component';
import { GuardserviceGuard } from 'src/authguard/guardservice.guard';
import { AddEmployeeComponent } from './Component/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Component/edit-employee/edit-employee.component';

const routes: Routes = [
  {path:'',component:HomeComponent,canActivate:[GuardserviceGuard]},
  {path:'employee',component:EmployeeListComponent},
  {path:'employee/add',component:AddEmployeeComponent},
  {path:'employee/edit/:id',component:EditEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
