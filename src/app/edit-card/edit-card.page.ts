import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api/api.service';
import { Router ,ActivatedRoute} from '@angular/router';
// import { Contacts} from '@ionic-native/contacts';
import { Contacts, Contact, ContactField, ContactName, ContactAddress } from '@ionic-native/contacts/ngx';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.page.html',
  styleUrls: ['./edit-card.page.scss'],
})
export class EditCardPage implements OnInit {
  user;
  userId;

  public cardEditForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  loading;
  public sub;
  id: any;
  cardid : any;
  public card : any[] ;

  constructor(public apiService: ApiService,
    public formBuilder: FormBuilder,
    private route: Router,
    private router: ActivatedRoute,
    public modalCtrl: ModalController,
    private contacts: Contacts,
    public navParams: NavParams) { 
     
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log('user', this.user);

    this.userId = JSON.parse(localStorage.getItem('userId'));
    console.log('userId', this.userId);

  }

  ngOnInit() {
    // this.sub = this.router.params.subscribe(params => {
    //   this.id = params['id'];
    // });
    console.log(this.id);
    const id: string = this.navParams.get('id');
    console.log(id);
    this.viewCard(id);
  }
  

  viewCard(ids) {
    console.log(ids);
    
    this.apiService.getCard(ids)
    .subscribe((data:any) => //Start Service
    {
      this.cardid = data[0]['_id'];
      this.card = data[0]['card'];
      console.log(this.card);
    },
    err => {
      console.log(err);
      console.log(err.statusText);
    });
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

  async saveContact(cards) {
    // let contact: Contact = this.contacts.create();

    // contact.name = new ContactName(null, 'Smith', 'John');
    // contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
    // contact.save().then(
    //   async() => await console.log('Contact saved!', contact));
    console.log('save card',cards);
    

      let contact: Contact = this.contacts.create();

      contact.name = new ContactName(null, cards.name, cards.surname);
      contact.phoneNumbers = [new ContactField('mobile', cards.cellNo)];
      contact.emails = [new ContactField('emails', cards.email)];
      contact.addresses = [new ContactAddress(true,'work',cards.Workplace)];

     await contact.save().then(
        () => console.log('Contact saved!', contact),
        (error: any) => console.error('Error saving contact.', error)
      );
  }

  update(){
    // console.log(this.card['name']);
    if(this.card['name'] == "" || this.card['surname'] == "" || this.card['Workplace'] == "" || this.card['name'] == undefined || this.card['surname'] == undefined || this.card['Workplace'] == undefined ){
      console.log("something is missing");
    }
    else {
      let data = {
        cardId: this.cardid,
          name: this.card['name'],
          surname: this.card['surname'],
          email: this.card['email'],
          cellNo: this.card['cellNo'],
          Workplace: this.card['Workplace']
      }
      this.apiService.cardupdate(data)
      .subscribe((data: any) => //Start Service
      {
        console.log(data);
        this.saveContact(data);
        this.cerrar();

      },
        err => {
          console.log(err);
          console.log(err.statusText);
        });

    //  this.route.navigateByUrl('/card-list');

    }
  }

}
