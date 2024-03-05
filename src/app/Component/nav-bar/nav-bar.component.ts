import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  public nav:any[]=['Home','Employee','Add Employee']
  public navLink:any[]=['','employee','employee/add'] 
  constructor (private spinner :NgxSpinnerService,private router :Router){
  
  }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    return new Promise <void>((resolve,reject)=>{
      this.spinner.show();
      setTimeout(()=>{
        this.spinner.hide();
        resolve();
      },2000);
    })
  }
 async getNavData(index:number){
  await this.loadData();
   let link = this.navLink[index];
   this.router.navigate([link]);
  }
}
