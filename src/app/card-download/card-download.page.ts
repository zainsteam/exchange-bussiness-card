import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api/api.service';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { Platform } from '@ionic/angular';

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
  constructor(private route: ActivatedRoute,
    public apiService: ApiService,
    private platform: Platform,
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
      console.log(this.card);
      
  
    },
    err => {
      console.log(err);
      console.log(err.statusText);
    });
    
    // this.save();
  }

  save(){

    // alert("done;");
    this.screenshot.save('jpg', 80, this.cardid).then(res => {
      this.screen = res.filePath;
      this.state = true;
      this.reset();
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
