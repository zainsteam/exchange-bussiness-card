import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.page.html',
  styleUrls: ['./card-list.page.scss'],
})
export class CardListPage implements OnInit {

  public cardname : any[] ;

//   cardname : [
//      "zain",
//      "basit",
//      "arij",
//      "kamran"
// ];

  constructor() { 
    this.cardname = [{
      name : "zain",
     number : "03122880329",
     email : "zain@gmail.com",
     place : "malir"
   },{
      name : "basit",
     number : "03122880329",
     email : "basit@gmail.com",
     place : "malir"
   },{
      name : "arij",
     number : "03122880329",
     email : "arij@gmail.com",
     place : "nazimabad"
   },{
      name : "kamran",
     number : "03122880329",
     email : "kamran@gmail.com",
     place : "safora"
   }] 
  }

  ngOnInit() {
  }

}
