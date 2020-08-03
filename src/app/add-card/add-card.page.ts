import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AddManualCardPage } from '../add-manual-card/add-manual-card.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ApiService } from '../service/api/api.service';
import { Toast } from '@ionic-native/toast/ngx';


@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.page.html',
  styleUrls: ['./add-card.page.scss'],
})
export class AddCardPage implements OnInit {

  code: string;
  userId;
  Multiple:boolean=true;

  constructor(public modalController: ModalController,
    private barcodeScanner: BarcodeScanner,
    public apiService: ApiService,
    private toast: Toast,
    private navCtrl: NavController
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
        this.toast.show(`Card Successfully Added `, '5000', 'bottom').subscribe(
          toast => {
            console.log(toast);
          }
        );
        this.navCtrl.navigateRoot('/card-list');
        
      },
        err => {
          console.log('error 1',err);
          this.toast.show(err.statusText, '5000', 'bottom').subscribe(
            toast => {
              console.log(toast);
            }
          );
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
