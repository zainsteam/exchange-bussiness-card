import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api/api.service';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { Platform, NavController } from '@ionic/angular';
import { Toast } from '@ionic-native/toast/ngx';

@Component({
  selector: 'app-card-download',
  templateUrl: './card-download.page.html',
  styleUrls: ['./card-download.page.scss'],
})
export class CardDownloadPage implements OnInit {
  public sub;
  id: any;
  screen: any;
  state: boolean = false;
  cardid : any;
  public card : any[] ;
  cellNoSharing: boolean;
  multipleShare:boolean;
  constructor(private route: ActivatedRoute,
    public apiService: ApiService,
    private platform: Platform,
    private toast: Toast,
    public navCtrl: NavController,
    private screenshot: Screenshot) { 
   
  }

   ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    console.log('id',this.id);
    this.viewCard(this.id);
    
  }

  // ionViewWillEnter(){
  //   this.save();

  // }

   viewCard(ids) {
    console.log(ids);
    
    this.apiService.getCard(ids)
    .subscribe((data:any) => //Start Service
    {
      this.cardid = data[0]['_id'];
      this.card = data[0]['card'];
      this.cellNoSharing = data[0]['card'].cellNoSharing;
      this.multipleShare = data[0]['card'].mutipleShare;
      console.log(!this.multipleShare);
      
      
    },
    err => {
      console.log(err);
      console.log(err.statusText);
    });
    
    // this.save();
  }
  
  save(){
    
    
    // alert("done;");
    if(this.card['download'] == true || this.card['download'] == undefined){
      if(this.card['mutipleShare'] == false )
      this.updatedownload(this.cardid,this.multipleShare);
      console.log('run')
    this.screenshot.save('jpg', 80, this.cardid).then(res => {
      this.screen = res.filePath;
      this.state = true;
      this.toast.show('Card Save', '5000', 'bottom').subscribe(
        toast => {
          console.log(toast);
        }
        );
        this.navCtrl.navigateForward(['card-list/']);
        this.reset();
      });
    }
    else
    this.toast.show('Download not Allowed', '5000', 'bottom').subscribe(
      toast => {
        console.log(toast);
      }
      );
  }

  updatedownload(cardid,multipleShare){
    console.log(multipleShare);

    this.apiService.updateDownload(cardid,multipleShare)
    .subscribe((data:any) => //Start Service
    {
       console.log(data);
    },
    err => {
      console.log(err);
      console.log(err.statusText);
    });
    
  }

  reset() {
    var self = this;
    setTimeout(function(){ 
      self.state = false;
      this.download = false;
    }, 1000);
  }
}
