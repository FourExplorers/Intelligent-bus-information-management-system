import { Injectable,Inject } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,@Inject('user')private userservice) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    console.log(url);
    return this.checkLogin(url);
  }
  checkLogin(url: string): boolean {
    //已登录
    if (localStorage.getItem('userId') !== null) {
        if(url=='/homepage')
        {
          return true;
        }
      //返回true，放行
      /*
        var bl = this.userservice.getUserById(localStorage.getItem('userId')).then(
        user=>{
           console.log('/'+user.belongclass)
           if(('/'+user.belongclass)==url)
           {
            return true;
           }
           else{
            this.router.navigate(['/'+user.belongclass]);
            return false;
           } 
        }
      );
      return bl*/
      if('/'+localStorage.getItem("belongclass")==url)
           {
            return true;
           }
      else if(localStorage.getItem("belongclass")=='manager'&&url=='/driver'){
             return true;
      }
      else {
        this.router.navigate(['/'+localStorage.getItem("belongclass")]);
      }
        return false;

    }
    //未登录
    else {
      console.log("ppp");
      //首先将要访问的URL暂存
      localStorage.setItem('redirectUrl', url);
      //然后导航到登录页面
      this.router.navigate(['/login']);
      //返回false，取消本次导航
      return false;
    }
  }
}
