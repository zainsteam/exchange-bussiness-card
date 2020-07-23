import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController,Platform  } from '@ionic/angular';
import { ApiService } from '../service/api/api.service';
import { Router } from '@angular/router';
import { Toast } from '@ionic-native/toast/ngx';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic';

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
  userId;

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
    private route: Router,
    private toast: Toast,
    private platform: Platform,
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
        localStorage.setItem('user', JSON.stringify(data.user.user));
        localStorage.setItem('userId', JSON.stringify(data.user._id));
        this.userId = data.user._id;
        this.getMobileToken();
        this.toast.show(`Login Successfully`, '5000', 'bottom').subscribe(
          toast => {
            console.log(toast);
          }
        );
        // this.navCtrl.navigateForward(['/card-list']);
        this.navCtrl.navigateRoot('/card-list');
      }
      else {
        console.log('Error  ',data.message);
        this.toast.show(data.message, '5000', 'bottom').subscribe(
          toast => {
            console.log(toast);
          }
        );
      }
    },
    err => {
      console.log(err);
      console.log(err.statusText);
    });
  }

  getMobileToken() {
    if ( (this.platform.is('ios') || this.platform.is('android')) && this.platform.is('cordova')) 
    {
      // this.fcm.subscribeToTopic('people');
      FCM.getToken().then(token => {
        console.log(token);
        this.addMobileToken(token);
      });

      FCM.onNotification().subscribe(data => {
        console.log(data);
        if (data.wasTapped) {
          console.log('Received in background');
        } else {
          console.log('Received in foreground');
        }
      });

      FCM.onTokenRefresh().subscribe(token => {
        console.log(token);
        this.addMobileToken(token);
      });

      // this.fcm.unsubscribeFromTopic('marketing');
    }
  }

  addMobileToken(token)
  {
    let data = {
      userId: this.userId,
      udid: token
    }
    console.log(data);

    this.apiService.addMobileToken(data)
    .subscribe((data:any) => //Start Service
    {
    	console.log("response data ",data);
    	// if(data.status == 1)
    	// {
      //   console.log("sucessfully insert token");
    	// }
    	// else
    	// {
      //   console.log("error in insert token");
    	// } 
    },
    err => {
      console.log(err);
    });
  }

}