import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
//| Observable<boolean | UrlTree>
//| Promise<boolean | UrlTree>
   boolean => {
//| UrlTree 

  if (localStorage.getItem('res') != null) {
    return true;} else return false;
}

{
  
};
