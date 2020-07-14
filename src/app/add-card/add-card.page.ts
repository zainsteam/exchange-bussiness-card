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

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
    }).catch(err => {
      console.log('Error', err);
    });

  }

  handleFirstNameValue(input) {
    this.code = input;
    let id = this.userId;
    if (this.code.length == 4) {
      this.apiService.cardAddbyCode(input,id)
      .subscribe((data: any) => //Start Service
      {
        console.log(data);
        
      },
        err => {
          console.log(err);
          console.log(err.statusText);
        });
    }
  }

  fetchData() {
    console.log("fetching data");
  }

}
