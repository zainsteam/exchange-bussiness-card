import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ApiService } from '../service/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  loading;

  validation_messages = {
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ]
  };

  constructor(public formBuilder: FormBuilder,
    private navCtrl: NavController,
    public apiService: ApiService) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(5), Validators.required])]
    });

  }
  ngOnInit() {
  }
  gotoregister() {
    this.navCtrl.navigateForward(['/register']);
  }

  loginUser() {
    console.log("loginUser Method");

    const user = {
      password: this.loginForm.value.password,
      email: this.loginForm.value.email,
    }
    console.log(user);

    this.apiService.loginUser(user)
    .subscribe((data:any) => //Start Service
    {
      console.log(data);
      if (data.login) {
        console.log(data.user.user);
        this.navCtrl.navigateForward(['/card-list']);
      }
      else {
        console.log('Error  ',data.message);
      }
    },
    err => {
      console.log(err);
      console.log(err.statusText);
    });
  }

}
