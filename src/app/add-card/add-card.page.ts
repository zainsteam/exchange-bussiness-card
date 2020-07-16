import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddManualCardPage } from '../add-manual-card/add-manual-card.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ApiService } from '../service/api/api.service';


@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.page.html',
  styleUrls: ['./add-card.page.scss'],
})
export class AddCardPage implements OnInit {

  code: string;
  userId;

  constructor(public modalController: ModalController,
    private barcodeScanner: BarcodeScanner,
    public apiService: ApiService,
    ) {
      this.userId = JSON.parse(localStorage.getItem('userId'));
      console.log('userId', this.userId);
  
    }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({

      component: AddManualCardPage,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }


  QRscan() {
    console.log("QR code scanning");
    let id = this.userId;
    var flag = false;
    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
      this.api(this.code,id);
    
    }).catch(err => {
      console.log('Error', err);
    });
  }

  api(input, id){

    this.apiService.cardAddbyCode(input,id)
      .subscribe((data: any) => //Start Service
      {
        console.log('data',data);
        
      },
        err => {
          console.log('error 1',err);
          console.log('error 2',err.statusText);
        });

  }

  codefun(input) {
    this.code = input;
    let id = this.userId;
    if (this.code.length == 4) {
      this.api(input,id);
    }
  }

  fetchData() {
    console.log("fetching data");
  }

}
