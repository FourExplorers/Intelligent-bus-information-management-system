import { Component, OnInit,  Inject } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router' 
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../domain/user';
import { Auth } from '../domain/auth';
import { PopupService} from'../service/popup.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  authType: String = '';
  title: String = '';
  isSubmitting = false;
  authForm: FormGroup;
  username= "";
  password= "";
  us=new User();
  auth:Auth;
  private popupSVC:PopupService;
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    @Inject('auth')private service,
    @Inject('user')private userservice
    ) {
      this.authForm = this.fb.group({
        'username': ['', Validators.required],
        'password': ['', Validators.required]
      });
   }

  ngOnInit() {
    this.route.url.subscribe(data=>{
      this.authType=data[data.length-1].path;
      this.title=(this.authType==="login")?'Sign in':'Sign up';
      if(this.authType==='register'){
        this.authForm.addControl('name',new FormControl());
      }
    })
  }
  /*test(){   
    this.popupSVC.toast({
        img: '弹出图片地址！',
        title: '弹出消息内容！',
        duration: 2000,  //toast多久后消失，默认为500ms
    });
}*/
  submitForm(){
    const credentials = this.authForm.value;
    if(this.authType==='login')
    {
      
      this.service.loginWithCredentials(credentials)
      .then(auth => {
        let redirectUrl = (auth.redirectUrl === null)? '': auth.redirectUrl;
        if(!auth.hasError){
          this.us = auth.user;
            console.log("cavadv");
            if(this.us.belongclass==="driver")
            {
              this.router.navigate(["/driver"]);
            }
            else if(this.us.belongclass==="ceo")
            {
              this.router.navigate(["/boss"]);
            }
            else if(this.us.belongclass==="manager")
            {
              console.log('can to here')
              this.router.navigate(["/manager"]);
            }
            else 
            {
              this.router.navigate([redirectUrl]);
            }
          
             //this.router.navigate(["error"]);
          
          //this.router.navigate([redirectUrl]);
          console.log(this.us.belongclass);
          console.log(auth.redirectUrl);
          localStorage.removeItem('redirectUrl');
          //location.reload();
        } else {
          this.auth = Object.assign({}, auth);
        }
      });
    }
    else if(this.authType==='register')
    {
      
      this.userservice.createUser(credentials).then(
        us=>{
          if(us){
            this.router.navigateByUrl('login');
          }
        }
      )
    }
     this.isSubmitting = true;
     console.log(this.authForm.value);
  }
}
