import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

public loginForm: FormGroup = new FormGroup({
  email: new FormControl(),
  password: new FormControl()
});

constructor(private loginService:LoginService, private router:Router){ }

loginauthentication(){
  this.loginService.loginauthentication(this.loginForm.value).subscribe(
    (data:any)=>{
      alert("Login successfull");
      this.router.navigateByUrl("/dashboard");
      localStorage.setItem('token',data.token);
    },
    (err:any)=>{
      alert("Login failed")
    }
  )
}


}
