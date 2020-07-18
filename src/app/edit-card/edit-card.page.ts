import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api/api.service';
import { Router ,ActivatedRoute} from '@angular/router';
// import { Contacts} from '@ionic-native/contacts';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';
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
  foo;
  bar;
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

    this.cardEditForm = formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      surname: ['', Validators.compose([Validators.required])],
      workplace: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')])],
      cellNo: ['']
    });
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
  cardAdd(){

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

}
