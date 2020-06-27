import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ApiService } from '../service/api/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  loading;

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  constructor(public formBuilder: FormBuilder,
    private navCtrl: NavController,
    public apiService: ApiService) {
      this.registerForm = formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: ['', Validators.compose([Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'), Validators.required])],
        password: ['', Validators.compose([ Validators.minLength(5), Validators.required])]
      });

   }

  ngOnInit() {
  }

  gotologin(){
    this.navCtrl.navigateForward(['/login']);      
  }

  registerUser(){
    console.log("registerUser Method");
    const user = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      fName: this.registerForm.value.firstName,
      lName: this.registerForm.value.lastName,
      role: "user"
    }

    console.log("user ", user);

    this.apiService.registerUser(user)
    .subscribe((data:any) => //Start Service
    {
      console.log(data);
      if (data.success) {
        console.log(data.user);
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
