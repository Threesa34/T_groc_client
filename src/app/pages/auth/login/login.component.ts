import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from '../../../services/authentication.service';

export interface authData {
  mobile?: String,
  password?: String
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authDetails:authData = {};
  _formGroup = {
    mobile: this.authDetails.mobile,
    password:this.authDetails.password
  }
  loginDetails:any;
  constructor(private _router : Router, private cookieService: CookieService, private fb: FormBuilder, private _AuthenticationService: AuthenticationService) { 
    this.loginDetails = this.fb.group(this._formGroup); 
  }

  signinRes:any;
  ngOnInit(): void {
  }


  AuthenticateUser() {
    
    this._AuthenticationService.authenticateEmployee(this.authDetails).subscribe((res: any) => {
      if(res)
        {

          this.signinRes = res;
          if(res.success == true)
          {
            this.cookieService.set('token', res.token );
            this.cookieService.set('role', res.rolename );
            this.cookieService.set('_id', res._id );
            if(res.firstlogin == 0)
            {
                this._router.navigate(['/authentication/set_password']);
            }
            else{
                this._router.navigate(['/'+res.rolename.toLowerCase()]);
            }
          }
        }
    }); 
    
  }

}
