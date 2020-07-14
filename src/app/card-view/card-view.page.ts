import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api/api.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.page.html',
  styleUrls: ['./card-view.page.scss'],
})
export class CardViewPage implements OnInit {
  public getValue;
  public sub;
  id: any;
  cardid : any;
  public card : any[] ;
  code : any ;

  constructor(private route: ActivatedRoute,
    public apiService: ApiService) { }


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

  gencode(id){
    console.log(id);
    
    this.apiService.genCode(id)
    .subscribe((data:any) => //Start Service
    {
      this.code = data['card'].code;
      console.log(this.code);
    },
    err => {
      console.log(err);
      console.log(err.statusText);
    });

  }



}
