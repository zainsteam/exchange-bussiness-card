import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api/api.service';
import { Router } from '@angular/router';
// import { Contacts} from '@ionic-native/contacts';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';
import { async } from '@angular/core/testing';

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

  constructor(public modalCtrl: ModalController,
    public apiService: ApiService,
    public formBuilder: FormBuilder,
    private route: Router,
    private contacts: Contacts
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log('user', this.user);

    this.userId = JSON.parse(localStorage.getItem('userId'));
    console.log('userId', this.userId);

    this.cardAddForm = formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      surname: ['', Validators.compose([Validators.required])],
      workplace: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')])],
      cellNo: ['']
    });
  }

  saveContact() {
    // let contact: Contact = this.contacts.create();

    // contact.name = new ContactName(null, 'Smith', 'John');
    // contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
    // contact.save().then(
    //   async() => await console.log('Contact saved!', contact));
    

      let contact: Contact = this.contacts.create();

      contact.name = new ContactName(null, 'Smith', 'John');
      contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
      contact.save().then(
        () => console.log('Contact saved!', contact),
        (error: any) => console.error('Error saving contact.', error)
      );
  }

  ngOnInit() {
  }

  cerrar() {
    this.saveContact();

    this.modalCtrl.dismiss();
  }

  async cardAdd() {
    console.log("cardAdd Method");

    const data = {
      name: this.cardAddForm.value.name,
      surname: this.cardAddForm.value.surname,
      workplace: this.cardAddForm.value.workplace,
      userId: this.userId,
      email: this.cardAddForm.value.email,
      cellNo: this.cardAddForm.value.cellNo,
      cardType: "type3",
    }
    console.log(data);

    this.apiService.cardAdd(data)
      .subscribe((data: any) => //Start Service
      {
        console.log(data);
        
        this.cerrar();

      },
        err => {
          console.log(err);
          console.log(err.statusText);
        });

    await this.route.navigateByUrl('/card-list');

  }

}
