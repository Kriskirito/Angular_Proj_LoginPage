import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardserviceGuard {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Your guard logic here
    const isLoggedIn = this.checkIfLoggedIn(); // Replace this with your authentication logic
    if (isLoggedIn) {
      return true; // Allow access to the route
    } else {
      return this.router.createUrlTree(['/employee'], { queryParams: { returnUrl: state.url }});
    }
  }

  private checkIfLoggedIn(): boolean {
    return sessionStorage.getItem('name')?true:false;
    
  }
}

