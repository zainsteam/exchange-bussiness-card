import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.page.html',
  styleUrls: ['./card-view.page.scss'],
})
export class CardViewPage implements OnInit {
  public getValue;
  public sub;
  id: any;
  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    console.log(this.id);
      this.viewCard(this.id);
  }
  viewCard(ids) {
    console.log(ids);
  }



}
