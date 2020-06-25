import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private loginData : FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.loginData = this.formBuilder.group({
      email: ['', Validators.compose([Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
      password: ['', Validators.compose([Validators.maxLength(20), Validators.minLength(6), Validators.required])],
    });

   }
  ngOnInit() {
  }

  login(){
    if (this.loginData.valid) 
      {
        console.log(this.loginData.value);
      }
    
  }

}
