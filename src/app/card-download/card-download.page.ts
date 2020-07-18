import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api/api.service';

@Component({
  selector: 'app-card-download',
  templateUrl: './card-download.page.html',
  styleUrls: ['./card-download.page.scss'],
})
export class CardDownloadPage implements OnInit {
  public sub;
  id: any;
  cardid : any;
  public card : any[] ;
  constructor(private route: ActivatedRoute,
    public apiService: ApiService) { 
   
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    console.log('id',this.id);
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
}
