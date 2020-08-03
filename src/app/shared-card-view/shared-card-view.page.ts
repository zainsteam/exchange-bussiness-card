import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api/api.service';
import { BarcodeScanner,BarcodeScannerOptions, } from '@ionic-native/barcode-scanner/ngx';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-shared-card-view',
  templateUrl: './shared-card-view.page.html',
  styleUrls: ['./shared-card-view.page.scss'],
})
export class SharedCardViewPage implements OnInit {
  public getValue;
  public sub;
  id: any;
  cardid : any;
  public card : any[] ;
  code : any ;
  encodeData: any;
  // scannedData: {};
  screen: any;
  state: boolean = false;
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(private route: ActivatedRoute,
    private barcodeScanner: BarcodeScanner,
    private screenshot: Screenshot,
  public apiService: ApiService,
  public navCtrl: NavController) { }


ngOnInit() {
  this.sub = this.route.params.subscribe(params => {
    this.id = params['id'];
  });
  console.log(this.id);
    this.viewCard(this.id);
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

// gencode(id){
//   console.log(id);
  
//   this.apiService.genCode(id)
//   .subscribe((data:any) => //Start Service
//   {
//     this.code = data['card'].code;
//     this.encodedText(this.code);
//     console.log(this.code);
//   },
//   err => {
//     console.log(err);
//     console.log(err.statusText);
//   });


// }

  encodedText(code) {
    this.encodeData =code;

  this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData)
    .then(
      encodedData => {
        console.log(encodedData);
      },
      err => {
        console.log("Error occured : " + err);
      }
    );
}
download:boolean = false;

// Download(){
//   this.download = true;
//    setTimeout(function(){ 
//     // self.state = false;
//     alert('console.log');
//     // this.download = false;
//     this.save();
//   }, 3000);

// }

gotoDownload(){
  // console.log(this.cardid);
  this.navCtrl.navigateForward(['card-download/']+this.cardid);


}

}