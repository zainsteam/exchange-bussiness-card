import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api/api.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { EditCardPage } from '../edit-card/edit-card.page'
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.page.html',
  styleUrls: ['./card-list.page.scss'],
})
export class CardListPage implements OnInit {

  userId;
  public cards : any[] ;

  constructor(public apiService: ApiService,
    private route: Router,
    public modalCtrl: ModalController,
    public navCtrl: NavController    ) { 
  //   this.cardname = [{
  //     name : "zain",
  //    number : "03122880329",
  //    email : "zain@gmail.com",
  //    place : "malir"
  //  },{
  //     name : "basit",
  //    number : "03122880329",
  //    email : "basit@gmail.com",
  //    place : "malir"
  //  },{
  //     name : "arij",
  //    number : "03122880329",
  //    email : "arij@gmail.com",
  //    place : "nazimabad"
  //  },{
  //     name : "kamran",
  //    number : "03122880329",
  //    email : "kamran@gmail.com",
  //    place : "safora"
  //  }] 

    this.userId = JSON.parse(localStorage.getItem('userId'));
    console.log('userId', this.userId);
  }

  ngOnInit() {
    this.getCards();

  }

  viewCard(id){
    console.log(id);
    this.navCtrl.navigateForward(['card-view/']+id);
    // this.route.navigate(['view-card',{id:id}])
    // this.navCtrl.back();


  }

  getCards() {

    this.apiService.getCards(this.userId)
    .subscribe((data:any) => //Start Service
    {
      console.log(data);
      this.cards = data;
    },
    err => {
      console.log(err);
      console.log(err.statusText);
    });
  }

  // editCard(cardId) {
  //   console.log("editCard run");
  //   console.log("cardId ", cardId);
  //   this.navCtrl.navigateForward(['edit-card/']+cardId);
  // }

  async presentModal(id) {
    const modal = await this.modalCtrl.create({

      component: EditCardPage,
      cssClass: 'my-custom-class',
      componentProps: { 
        id: id
      }

    });
    modal.onDidDismiss()
      .then( (data) => {
        this.ngOnInit();
        console.log("hello again")
    });
    return await modal.present();
  }

}
