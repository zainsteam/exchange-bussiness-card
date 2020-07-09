import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ApiService } from '../service/api/api.service';

@Component({
  selector: 'app-add-manual-card',
  templateUrl: './add-manual-card.page.html',
  styleUrls: ['./add-manual-card.page.scss'],
})
export class AddManualCardPage implements OnInit {

  user;
  userId;

  public cardAddForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  loading;

  constructor( public modalCtrl: ModalController,
    public apiService: ApiService,
    public formBuilder: FormBuilder) 
  {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log('user', this.user);

    this.userId = JSON.parse(localStorage.getItem('userId'));
    console.log('userId', this.userId);

    this.cardAddForm = formBuilder.group({
      name: [this.user.fName, Validators.compose([ Validators.required ])],
      surname: [this.user.lName, Validators.compose([ Validators.required ])],
      workplace: ['', Validators.compose([ Validators.required ])],
      email: [this.user.email, Validators.compose([Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')])],
      cellNo: [this.user.cellNo]
    });
  }

  ngOnInit() {
  }

  cerrar() {

    this.modalCtrl.dismiss();
  }

  cardAdd()
  {
    console.log("cardAdd Method");

    const data = {
      name: this.cardAddForm.value.name,
      surname: this.cardAddForm.value.surname,
      workplace: this.cardAddForm.value.workplace,
      userId: "5ef23c968a422100176f99a1",
      email: this.cardAddForm.value.email,
      cellNo: this.cardAddForm.value.cellNo,
      cardType: "type3",
    }
    console.log(data);

    this.apiService.cardAdd(data)
    .subscribe((data:any) => //Start Service
    {
      console.log(data);
    },
    err => {
      console.log(err);
      console.log(err.statusText);
    });
  }

}
