import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddManualCardPage } from '../add-manual-card/add-manual-card.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.page.html',
  styleUrls: ['./add-card.page.scss'],
})
export class AddCardPage implements OnInit {

  code : string;

  constructor(public modalController: ModalController,
    private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      
      component: AddManualCardPage,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }


  QRscan(){
    console.log("QR code scanning");
    
this.barcodeScanner.scan().then(barcodeData => {
  console.log('Barcode data', barcodeData);
 }).catch(err => {
     console.log('Error', err);
 });
   
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
