import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private registerData : FormGroup;

  constructor(public formBuilder: FormBuilder,
    private navCtrl: NavController) {
    this.registerData = this.formBuilder.group({
      email: ['', Validators.compose([Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
      password: ['', Validators.compose([Validators.maxLength(20), Validators.minLength(6), Validators.required])],
      c_password: ['', Validators.compose([Validators.maxLength(20), Validators.minLength(6), Validators.required])],
    });

   }

  ngOnInit() {
  }

  gotologin(){
    this.navCtrl.navigateForward(['/login']);      
  }

  register(){
    if (this.registerData.valid) 
      {
        console.log(this.registerData.value);
      }
  }

}
