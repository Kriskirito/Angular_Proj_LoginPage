import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from 'src/mattable.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './Component/employee-list/employee-list.component';
import { HomeComponent } from './Component/home/home.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './Component/add-employee/add-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './Component/edit-employee/edit-employee.component';
import { NgToastModule } from 'ng-angular-popup';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HomeComponent,
    NavBarComponent,
    AddEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot({type:'square-jelly-box'}),
    HttpClientModule,
    ReactiveFormsModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  { }
