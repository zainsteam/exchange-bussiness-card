import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api/api.service';
import { Router } from '@angular/router';
// import { Contacts} from '@ionic-native/contacts';
import { Contacts, Contact, ContactField, ContactName, ContactAddress } from '@ionic-native/contacts/ngx';
import { Toast } from '@ionic-native/toast/ngx';

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
  card;

  constructor(public modalCtrl: ModalController,
    public apiService: ApiService,
    public formBuilder: FormBuilder,
    private route: Router,
    private toast: Toast,
    private contacts: Contacts,
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log('user', this.user);

    this.userId = JSON.parse(localStorage.getItem('userId'));
    console.log('userId', this.userId);

    this.cardAddForm = formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      surname: ['', Validators.compose([Validators.required])],
      workplace: ['', Validators.compose([])],
      email: ['', Validators.compose([Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')])],
      cellNo: [''],
      cellNoSharing:[true]
    });
  }

 

  saveContact(card) {
    // let contact: Contact = this.contacts.create();

    // contact.name = new ContactName(null, 'Smith', 'John');
    // contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
    // contact.save().then(
    //   async() => await console.log('Contact saved!', contact));
    console.log('save card',card);
    

      let contact: Contact = this.contacts.create();

      contact.name = new ContactName(null, card['card'].name, card['card'].surname);
      contact.phoneNumbers = [new ContactField('mobile', card['card'].cellNo)];
      contact.emails = [new ContactField('emails', card['card'].email)];
      contact.addresses = [new ContactAddress(true,'work',card['card'].Workplace)];

      contact.save().then(
        () => console.log('Contact saved!', contact),
        (error: any) => console.error('Error saving contact.', error)
      );
  }

  ngOnInit() {
  }

  cerrar() {

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
      cellNoSharing:this.cardAddForm.value.cellNoSharing,
    }
    console.log(data);

    this.apiService.cardAdd(data)
      .subscribe((data: any) => //Start Service
      {
        console.log(data);
        this.toast.show(`Card Successfully Added `, '5000', 'bottom').subscribe(
          toast => {
            console.log(toast);
          }
        );
        this.saveContact(data);
        this.cerrar();

      },
        err => {
          console.log(err);
          console.log(err.statusText);
        });

    await this.route.navigateByUrl('/card-list');

  }

}
