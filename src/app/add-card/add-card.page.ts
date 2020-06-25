import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddManualCardPage } from '../add-manual-card/add-manual-card.page';


@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.page.html',
  styleUrls: ['./add-card.page.scss'],
})
export class AddCardPage implements OnInit {

  code : string;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      
      component: AddManualCardPage,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }


  barscan(){
    console.log("QR code scanning");
    
  }

  handleFirstNameValue(input){
    this.code = input;
    if(this.code.length == 4)
    {
      this.fetchData();
    }
  }

  fetchData(){
    console.log("fetching data");
  }

}
