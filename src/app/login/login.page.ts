import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private loginData : FormGroup;

  constructor(public formBuilder: FormBuilder,
    private navCtrl: NavController) {
    this.loginData = this.formBuilder.group({
      email: ['', Validators.compose([Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
      password: ['', Validators.compose([Validators.maxLength(20), Validators.minLength(6), Validators.required])],
    });

   }
  ngOnInit() {
  }
  gotoregister(){
    this.navCtrl.navigateForward(['/register']);      
  }

  login(){
    if (this.loginData.valid) 
      {
        console.log(this.loginData.value);
      }
    
  }

}
