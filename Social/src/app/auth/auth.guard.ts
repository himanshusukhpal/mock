import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../services/app.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad {
  constructor(private appService: AppService, private router: Router){}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.appService.networking.authenticated){
        this.router.navigateByUrl('/auth');
      }
    return this.appService.networking.authenticated;
  }
}
